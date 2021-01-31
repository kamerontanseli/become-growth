import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { NextSeo } from "next-seo";
import { useEffect } from "react";

export default function BlogDetail({ order, slug, post }) {
  const index = order.indexOf(slug);
  const progress = (((index + 1) / order.length) * 100).toFixed(0);
  const nextArticleSlug = order[index + 1];
  const prevArticleSlug = index === 0 ? null : order[index - 1];

  useEffect(() => {
    const listener = (evt) => {
      console.log(evt.keyCode);
      switch (evt.keyCode) {
        // left
        case 37: {
          if (prevArticleSlug) {
            location.pathname = `/blog/${prevArticleSlug}`;
          } else {
            location.pathname = "/";
          }
          break;
        }
        // right
        case 39: {
          if (nextArticleSlug) {
            location.pathname = `/blog/${nextArticleSlug}`;
          }
          break;
        }
        default:
          return;
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <>
      <NextSeo
        title={post.data.title}
        description={post.data.byline}
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://becomegrowth.com/",
          site_name: "Become Growth",
          images: [
            {
              url: `https://becomegrowth.com${post.data.hero_image || "/meta.png"}`,
              width: 454,
              height: 248,
              alt: "test tube",
            },
          ],
        }}
      />
      <div key={slug}>
        <div className="progress">
          <progress min="0" value={progress} max="100"></progress>
          <p>{progress}% Complete</p>
        </div>
        <article className="content">
          <h1 className="content-title">{post.data.title}</h1>
          {post.data.hero_image && (
            <img
              src={post.data.hero_image}
              alt={post.data.title}
              style={{ marginBottom: "40px" }}
            />
          )}
          <ReactMarkdown source={post.content} />
        </article>
        <div className="navigation">
          <div>
            {prevArticleSlug ? (
              <Link href={`/blog/${prevArticleSlug}`}>
                <a href={`/blog/${prevArticleSlug}`}>&larr; Prev</a>
              </Link>
            ) : (
              <Link href={`/`}>
                <a href={`/`}>&larr; Home</a>
              </Link>
            )}
          </div>
          <div>
            <Link href={`/toc`}>
              <a href={`/toc`}>Table Of Contents</a>
            </Link>
          </div>
          <div>
            {nextArticleSlug && (
              <Link href={`/blog/${nextArticleSlug}`}>
                <a href={`/blog/${nextArticleSlug}`}>Next &rarr; </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const fs = require("fs").promises;
  const files = await fs.readdir("./posts");

  return {
    paths: files.map((f) => ({ params: { slug: f.split(".")[0] } })),
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const fs = require("fs").promises;
  const files = await fs.readdir("./posts");
  const order = files.sort().map((f) => f.split(".")[0]);

  const content = await import(`../../posts/${ctx.params.slug}.md`);
  const post = matter(content.default);
  delete post.orig;

  return {
    props: { order, post, slug: ctx.params.slug },
  };
}
