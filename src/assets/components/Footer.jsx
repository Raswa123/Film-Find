import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(180deg, #0d0809 0%, #17090b 100%)",
        borderTop: "1px solid #321316",
        padding: "60px 20px 35px",
        color: "#f5eeee",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "25px",
            fontWeight: "700",
          }}
        >
          Film<span style={{ color: "#8f252c" }}>Find</span>
        </h2>

        <p
          style={{
            color: "#9f8d8f",
            maxWidth: "550px",
            margin: "0 auto 30px",
            lineHeight: "1.7",
          }}
        >
          Discover movies, explore stories, and find something worth
          watching.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
            marginBottom: "35px",
          }}
        >
          <span
            style={{
              color: "#cbbabc",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <MdEmail color="#8f252c" />
            filmfinder@gmail.com
          </span>

          <span
            style={{
              color: "#cbbabc",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaPhoneAlt color="#8f252c" />
            7902313039
          </span>
        </div>

        <div
          style={{
            borderTop: "1px solid #321316",
            paddingTop: "25px",
            color: "#766568",
            fontSize: "14px",
          }}
        >
          Designed & built with{" "}
          <FaHeart
            style={{
              color: "#8f252c",
              margin: "0 4px",
            }}
          />{" "}
          using React
        </div>
      </div>
    </footer>
  );
}

export default Footer;