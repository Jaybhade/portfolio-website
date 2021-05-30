import BlogCard from "../components/blogCard";
import Link from "next/link";
import useMediaQuery from "../hooks/useMediaQuery";

const blog = () => {
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
    <div style={{ marginTop: "64px" }}>
      <div
        style={{
          color: "white",
          maxWidth: "700px",
          padding: "15px",
          backgroundColor: "#23263A",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          justifyContent: "center",
          bottom: 0,
        }}
      >
        <div style={{ fontSize: "2.2em", marginTop: "10px", fontWeight: 700 }}>
          Blog
        </div>
        <div>I write technical blogs.</div>
        <div style={{ overflow: "hidden" }}>
          <Link href="/">
            <a>
              <BlogCard left="1" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <BlogCard left="0" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <BlogCard left="1" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <BlogCard left="0" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default blog;
