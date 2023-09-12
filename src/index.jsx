import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ScrollToTop } from "./components";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
);
