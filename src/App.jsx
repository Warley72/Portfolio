import React from "react";

import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

import Introduction from "./components/layout/introduction/introduction";
import Technology from "./components/layout/technology/Technology";
import Projects from "./components/layout/Projects/Projects";
import Footer from "./components/layout/footer/footer";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <div>
          <Introduction />
          <Technology/>
          <Projects/>
          <Footer />
          
        </div>
    </ThemeProvider>
  );
}
