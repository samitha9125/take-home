import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/source-sans-pro";

import "./index.css";
import App from "./App.js";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Container not found");
}

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
