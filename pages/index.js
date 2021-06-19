import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import useMediaQuery from "../hooks/useMediaQuery";
import Programmer from "../components/programmer2.svg";
import Tag from "../components/tag";
import GithubIcon from "../icons/github";

export default function Home() {
  const breakpoint = 991;
  const size = useMediaQuery(breakpoint);
  const Desktop = ({ children }) => {
    const isDesktop = !size;
    return isDesktop ? children : null;
  };
  const NotDesktop = ({ children }) => {
    const isTablet = size;
    return isTablet ? children : null;
  };

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
          //scrollSnapType: "y mandatory",
          //overflowY: "scroll",
        }}
      >
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: Desktop ? "row" : "column",
            justifyContent: "space-around",
            alignItems: "center",
            marginLeft: "20px",
            marginRight: "20px",
            //scrollSnapAlign: "start",
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
            <NotDesktop
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <Image
                  src={Programmer}
                  width={300}
                  height={300}
                  alt="programmer"
                />
              </div>
            </NotDesktop>
            - Introduction
            <h1 style={{ color: "white" }}>
              I am{" "}
              <span style={{ fontWeight: "700", color: "#FF4A57" }}>
                Jayesh Bhade
              </span>
            </h1>
            <div style={{ color: "white" }}>
              I am a self taught developer. I love building stuffs for web and
              mobile using: Javascript/Typescript,
              <Image
                className="rotate"
                src={"/techstack/react.png"}
                width={15}
                height={15}
              />
              ReactJS, NodeJS and React Native.
            </div>
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
          <Desktop>
            <div>
              <Image
                src={Programmer}
                width={450}
                height={450}
                alt="programmer"
              />
            </div>
          </Desktop>
        </div>
        <div
          style={{
            //scrollSnapAlign: "start",
            margin: "auto",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Source Sans Pro",
            color: "white",
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          <div style={{ color: "white" }}>
            <h1 id="projects">Projects</h1>
          </div>
          <div
            style={{
              padding: "20px",
              maxWidth: "700px",
              backgroundColor: "#2D3748",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <Image
              src={"/project/portfolio.png"}
              width={1366}
              height={768}
              alt="portfolio website"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div>
                <h2 style={{ marginRight: "10px" }}>Portfolio Website</h2>
              </div>
              <div>
                <Link href="https://github.com/Jaybhade/portfolio-website">
                  <a target="_blank">
                    <GithubIcon />
                  </a>
                </Link>
              </div>
            </div>
            <div style={{ marginBottom: "15px" }}>
              A portfolio website to showcase all my projects on same platform
              and write technical blogs on topics I recently explored.
            </div>
            <Tag>#NextJs</Tag>
            <Tag>#ReactJs</Tag>
            <Tag>#Framer</Tag>
            <Tag>#Javascript</Tag>
            <NotDesktop>
              <br />
              <br />
            </NotDesktop>
            <Tag>#Firebase</Tag>

            <Tag>#Markdown</Tag>
            <Tag>#PWA</Tag>
          </div>
          <div
            style={{
              padding: "20px",
              maxWidth: "700px",
              backgroundColor: "#2D3748",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <Image
              src={"/project/covid-19_tracker.png"}
              width={1366}
              height={768}
              alt="covid-19 tracker"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div>
                <h2 style={{ marginRight: "10px" }}>Covid-19 Tracker</h2>
              </div>
              <div>
                <Link href="https://github.com/Jaybhade/covid19Tracker">
                  <a target="_blank">
                    <GithubIcon />
                  </a>
                </Link>
              </div>
            </div>
            <div style={{ marginBottom: "15px" }}>
              An application made of React Native framework uses APIs to fetch
              the number of covid cases related information.
            </div>
            <Tag>#ReactNative</Tag>
            <Tag>#APIs</Tag>
            <Tag>#Android/Ios</Tag>
            <NotDesktop>
              <br />
              <br />
            </NotDesktop>
            <Tag>#Javascript</Tag>
          </div>
          <div
            style={{
              padding: "20px",
              maxWidth: "700px",
              backgroundColor: "#2D3748",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          >
            <Image
              src={"/project/postman.png"}
              width={1366}
              height={768}
              alt="ecommerce api"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div>
                <h2 style={{ marginRight: "10px" }}>Ecommerce API</h2>
              </div>
              <div>
                <Link href="https://github.com/Jaybhade/expressjs-ecommerce-api">
                  <a target="_blank">
                    <GithubIcon />
                  </a>
                </Link>
              </div>
            </div>
            <div style={{ marginBottom: "15px" }}>
              Rest APIs made with Nodejs express framework to perform crud
              operation for token-based authentication, products, orders, and
              other activities.
            </div>
            <Tag>#NodeJs</Tag>
            <Tag>#ExpressJs</Tag>
            <Tag>#Mongodb</Tag>
            <NotDesktop>
              <br />
              <br />
            </NotDesktop>
            <Tag>#Typescript</Tag>
          </div>
        </div>
      </div>
    </div>
  );
}
