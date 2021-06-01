import React from "react";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <div
      style={{
        backgroundColor: "#1F2235",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "25px",
        position: "fixed",
        width: "100%",
        top: 0,
      }}
    >
      <Link href="/">
        <a>
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
        </a>
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "60%",
          color: "white",
        }}
      >
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div>About</div>
        <div>Projects</div>
        <div>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default DesktopNav;
