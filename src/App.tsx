import React from "react";
import EventosEmAberto from "./eventos/EventosEmAberto";
import Login from "./login/Login";
import { ThemeProvider } from "@mui/material";
import { theme } from "./layout/Theme";
import CadastroDeAtleta from "./cadastro de atelta/CadastroDeAtleta";
import CadastroDeCao from "./cadastro de cachorro/CadastroDeCao";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Prova from "./eventos/inscrição de prova/Prova";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/eventos" element={<EventosEmAberto/>} />
          </Routes>
        </BrowserRouter>
        <Login />
      </ThemeProvider>
      <Prova/>
    </>
  );
}

export default App;
