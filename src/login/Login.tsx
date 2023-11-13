import React, { useState } from "react"

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  Link,
  Paper,
  TextField,
} from "@mui/material"

import { useTheme } from "@mui/material/styles"

<<<<<<< HEAD
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Condicional from "../components/Condicional";
import InputCPF from "../components/InputCPF";
import BotaoComLoading from "../components/BotaoComLoading";
import { useNavigate } from "react-router-dom";

export default function Login() {


  const theme = useTheme();
=======
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import Condicional from "../components/Condicional"
import InputFormat from "../components/InputFormat"

export default function Login() {
  const theme = useTheme()
>>>>>>> b214dd36c73ee6580c9c8d0f751ba41b8ac0a26b

  const [exibirSenha, setExibirSenha] = useState("password")

  const [x, setX] = useState()

  const [dados, setDados] = useState({
    cpf: "",
    senha: "JÁ VENHA PREENCHIDA",
  })

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
<<<<<<< HEAD
                <InputCPF />
=======
                <InputFormat
                  label="CPF"
                  mask="000.000.000-00"
                  setDados={setDados}
                  dados={dados}
                  campo="cpf"
                />
>>>>>>> b214dd36c73ee6580c9c8d0f751ba41b8ac0a26b
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
                <TextField
                  onChange={(evento) =>
                    setDados({ ...dados, senha: evento.target.value })
                  }
                  value={dados.senha}
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
                <nav>
                  <BotaoComLoading label="Cadastrar" />
                </nav>
              </Grid>

              <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                <Link sx={{ color: theme.corBotao }}>Registrar-se</Link>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                Dados:
                {JSON.stringify(dados)}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
