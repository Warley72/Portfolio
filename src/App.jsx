import React from "react";

import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <div>
          <h1>Software engineer | React-native</h1>
        </div>
    </ThemeProvider>
  );
}
