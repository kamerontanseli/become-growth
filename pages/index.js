import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <div
          className="hero-image"
          style={{
            background:
              "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(/cover.jpeg) center",
          }}
        ></div>
        <div className="wrapper">
          <div className="hero">
            <div className="hero-content">
              <a href="/" className="hero-title">
                <span style={{ marginRight: 5 }}>🧪</span> Become Growth{" "}
                <span className="hero-title-author">by Kameron Tanseli</span>
              </a>
              <h1 className="hero-main">
                Learn How To Become A Growth Engineer
              </h1>
              <p className="hero-submain">
                Introducing the first ebook to take you from Developer
                to a ready-to-hire Growth Engineer that can help scale
                startups.
              </p>
              <form
                data-netlify
                name="early-access"
                method="post"
                action="/thanks"
                className="form"
              >
                <h3 className="form-title">Get Early Access To The Ebook</h3>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
                <button className="form-btn" type="submit">
                  Get Access
                </button>
              </form>
            </div>
          </div>
          <div className="grid">
            <div className="grid-content">
              <p>
                Growth Engineering is a relatively niche career that started
                appearing recently at small startups (Tray.io, Qatalog) and
                established tech companies (Square, Facebook, Dropbox) in the
                last 5 years.
              </p>
              <p>
                You've probably heard of Growth Hacking and it's ability to
                <strong>
                  {" "}
                  rapidly scale startups such as Dropbox and Facebook
                </strong>
                . But you probably haven't heard much about Growth Engineering.
              </p>
              <p>
                Up until this point, Growth has been more of a marketing role
                than a product role. That is where Growth Engineers change the
                game.
              </p>
              <p>
                Growth Engineers work on improving the product, marketing
                website, and internal functions in order to impact all stages of
                a self-serve business' funnel.
              </p>
              <p>
                TLDR; You{" "}
                <strong>
                  operate like a technical co-founder but with less risk and a
                  full-time salary
                </strong>
                . So if you're a Developer with a love for marketing & metrics, you'll love
                Growth Engineering.
              </p>
            </div>
            <div></div>
          </div>
          <div className="grid">
            <div className="grid-content">
              <h2 style={{ margin: 0 }}>Who This Is For</h2>
            </div>
          </div>
          <div className="grid">
            <div className="grid-content">
              <h3 style={{ marginTop: 0 }}>Small Startup Developers</h3>
              <p>
                If you've worked at a small startup, you've probably enjoyed
                working in different parts of the organisation.
              </p>
              <p>
                As a Growth Engineer, it'll be your job to optimise every part
                of a startup in order to reach the growth goals of the company.
              </p>
            </div>
            <div>
              <div
                className="image"
                style={{ backgroundImage: `url(/startup.jpeg)` }}
              ></div>
            </div>
          </div>
          <div className="grid">
            <div className="grid-content">
              <h3 style={{ marginTop: 0 }}>Product Engineers</h3>
              <p>
                If you're already a Product Engineer the jump to Growth
                Engineering is relatively easy as you're already 80% there in
                terms of mindset.
              </p>
              <p>
                What's missing is the key learnings in areas such as funnels,
                landing page optimisation, and key marketing metrics.
              </p>
            </div>
            <div>
              <div
                className="image"
                style={{ backgroundImage: `url(/product-eng.jpeg)` }}
              ></div>
            </div>
          </div>
          <div className="grid">
            <div className="grid-content">
              <h3 style={{ marginTop: 0 }}>Marketers</h3>
              <p>
                If you're a Marketer who is learning how to code then why not
                make the jump to becoming a Growth Engineer.
              </p>
              <p>
                You'll have a head start with your in-depth knowledge of
                marketing strategies, funnels, and key metrics.
              </p>
            </div>
            <div>
              <div
                className="image"
                style={{ backgroundImage: `url(/marketers.jpeg)` }}
              ></div>
            </div>
          </div>
          <div className="grid">
            <div className="grid-content">
              <h2 style={{ margin: 0 }}>What's in the Book?</h2>
            </div>
          </div>
          <div className="content-boxes">
            <div className="content-box">
              <small>Mindset</small>
              <h4>What is a Growth Engineer?</h4>
              <p>How do Growth Engineers differ from hackers & PMs</p>
            </div>
            <div className="content-box">
              <small>Management</small>
              <h4>Setting Up Growth Experiments</h4>
              <p>Following the framework to optimise metrics.</p>
            </div>
            <div className="content-box">
              <small>Mindset</small>
              <h4>Thinking In Terms Of Data</h4>
              <p>How to think & act like a scientist at work.</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }
        body {
          background-color: #00230a;
          padding: 0;
          margin: 0;
          line-height: 1.7;
          font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        img {
          max-width: 100%;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            top: 10px;
          }
          100% {
            opacity: 1;
            top: 0px;
          }
        }
      `}</style>
      <style jsx>{`
        .wrapper {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }
        .hero {
          height: 1000px;
          width: 100%;
          position: relative;
          margin-bottom: 40px;
        }
        .hero-image {
          width: 60vw;
          height: 1000px;
          background-position: center;
          background-size: cover;
          position: absolute;
          right: 0;
          z-index: 1;
        }
        .hero-content {
          position: absolute;
          z-index: 2;
          margin-top: 80px;
          width: 100%;
          animation: fadeIn ease 2s;
          -webkit-animation: fadeIn ease 2s;
        }
        .hero-title {
          display: inline-block;
          font-size: 1.2em;
          font-weight: 600;
          margin-top: 0;
          margin-bottom: 20px;
          color: #fff;
          text-decoration: none;
        }
        .hero-title-author {
          font-size: 0.65em;
          font-weight: 100;
          margin-left: 5px;
          color: #fff;
        }
        .hero-main {
          margin-top: 0;
          margin-bottom: 10px;
          font-size: 5em;
          line-height: 1.5em;
          color: #fff;
        }
        .hero-submain {
          color: #fff;
          line-height: 1.9em;
          font-size: 1.4em;
          margin-bottom: 40px;
        }
        .form {
          padding: 40px;
          border: 1px solid #fff;
          max-width: 450px;
        }
        .form-title {
          margin-top: 0;
          color: #fff;
          margin-bottom: 20px;
        }
        .form-input {
          width: 100%;
          color: #fff;
          margin-bottom: 20px;
          height: 80px;
          padding: 0;
          font-size: 2em;
          background-color: transparent;
          outline: none;
          border: 0;
        }
        .form-input::placeholder {
          color: #fff;
          font-weight: 600;
        }
        .form-btn {
          display: block;
          width: 100%;
          height: 60px;
          font-size: 1.2em;
          font-weight: 600;
          background-color: #d04b00;
          color: #fff;
          cursor: pointer;
          border: 0;
        }

        .form-btn:hover {
          background-color: #963600;
        }

        .grid {
          margin: 80px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 40px;
          animation: fadeIn ease 1s;
          -webkit-animation: fadeIn ease 1s;
          align-items: center;
          position: relative;
          animation: fadeIn ease 2s;
          -webkit-animation: fadeIn ease 2s;
        }

        .grid-content p {
          color: #fff;
          font-size: 1.6em;
          font-weight: 300;
        }

        .grid-content h2 {
          font-size: 3em;
          color: #fff;
        }

        .grid-content h3 {
          font-size: 2.2em;
          color: #fff;
        }

        .grid-content > *:last-child {
          margin-bottom: 0;
        }

        .image {
          height: 400px;
          background-size: cover;
          background-position: center;
          box-shadow: 2px 2px 8px #001d08;
        }

        .content-boxes {
          margin: 80px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
          position: relative;
          animation: fadeIn ease 2s;
          -webkit-animation: fadeIn ease 2s;
        }

        .content-box {
          padding: 20px;
          border: 1px solid #fff;
        }

        .content-box h4 {
          color: #fff;
          margin-top: 5px;
          font-size: 1.6em;
          margin-bottom: 5px;
        }

        .content-box small {
          color: #fff;
          opacity: 0.7;
        }

        .content-box p {
          margin: 0;
          color: #fff;
          opacity: 0.7;
        }

        @media screen and (max-width: 900px) {
          .grid {
            margin: 40px 0;
            grid-template-columns: 1fr;
          }
          .hero-content {
            margin-top: 40px;
          }
          .hero {
            height: 900px;
          }
          .wrapper {
            max-width: 100%;
            width: 100%;
            padding: 0 20px;
          }
          .hero-main {
            font-size: 3em;
          }
          .form {
            max-width: 100%;
            width: 100%;
          }
          .hero-image {
            width: 100%;
            height: 900px;
            left: 0;
          }
          .content-boxes {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
