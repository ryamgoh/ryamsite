import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <App />
    </div>
  </React.StrictMode>
);
