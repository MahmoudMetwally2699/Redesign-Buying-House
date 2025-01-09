import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/index"; // Import the HomePage content from index.jsx
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
        <Footer />
    </div>
  );
}

export default App;
