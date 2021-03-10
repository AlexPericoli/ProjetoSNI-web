import React from "react";
import Routes from "./routes";

import { ThemeProvider } from "styled-components";

import "./assets/styles/global.css";
import { Cores } from "./assets/styles/cores";

import { AppContainer } from "./assets/styles/styles";

function App() {
   return (
      <ThemeProvider theme={Cores}>
         <AppContainer>
            <Routes />
         </AppContainer>
      </ThemeProvider>
   );
}

export default App;
