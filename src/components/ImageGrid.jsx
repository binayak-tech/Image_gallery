import React, { useEffect, useState } from "react";
import api from "../api";
import "./ImageGrid.css";

function ImageGrid() {
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    api
      .get("/api/images")
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleDelete = (imageId) => {
    api
      .delete(`/api/images/${imageId}`)
      .then((response) => {
        console.log("Image deleted successfully:", response.data);
        // After deletion, fetch images again to update the grid
        fetchImages();
      })
      .catch((error) => {
        console.error("Error deleting image:", error);
      });
  };

  return (
    <div className="ImageGrid">
      <h2 className="CenteredHeading">Image Grid</h2>
      <div className="image-grid row">
        {images.map((image) => (
          <div key={image.id} className="ImageCard col-md-3">
            <img
              src={`http://localhost:5000/${image.filename}`}
              alt={image.title}
            />
            <p>{image.title}</p>
            <p>{image.description}</p>
            <button
              onClick={() => handleDelete(image.id)}
              className="DeleteButton"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
