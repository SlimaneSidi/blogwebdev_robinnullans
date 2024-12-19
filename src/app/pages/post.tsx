import React, { useState } from "react";
import Navbar from "../navbar";

const PostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(`https://placedog.net/${Math.floor(Math.random() * 500 + 300)}/${Math.floor(Math.random() * 500 + 300)}`);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    const newPost = {
      title,
      content,
      image
    };

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
      });

      if (response.ok) {
        setSuccessMessage("Post créé avec succès !");
        setTitle("");
        setContent("");
        setImage(`https://placedog.net/${Math.floor(Math.random() * 500 + 300)}/${Math.floor(Math.random() * 500 + 300)}`);
      } else {
        alert("Une erreur s'est produite lors de la création du post.");
      }
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
      alert("Impossible de créer le post.");
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Créer un Post</h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "500px", margin: "0 auto" }}
        >
          <div>
            <label htmlFor="title" style={{ display: "block", marginBottom: "0.5rem" }}>Titre</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #ddd", borderRadius: "5px" }}
            />
          </div>
          <div>
            <label htmlFor="content" style={{ display: "block", marginBottom: "0.5rem" }}>Description</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ width: "100%", padding: "0.5rem", border: "1px solid #ddd", borderRadius: "5px" }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={image} alt="Chien généré aléatoirement" style={{ maxWidth: "100%", borderRadius: "8px" }} />
          </div>
          <button
            type="submit"
            style={{ padding: "0.75rem 1.5rem", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Créer le Post
          </button>
        </form>
        {successMessage && <p style={{ textAlign: "center", color: "green", marginTop: "1rem" }}>{successMessage}</p>}
      </main>
    </>
  );
};

export default PostPage;
