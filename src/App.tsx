import React from "react";
import EventosEmAberto from "./eventos/EventosEmAberto";
import Login from "./login/Login";
import { ThemeProvider } from "@mui/material";
import { theme } from "./layout/Theme";
import CadastroDeAtleta from "./cadastro de atelta/CadastroDeAtleta";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CadastroDeAtleta />
      </ThemeProvider>
    </>
  );
}

export default App;
