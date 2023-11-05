import React from "react";
import EventosEmAberto from "./eventos/EventosEmAberto";
import Login from "./login/Login";
import { ThemeProvider } from "@mui/material";
import { theme } from "./layout/Theme";
import CadastroDeAtleta from "./cadastro de atelta/CadastroDeAtleta";
import CadastroDeCao from "./cadastro de cachorro/CadastroDeCao";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CadastroDeCao />
      </ThemeProvider>
    </>
  );
}

export default App;
