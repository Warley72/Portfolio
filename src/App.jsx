import React from "react";

import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Introduction from "./components/layout/introduction/introduction";
import Technology from "./components/layout/technology/technology";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <div>
          <Introduction />
          <Technology />
        </div>
    </ThemeProvider>
  );
}
