import React from "react";
import { createRoot } from "react-dom"; // Import createRoot from react-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./components/Pages/home.jsx";
import BlogPage from "./components/Pages/blog.jsx";
import BudayaPage from "./components/Pages/budaya.jsx";

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/budaya" element={<BudayaPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
