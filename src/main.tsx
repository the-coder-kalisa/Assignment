import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CatsBreedProvider from "./context/CatsBreed";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyles from "./styles/GlobalStyles";

// creating react query client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CatsBreedProvider>
        <GlobalStyles />
        <App />
      </CatsBreedProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
