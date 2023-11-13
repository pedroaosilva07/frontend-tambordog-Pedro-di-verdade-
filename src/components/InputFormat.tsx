import React from "react"
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material"

import { IMaskInput } from "react-imask"

interface PropsInputInterface {
  label: string
  mask: string
  campo: string
  setDados: React.Dispatch<React.SetStateAction<any>>
  dados: any
}

const MASK_DEFINITIONS = {
  "0": /[0-9]/,
  "#": /[1-9]/,
  "?": /[1-9 ]/,
  X: /[A-Z]/,
  x: /[a-z]/,
  a: /[A-Za-z]/,
  "*": /[A-Za-z0-9 ]/,
  l: /[A-Za-z0-9#@$%&*(){}!]/,
}

/**
 * Formata o Texto de Acordo com a Máscara Fornecida
 * @param label - Label do Texto - O que é exibido para o usuário
 * @param mask - Máscara a ser aplicada
 * @param setDados - setState do Conjunto de Dados
 * @param dados - Dados Atuais a serem atualizados pelo setState
 * @param campo - Nome do campo a ser atualizado no setState
 * @returns void
 */
export default function InputFormat({
  label,
  mask,
  setDados,
  dados,
  campo,
}: PropsInputInterface) {

  return (
    <>
      <FormControl sx={{ width: "100%", mt: 5 }}>
        <InputLabel
          htmlFor="id-input"
          sx={{ backgroundColor: "white", paddingX: 1 }}
        >
          {label}
        </InputLabel>
        <OutlinedInput
          id="id-input"
          onChange={(evento) =>
            setDados({ ...dados, [campo]: evento.target.value })
          }
          value={dados[campo]}
          inputComponent={(props) => (
            <IMaskInput
              {...props}
              overwrite
              mask={mask}
              definitions={MASK_DEFINITIONS}
            />
          )}
        />
        <FormHelperText>Texto de Ajuda do Form</FormHelperText>
      </FormControl>
    </>
  )
}
