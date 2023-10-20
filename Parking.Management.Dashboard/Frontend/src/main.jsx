import React from "react";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import ReactDOM from "react-dom/client";
import "./style/main.css";
import GlobalProvider from "./global/providers.jsx";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
