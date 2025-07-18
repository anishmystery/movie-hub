import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AppBar from "./components/AppBar.jsx";
import SearchBar from "./components/SearchBar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppBar />
      <SearchBar />
      <App />
    </BrowserRouter>
  </StrictMode>
);
