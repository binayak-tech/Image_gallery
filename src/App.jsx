import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ImageUpload from "./components/ImageUpload";
import ImageGrid from "./components/ImageGrid";

function App() {
  return (
    <div className="App">
      <ImageUpload />
      <ImageGrid />
    </div>
  );
}

export default App;
