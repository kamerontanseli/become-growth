import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { NextSeo } from "next-seo";

export default function BlogDetail({ order, slug, post }) {
  const index = order.indexOf(slug);
  const progress = ((index + 1) / order.length) * 100;
  const nextArticleSlug = order[index + 1];
  const prevArticleSlug = index === 0 ? null : order[index - 1];

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
              url: post.data.hero_image || "https://becomegrowth.com/meta.png",
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
          {post.data.hero_image && (
            <div
              className="content-header"
              style={{ backgroundImage: `url(${post.data.hero_image})` }}
              alt={post.data.title}
            />
          )}
          <h1 className="content-title">{post.data.title}</h1>
          <ReactMarkdown source={post.content} />
        </article>
        <div className="navigation">
          <div>
            {prevArticleSlug ? (
              <Link href={`/blog/${prevArticleSlug}`}>
                <a href={`/blog/${prevArticleSlug}`}>&larr; Prev Page</a>
              </Link>
            ) : (
              <Link href={`/`}>
                <a href={`/`}>&larr; Back To Home</a>
              </Link>
            )}
          </div>
          <div>
            {nextArticleSlug && (
              <Link href={`/blog/${nextArticleSlug}`}>
                <a href={`/blog/${nextArticleSlug}`}>Next Page &rarr; </a>
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
