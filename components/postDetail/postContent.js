import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { motion } from "framer-motion";
import Link from "next/link";
import useMediaQuery from "../../hooks/useMediaQuery";
// import Image from "next/image";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from "./postHeader";

function PostContent(props) {
  const breakpoint = 991;
  const size = useMediaQuery(breakpoint);
  const sizex = useMediaQuery(1200);
  const Desktop = ({ children }) => {
    const isDesktop = !size;
    return isDesktop ? children : null;
  };
  const NotDesktop = ({ children }) => {
    const isTablet = size;
    return isTablet ? children : null;
  };

  const { post } = props;
  const item = {
    hidden: { y: 80, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Desktop>
        <div
          style={{
            width: "200px",
            marginTop: "64px",
            position: "fixed",
          }}
        >
          <ul>
            {post?.timeline?.map((content, index) => {
              return (
                <li key={index} className="timeline">
                  <Link href={content.link}>
                    <a>{content.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div style={{ width: "200px" }}></div>
      </Desktop>
      <article>
        <PostHeader title={post.title} timeline={post.timeline} />
        <motion.div
          variants={item}
          transition={{ duration: 0.3 }}
          initial="hidden"
          animate="visible"
        >
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {post.content}
          </ReactMarkdown>
        </motion.div>
      </article>
      {!sizex && (
        <Desktop>
          <div style={{ width: "200px" }}></div>
        </Desktop>
      )}
    </div>
  );
}

export default PostContent;
