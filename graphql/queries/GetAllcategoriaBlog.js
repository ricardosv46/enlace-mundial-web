import { gql } from "@apollo/client"
export const GET_ALL_CATEGORIA_BLOG = gql`
  query GetAllCategoriaBlog($estadoCategoriaBlog: String) {
    GetAllCategoriaBlog(estadoCategoriaBlog: $estadoCategoriaBlog) {
      categoriaBlogId
      slugCategoriaBlog
      tituloCategoriaBlog
      estadoCategoriaBlog
      descripcionCategoriaBlog
      keywordsCategoriaBlog
      imagenPrincipalCategoriaBlog {
        id
        descripcion
        url
      }
      imagenSecundariaCategoriaBlog {
        id
        descripcion
        url
      }
    }
  }
`
