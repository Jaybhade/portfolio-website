import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from "./postHeader";

function PostContent(props) {
  const { post } = props;

  return (
    <article>
      <PostHeader
        title={post.title}
        // image={imagePath}
      />
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
