import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Ensure this is the correct path to your App component
import "./styles.css"; // Import your CSS file from the src folder

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
