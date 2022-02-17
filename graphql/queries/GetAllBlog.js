import { gql } from "@apollo/client"

export const GET_ALL_BLOG = gql`
  query GetAllBlog($page: Int, $numberPaginate: Int, $estadoBlog: String) {
    GetAllBlog(
      page: $page
      numberPaginate: $numberPaginate
      estadoBlog: $estadoBlog
    ) {
      nroTotalItems
      data {
        blogId
        tituloBlog
        estadoBlog
        destacadoBlog
        keywordsBlog
        slugBlog
        descripcionCortaBlog
        descripcionLargaBlog
        imagenPrincipalBlog {
          id
          descripcion
          url
        }
        imagenSecundariaBlog {
          id
          descripcion
          url
        }
        galeriaBlog {
          id
          descripcion
          url
        }
        slugCategoriaBlog
        categoriaBlogId
        CategoriaBlog {
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
    }
  }
`
