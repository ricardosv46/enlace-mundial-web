import { gql } from "@apollo/client"

export const GET_ALL_CATEGORIA = gql`
  query GetCategoria($estadoCategoria: String) {
    GetCategoria(estadoCategoria: $estadoCategoria) {
      categoriaId
      descripcion
      tituloCategoria
      slugCategoria
      created_at
      estadoCategoria
      imagenPrincipalCategoria {
        url
        id
        descripcion
      }
      imagenSecundariaCategoria {
        url
        id
        descripcion
      }
      keywordsCategoria
      updated_at
    }
  }
`
