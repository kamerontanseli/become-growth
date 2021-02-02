import Link from "next/link";
import { useRouter } from "next/router";
import Subscribe from "../../components/Subscribe";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { NextSeo } from "next-seo";
import { useEffect, useRef, useState } from "react";

export default function BlogDetail({ order, slug, post }) {
  const router = useRouter();
  const parent = useRef(null);
  const index = order.indexOf(slug);
  const progress = (((index + 1) / order.length) * 100).toFixed(0);
  const nextArticleSlug = order[index + 1];
  const prevArticleSlug = index === 0 ? null : order[index - 1];

  const [hide, setHide] = useState(false);

  useEffect(() => {
    const storage = global.localStorage;
    setHide(storage && storage.getItem("subscribed") === "true");
  }, []);

  useEffect(() => {
    if (parent.current) {
      for (const h of parent.current.querySelectorAll('h2, h3')) {
        const slug = encodeURI(h.innerText.toLowerCase().split(' ').join('-'));
        const a = document.createElement('a');
        a.href = '#' + slug;
        h.id = slug;
        a.innerText = h.innerText;
        h.innerHTML = '';
        h.appendChild(a)
      }
    }
  }, [parent]);

  useEffect(() => {
    const listener = (evt) => {
      console.log(evt.keyCode);
      switch (evt.keyCode) {
        // left
        case 37: {
          if (prevArticleSlug) {
            router.push(`/blog/${prevArticleSlug}`);
          } else {
            router.push(`/`);
          }
          break;
        }
        // right
        case 39: {
          if (nextArticleSlug) {
            router.push(`/blog/${nextArticleSlug}`);
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
              url: `https://becomegrowth.com${
                post.data.hero_image || "/meta.png"
              }`,
              width: 454,
              height: 248,
              alt: "test tube",
            },
          ],
        }}
      />
      {hide ? null : (
        <Subscribe
          onHide={() => {
            setHide(true);
            global.localStorage.setItem("subscribed", "true");
          }}
        />
      )}
      <div
        className="container"
        key={slug}
        style={{ marginTop: hide ? 0 : 80 }}
      >
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
          <div ref={parent}>
            <ReactMarkdown linkTarget="_blank" children={post.content} />
          </div>
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
