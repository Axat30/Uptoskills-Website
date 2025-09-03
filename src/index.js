import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // ✅ make sure this line is here
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
