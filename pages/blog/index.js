import BlogCard from "../../components/blogCard";
import useMediaQuery from "../../hooks/useMediaQuery";
import { getAllPosts } from "../../lib/postsUtil";

const Blog = (props) => {
  const { posts } = props;
  const breakpoint = 991;
  const size = useMediaQuery(breakpoint);
  const Desktop = () => {
    const isDesktop = !size;
    return isDesktop;
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
          backgroundColor: "#0E141B",
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
        <div style={{ overflow: Desktop ? null : "hidden" }}>
          {posts.map((post) => {
            return <BlogCard key={post.slug} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export function getStaticProps() {
  const featuredPosts = getAllPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default Blog;
