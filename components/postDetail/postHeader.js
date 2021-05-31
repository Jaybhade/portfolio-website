import Image from "next/image";

function PostHeader(props) {
  const { title } = props;

  return (
    <header>
      <h1>{title}</h1>
      {/* <Image src={image} alt={title} width={200} height={150} /> */}
    </header>
  );
}

export default PostHeader;
