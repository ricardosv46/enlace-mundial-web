import { gql } from '@apollo/client'

export const GET_CATEGORIA_CRUCERO = gql`
query GetCategoriaCrucero($page: Int, $numberPaginate: Int, $slugCategoria: String, $estadoCrucero: String) {
  GetCategoriaCrucero(page: $page, numberPaginate: $numberPaginate, slugCategoria: $slugCategoria, estadoCrucero: $estadoCrucero) {
    nroTotalItems
    data {
      cruceroId
      tituloCrucero
      slugCrucero
      estadoCrucero
      precioBaseCrucero
      destacadoCrucero
      keywordsCrucero
      regionCrucero
      ciudadCrucero
      descripcionCortaCrucero
      descripcionLargaCrucero
      itinerarioCrucero
      puntoPartidaCrucero
      incluyeCrucero
      noIncluyeCrucero
      actividadesCrucero
      notasCrucero
      politicasCrucero
      videoPresentacionCrucero
      imagenPrincipalCrucero {
        id
        descripcion
        url
      }
      imagenSecundariaCrucero {
        id
        descripcion
        url
      }
      galeriaCrucero {
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