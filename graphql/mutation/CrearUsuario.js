import { gql } from "@apollo/client"

export const CREATE_USUARIO = gql`
  mutation CrearUsuario($input: UserInput!) {
    CrearUsuario(input: $input) {
      apellidos
      apiToken
      created_at
      email
      estado
      tipoDocumento
      numDocumento
      celular
      nombre
      tipoUsuario
      updated_at
      userId
    }
  }
`
