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
