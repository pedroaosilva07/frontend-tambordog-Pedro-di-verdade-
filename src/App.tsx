import React from "react";
import EventosEmAberto from "./eventos/EventosEmAberto";
import Login from "./login/Login";
import { ThemeProvider } from "@mui/material";
import { theme } from "./layout/Theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <EventosEmAberto />
      </ThemeProvider>
    </>
  );
}

export default App;
