import React, { useState } from "react";
import api from "../api";
import "./ImageUpload.css";

function ImageUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", imageFile);

    api
      .post("/api/images/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Image uploaded successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div id="upload">
      <div className="UploadForm">
        <h1>Image Upload</h1>
        <div className="FormField">
          <label className="Label">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="Input"
          />
        </div>
        <div className="FormField">
          <label className="Label">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="Input"
          />
        </div>
        <div className="FormField">
          <label className="Label">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="FileInput"
          />
        </div>
        <button onClick={handleUpload} className="UploadButton">
          Upload Image
        </button>
      </div>
    </div>
  );
}

export default ImageUpload;
