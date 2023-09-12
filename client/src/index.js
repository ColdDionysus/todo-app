import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import APIContextProvider from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <APIContextProvider>
      <App />
    </APIContextProvider>
  </React.StrictMode>
);
