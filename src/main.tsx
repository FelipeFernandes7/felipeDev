import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyle } from "./styles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
