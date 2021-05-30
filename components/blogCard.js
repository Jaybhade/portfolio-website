import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BlogCard = ({ left }) => {
  const item = {
    hidden: { x: left === "1" ? -80 : 80, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
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
        marginBottom: "15px",
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
        <div style={{ fontSize: "24px", fontWeight: 600 }}>
          React Hooks in React Native
        </div>
        <div
          style={{
            backgroundColor: "#23263A",
            color: "grey",
            padding: "10px",
            marginTop: "-48px",
          }}
        >
          30/03/2000
        </div>
      </div>
      <div style={{ color: "grey" }}>
        To simplify our solution let’s implement three functions that will help
        us to validate if is possible to place a digit in certain cell. The
        function isInRow returns true if a digit is present in a given row,
        false otherwise.
      </div>
    </motion.div>
  );
};

export default BlogCard;
