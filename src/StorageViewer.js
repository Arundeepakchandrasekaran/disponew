// src/StorageViewer.js
import React, { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "./firebase";

const StorageViewer = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      const folderRef = ref(storage, "product_images/"); // 👈 Your folder path
      try {
        const res = await listAll(folderRef); // list all items in the folder
        const urls = await Promise.all(
          res.items.map((itemRef) => getDownloadURL(itemRef))
        );
        setImageUrls(urls);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError(err.message);
      }
    };

    fetchImages();
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Product Images from Firebase Storage</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "15px" }}>
        {imageUrls.length > 0 ? (
          imageUrls.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`product-${idx}`}
              style={{ width: "200px", height: "auto", borderRadius: "8px", boxShadow: "0 2px 6px rgba(0,0,0,0.2)" }}
            />
          ))
        ) : (
          <p>Loading images...</p>
        )}
      </div>
    </div>
  );
};

export default StorageViewer;
