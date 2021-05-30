import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
//icons
import MenuIcon from "../icons/menu";
import CrossIcon from "../icons/cross";
import GithubIcon from "../icons/github";
import InstaIcon from "../icons/insta";
import GmailIcon from "../icons/gmail";
import LinkedinIcon from "../icons/linkedin";
import TelegramIcon from "../icons/telegram";

const MobileNav = () => {
  const [show, setShow] = useState(false);
  const list = { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } };
  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  if (!show) {
    return (
      <div
        style={{
          backgroundColor: "#1F2235",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "25px",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            fontFamily: "satisfy",
            fontSize: "28px",
            color: "white",
            fontWeight: "700",
          }}
        >
          J
        </div>
        <div onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
          <MenuIcon />
        </div>
      </div>
    );
  }
  if (show) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#1F2235",
          position: "fixed",
          color: "white",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            backgroundColor: "#1F2235",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "25px",
            width: "100%",
            top: 0,
          }}
        >
          <div
            style={{
              fontFamily: "satisfy",
              fontSize: "28px",
              color: "white",
              fontWeight: "700",
            }}
          >
            J
          </div>
          <div onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
            <CrossIcon />
          </div>
        </div>
        <motion.div
          variants={list}
          initial="hidden"
          animate="visible"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: "100%",
            fontSize: "24px",
          }}
        >
          <motion.div
            variants={item}
            transition={{ duration: 0.4 }}
            initial="hidden"
            animate="visible"
          >
            <Link href="/">
              <a>Home</a>
            </Link>
          </motion.div>
          <motion.div
            variants={item}
            transition={{ duration: 0.5 }}
            initial="hidden"
            animate="visible"
          >
            About
          </motion.div>
          <motion.div
            variants={item}
            transition={{ duration: 0.6 }}
            initial="hidden"
            animate="visible"
          >
            Projects
          </motion.div>
          <motion.div
            variants={item}
            transition={{ duration: 0.7 }}
            initial="hidden"
            animate="visible"
          >
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </motion.div>
          <motion.div
            variants={item}
            transition={{ duration: 0.8 }}
            initial="hidden"
            animate="visible"
          >
            Contact
          </motion.div>
          <motion.div
            variants={item}
            transition={{ duration: 0.9 }}
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              width: "60%",
              marginBottom: "40px",
              marginLeft: "5px",
              marginRight: "5px",
              padding: "10px",
            }}
          >
            <GithubIcon />
            <LinkedinIcon />
            <GmailIcon />
            <InstaIcon />
            <TelegramIcon />
          </motion.div>
        </motion.div>
      </div>
    );
  }
};

export default MobileNav;
