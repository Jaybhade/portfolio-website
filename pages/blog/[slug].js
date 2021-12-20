import Head from "next/head";
import { Fragment } from "react";

import PostContent from "../../components/postDetail/postContent";
import { getPostData, getPostsFiles } from "../../lib/postsUtil";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <div
        style={{
          margin: "auto",
          color: "white",
          padding: "15px",
        }}
      >
        <PostContent post={props.post} />
      </div>
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
