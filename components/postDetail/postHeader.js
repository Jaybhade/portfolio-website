import Image from "next/image";

function PostHeader(props) {
  const { title, timeline } = props;

  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default PostHeader;
