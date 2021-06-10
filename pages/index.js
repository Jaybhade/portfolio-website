import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
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
        <title>Jayesh Bhade</title>
        <meta
          name="description"
          content="I am a Fullstack Web Developer, React Native developer
              and Competitive coder."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          backgroundColor: "#0E141B",
          marginTop: "64px",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <motion.div
            variants={item}
            transition={{ duration: 0.6 }}
            initial="hidden"
            animate="visible"
            style={{
              color: "grey",
              fontFamily: "Roboto mono",
              padding: "15px",
              maxWidth: "480px",
            }}
          >
            - Introduction
            <h1 style={{ color: "white" }}>
              I am{" "}
              <span style={{ fontWeight: "700", color: "#FF4A57" }}>
                Jayesh Bhade
              </span>
            </h1>
            <p>
              I am a Fullstack Web Developer, React Native developer and
              Competitive coder.
            </p>
            {/* <span
              style={{
                padding: 15,
                borderWidth: 2,
                borderColor: "white",
                color: "white",
                backgroundColor: "#1565C0",
                borderRadius: 5,
              }}
            >
              Download Resume
            </span> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
