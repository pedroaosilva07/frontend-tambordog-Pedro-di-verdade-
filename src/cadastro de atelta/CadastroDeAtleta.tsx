import { Button, FormControlLabel, Grid, Link, Paper, TextField, Avatar, Checkbox, FormControl, InputLabel, NativeSelect, Select, MenuItem, SelectChangeEvent, } from '@mui/material';
import react from 'react';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import React from 'react';


export default function CadastroDeAtleta() {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };


    return (
        <>
            <Grid
                container
                minHeight="100vh"
                justifyContent="center"
                alignContent="center"
            >
                <Grid item xs={12} sm={8} md={5} lg={4}>
                    <Paper sx={{ padding: 3, margin: 3 }}>
                        <Grid container>
                            <Grid item xs={5} sx={{ textAlign: "center" }}>
                            </Grid>
                            <Grid item xs={5} sx={{ textAlign: "center" }}>
                                <Stack direction="row" spacing={12}>
                                    <Avatar sx={{ bgcolor: deepOrange[500], width: 56, height: 56, textAlign: 'center' }}>N</Avatar>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <TextField label='CPF' fullWidth />
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <TextField label='Nome' fullWidth />
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <TextField label='Nascimento' fullWidth type='date' />
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <TextField label='Telefone' fullWidth />
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <TextField label='E-mail' fullWidth />
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="Escola / Individual / Sem escola">Escola / Individual / Sem escola</InputLabel>
                                    <Select
                                        labelId="Escola / Individual / Sem escola"
                                        id="StatusDoAtleta"
                                        value={age}
                                        label="Escola / Individual / Sem escola"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Escola</MenuItem>
                                        <MenuItem value={20}>Individual</MenuItem>
                                        <MenuItem value={30}>Sem escola</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <Button fullWidth variant="contained">
                                    Comfirmar
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>

    );
};