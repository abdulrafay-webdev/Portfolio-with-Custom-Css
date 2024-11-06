"use client";
import React from "react";
import About from "../../../components/About";

const page = () => {
  return (
    <div
      style={{
        backgroundColor: "#1a2b3c",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <About />
    </div>
  );
};

export default page;
