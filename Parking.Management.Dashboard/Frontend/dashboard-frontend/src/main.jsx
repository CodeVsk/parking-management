import React from "react";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/App.css";
import GlobalProvider from "./global/providers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GlobalProvider>
);
