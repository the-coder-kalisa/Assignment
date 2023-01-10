import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CatsBreedProvider from "./context/CatsBreed";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CatsBreedProvider>
      <App />
    </CatsBreedProvider>
  </React.StrictMode>
);
