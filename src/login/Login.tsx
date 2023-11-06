import React, { useState } from "react";

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  Link,
  Paper,
  TextField,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Condicional from "../components/Condicional";
import InputCPF from "../components/InputCPF";
import BotaoComLoading from "../components/BotaoComLoading";

export default function Login() {
  const theme = useTheme();

  const [exibirSenha, setExibirSenha] = useState("password");

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
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <img src="./logo192.png" style={{ maxWidth: "100px" }} />
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
                <InputCPF />
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
                <TextField
                  label="Senha"
                  type={exibirSenha}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">

                        <Condicional condicao={exibirSenha === "text"}>
                          <VisibilityIcon sx={{ color: theme.corBotao }}
                            onClick={() => setExibirSenha("password")}
                          />
                        </Condicional>

                        <Condicional condicao={exibirSenha === "password"}>
                          <VisibilityOffIcon sx={{ color: theme.corBotao }}
                            onClick={() => setExibirSenha("text")}
                          />
                        </Condicional>

                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={6} sx={{ mt: 3 }}>
                <FormControlLabel
                  control={<Checkbox defaultChecked sx={{ color: theme.corBotao }} />}
                  label="Lembrar-me"
                />
              </Grid>

              <Grid item xs={6} sx={{ textAlign: "right", mt: 4.5 }}>
                <Link sx={{ color: theme.corBotao }}>Esqueci a Senha</Link>
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
                <BotaoComLoading label="Cadastrar"  />
              </Grid>

              <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                <Link sx={{ color: theme.corBotao }}>Registrar-se</Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
