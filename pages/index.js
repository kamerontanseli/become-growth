import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <img
            src="/me.jpg"
            width={80}
            style={{ borderRadius: 80, display: "block", margin: "0 auto" }}
            alt="Kameron Tanseli"
          />
          <p>Hi! I’m Kameron.</p>
          <p>
            Welcome to Become Growth, a resource for Developers who want to make
            the leap to become Growth Engineers.
          </p>
          <p>
            I built Become Growth, after finding out that the knowledge of
            growth engineering is scattered between various growth hacking,
            product engineering, and ancient marketing textbooks.
          </p>
          <p>
            My aim with this site is to distill growth engineering into a simple
            linear course so that you can ace any Growth Engineering interview
            that comes your way (or even use the skills to start a startup).
          </p>
          <p>
            <Link href="/blog/1-what-is-a-growth-engineer">
              <a
                style={{ marginTop: 20 }}
                className="btn"
                href="/blog/1-what-is-a-growth-engineer"
              >
                Start Course
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
