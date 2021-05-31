import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogCard = (props) => {
  const { title, image, excerpt, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const item = {
    hidden: { y: 80, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <motion.div
          variants={item}
          transition={{ duration: 0.3 }}
          initial="hidden"
          animate="visible"
          style={{
            borderColor: "grey",
            border: "1px solid grey",
            padding: "10px",
            marginTop: "25px",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItem: "center",
              marginTop: "15px",
            }}
          >
            <div style={{ fontSize: "24px", fontWeight: 600 }}>{title}</div>
            <div
              style={{
                backgroundColor: "#0E141B",
                color: "grey",
                padding: "10px",
                marginTop: "-48px",
                color: "#FF4A57",
              }}
            >
              {formattedDate}
            </div>
          </div>
          <div style={{ color: "grey" }}>{excerpt}</div>
        </motion.div>
      </a>
    </Link>
  );
};

export default BlogCard;
