// IMPORTING THE REACT FROM REACT PACKAGE
import React from "react";
// IMPORTING THE REACT DOM
import ReactDOM from "react-dom/client";
// IMPORTINFG THE APP FUNCTION
import App from "./Components/App";
// DEFING THE ROOT WHICH ACCEPTS ID ROOT
const root = ReactDOM.createRoot(document.getElementById("root"));

// RENDERING THE APP
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
