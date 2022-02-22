import { gql } from "@apollo/client"

export const UPDATE_USUARIO = gql`
  mutation UpdateUsuario($input: UserInput!) {
    UpdateUsuario(input: $input) {
      userId
      tipoUsuario
      nombre
      apellidos
      email
      estado
      apiToken
      tipoDocumento
      numDocumento
      celular
    }
  }
`
