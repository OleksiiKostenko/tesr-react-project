import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Component/App/App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/test-react-project-goit">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
