import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { motion } from "framer-motion";
// import Image from "next/image";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from "./postHeader";

function PostContent(props) {
  const { post } = props;
  const item = {
    hidden: { y: 80, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <article>
      <PostHeader
        title={post.title}
        // image={imagePath}
      />
      <motion.div
        variants={item}
        transition={{ duration: 0.3 }}
        initial="hidden"
        animate="visible"
        s
      >
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {post.content}
        </ReactMarkdown>
      </motion.div>
    </article>
  );
}

export default PostContent;
