import Link from "next/link";
import matter from "gray-matter";

export default function Toc({ pages }) {
  return (
    <>
      <div>
        <article className="content">
          <h1>Table of Contents</h1>
          {pages.map((page, index) => (
            <p key={page.path}>
              <Link href={page.path}>
                <a href={page.path}>{index + 1}) {page.data.title}</a>
              </Link>
            </p>
          ))}
        </article>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const fs = require("fs").promises;
  const files = (await fs.readdir("./posts")).sort();
  const content = (
    await Promise.all(files.map((f) => fs.readFile(`./posts/${f}`)))
  ).map(matter);

  const pages = content.map((c, i) => {
    delete c.orig;
    return {
      ...c,
      path: `/blog/${files[i].split('.')[0]}`
    };
  });

  return {
    props: { pages },
  };
}
