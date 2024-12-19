import Image from "next/image";
import posts from "../../post.json";

import React from "react";
import Navbar from "./navbar"; 

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Blog sur les Chiens</h1>
        <section style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {posts.map((post) => (
            <article key={post.title} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "1rem", boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" }}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default BlogPage;
