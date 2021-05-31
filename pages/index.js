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
        <title>👋 Hello!</title>
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
          height: "100%",
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
            }}
          >
            - Introduction
            <h1 style={{ color: "white" }}>
              I am{" "}
              <span style={{ fontWeight: "700", color: "#FF4A57" }}>
                Jayesh Bhade
              </span>
            </h1>
            <p></p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
