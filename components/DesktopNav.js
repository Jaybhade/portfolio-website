import React from "react";
import Link from "next/link";
import Head from "next/head";

const DesktopNav = () => {
  return (
    <div>
      <Head>
        <link rel="manifest" href="manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Jayesh" />
        <meta name="apple-mobile-web-app-title" content="Jayesh" />
        <meta name="theme-color" content="#1f2235" />
        <meta name="msapplication-navbutton-color" content="#1f2235" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel="icon" type="image/png" sizes="512x512" href="logo.png" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="512x512"
          href="logo.png"
        />
        <title>Jayesh Bhade Portfolio</title>
        <meta
          name="description"
          content="I am a Fullstack Web Developer, React Native developer
              and Competitive coder."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
      </Head>
      <div
        style={{
          backgroundColor: "#1F2235",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "25px",
          position: "fixed",
          width: "100%",
          top: 0,
        }}
      >
        <Link href="/">
          <a>
            <div
              style={{
                fontFamily: "satisfy",
                fontSize: "28px",
                color: "white",
                fontWeight: "700",
              }}
            >
              J
            </div>
          </a>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "60%",
            color: "white",
          }}
        >
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div>About</div>
          <div>
            <Link href="/#projects">
              <a>Projects</a>
            </Link>
          </div>
          <div>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
