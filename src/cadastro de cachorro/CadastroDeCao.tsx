import { Button, FormControlLabel, Grid, Link, Paper, TextField, Avatar, Checkbox, FormControl, InputLabel, NativeSelect, Select, MenuItem, SelectChangeEvent, FormLabel, RadioGroup, Radio, } from '@mui/material';
import react from 'react';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import React from 'react';
import styled from '@emotion/styled';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


export default function CadastroDeCao() {

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });



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
                                    <Avatar sx={{ bgcolor: deepOrange[500], width: 56, height: 56, textAlign: 'center' }}>T</Avatar>
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <TextField label='Nome' fullWidth />
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 6 }}>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Categoria</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="(P) MINI < 35 cm" control={<Radio />} label="(P) MINI < 35 cm" />
                                        <FormControlLabel value="(M) MIDI 35 a < 43 cm" control={<Radio />} label="(M) MIDI 35 a < 43 cm" />
                                        <FormControlLabel value="(G) STANDART > 43 cm" control={<Radio />} label="(G) STANDART > 43 cm" />
                                        <FormControlLabel value="(BC) Border Colile" control={<Radio />} label="(BC) Border Colile" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 6 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="Pedigree">Pedigree</InputLabel>
                                    <Select
                                        labelId="Pedigree"
                                        id="StatusDoAtleta"
                                        value={age}
                                        label="Pedigree"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Escola</MenuItem>
                                        <MenuItem value={20}>Individual</MenuItem>
                                        <MenuItem value={30}>Sem escola</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="Raça">Raça</InputLabel>
                                    <Select
                                        labelId="Raça"
                                        id="StatusDoAtleta"
                                        value={age}
                                        label="Raça"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Escola</MenuItem>
                                        <MenuItem value={20}>Individual</MenuItem>
                                        <MenuItem value={30}>Sem escola</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={7} sx={{ mt: 3 }}>
                                <TextField label='Data de Nascimento' fullWidth type='date' />
                            </Grid>

                            <Grid item xs={1} sx={{ mt: 3 }}>
                            </Grid>

                            <Grid item xs={4} sx={{ mt: 3 }}>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Género</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                    >
                                        <FormControlLabel value="Femea" control={<Radio />} label="Femea" />
                                        <FormControlLabel value="Macho" control={<Radio />} label="Macho" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={7} sx={{ mt: 1 }}>
                                <Button component="label" variant="contained" endIcon={<CloudUploadIcon />}>
                                    Vacinação
                                    <VisuallyHiddenInput type="file" />
                                </Button>
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