import "../styles/globals.css";
import Head from "next/head";
import MobileNav from "../components/MobileNav";
import DesktopNav from "../components/DesktopNav";
import useMediaQuery from "../hooks/useMediaQuery";

const MyApp = ({ Component, pageProps }) => {
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

  return (
    <div style={{ backgroundColor: "#0E141B" }}>
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sriracha&display=swap"
          rel="stylesheet"
        />
      </Head>

      <NotDesktop>
        <MobileNav />
      </NotDesktop>
      <Desktop>
        <DesktopNav />
      </Desktop>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
