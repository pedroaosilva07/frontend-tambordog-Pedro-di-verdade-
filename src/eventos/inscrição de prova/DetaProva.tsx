import { Box, Grid, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

interface propsDetaProva {

    titulo: string
    organizacao: string
    rua: string
    numero: string
    bairro: string
    cidade: string
    uf: string
    tel: string
    cep: string

}


export default function DetaProva({ 
    titulo,
    organizacao,
    rua,
    numero,
    bairro,
    cidade,
    uf,
    tel,
    cep,}: propsDetaProva) {

    return (
        <Grid container justifyContent='center'>
            <Paper>
                <Box justifyContent='center' sx={{ width: '100%', maxWidth: 500 }}>
                    <Grid item xs={12} textAlign='center'>
                        <Typography variant="h6" gutterBottom>
                            {titulo}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} textAlign='center'>
                        <Typography variant="h6" gutterBottom>
                            {organizacao}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} textAlign='center'>
                        <Typography variant="h6" sx={{ color: grey }} gutterBottom>
                            {rua}, {numero} - {bairro}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} textAlign='center'>
                        <Typography variant="h6" sx={{ color: grey }} gutterBottom>
                            {cidade}/{uf} CEP:{cep}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} textAlign='center'>
                        <Typography variant="h6" sx={{ color: grey }} gutterBottom>
                            TEL:{tel}
                        </Typography>
                    </Grid>
                </Box>
            </Paper>
            
        </Grid>
    )
}