import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './styles/index.css'

import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import Fonts from "./components/Fonts";

const theme = extendBaseTheme({
  colors: {
    pale: {
      pink: "#fadadd",
    },
  },

});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
        <App />
    </ChakraProvider>
  </React.StrictMode>
);
