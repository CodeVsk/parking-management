import React from "react";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/App.css";
import GlobalProvider from "./global/providers.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
