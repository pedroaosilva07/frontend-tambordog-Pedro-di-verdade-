import React from "react";
import CardEvento from "./CardEvento";
import { Chip, Grid, Stack } from '@mui/material';
import BottomNavComplet from "../components/BottonNavComplet";

export default function EventosEmAberto() {

  const handleClick = (oque: string) => {
    console.info('Ordenar os Eventos por ', oque);
  };

  return (
    <>
      <Grid container >
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} sx={{ marginLeft: 15 }}>
            <Chip
              label="Favoritos"
              onClick={() => handleClick('Favoritos')}
            />
            <Chip
              label="Circuitos"
              onClick={() => handleClick('Circuitos')}
            />
            <Chip
              label="Open"
              onClick={() => handleClick('Open')}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardEvento
            titulo={"Circuito Etapa RJ"}
            imagem={"logo512.png"}
            cidade={"Volta Redonda"}
            uf={'RJ'}
            data={'02/10/2023'}
            qtdInscritos={4}
          />
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} md={6}>
          <CardEvento
            titulo={"Open Cia do Cão"}
            imagem={"logo512.png"}
            cidade={"Divinópolis"}
            uf={'MG'}
            data={'13/10/2023'}
            qtdInscritos={4}
          />
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} md={6}>
          <CardEvento
            titulo={"Circuito Etapa MG"}
            imagem={"logo512.png"}
            cidade={"Divinópolis"}
            uf={'MG'}
            data={'05/11/2023'}
            qtdInscritos={4}
          />
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} md={6}>
          <CardEvento
            titulo={"Circuito Etapa MG"}
            imagem={"logo512.png"}
            cidade={"Divinópolis"}
            uf={'MG'}
            data={'05/11/2023'}
            qtdInscritos={4}
          />
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12}>
          <BottomNavComplet/>
        </Grid>
      </Grid>

    </>
  );
}
