import React from "react";
import LandingPage from "./components/LandingPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { InstagramGallery } from "instagram-gallery";
function App() {
  const accesTokenIG = "24c5849f572ff7c2957e560f5f3215eb";
  return (
    <div className="App">
      <LandingPage />
      <InstagramGallery accessToken={accesTokenIG} count={24} />
    </div>
  );
}

export default App;
