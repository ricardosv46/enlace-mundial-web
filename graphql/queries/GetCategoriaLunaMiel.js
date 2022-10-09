import { gql } from '@apollo/client'
export const GET_CATEGORIA_LUNAMIEL = gql`
query GetCategoriaLunaMiel($page: Int, $numberPaginate: Int, $slugCategoria: String, $estadoLuna: String) {
  GetCategoriaLunaMiel(page: $page, numberPaginate: $numberPaginate, slugCategoria: $slugCategoria, estadoLuna: $estadoLuna) {
    nroTotalItems
    data {
      lunaMielId
      tituloLuna
      slugLuna
      estadoLuna
      precioBaseLuna
      destacadoLuna
      keywordsLuna
      regionLuna
      ciudadLuna
      descripcionCortaLuna
      descripcionLargaLuna
      itinerarioLuna
      puntoPartidaLuna
      incluyeLuna
      noIncluyeLuna
      actividadesLuna
      notasLuna
      politicasLuna
      videoPresentacionLuna
      imagenPrincipalLuna {
        id
        descripcion
        url
      }
      imagenSecundariaLuna {
        id
        descripcion
        url
      }
      galeriaLuna {
        id
        descripcion
        url
      }
      slugCategoria
      categoriaId
      Categoria {
        categoriaId
        slugCategoria
        tituloCategoria
        descripcion
        estadoCategoria
        keywordsCategoria
        imagenPrincipalCategoria {
          id
          descripcion
          url
        }
        imagenSecundariaCategoria {
          id
          descripcion
          url
        }
        created_at
        updated_at
      }
      created_at
      updated_at
    }
  }
}
`