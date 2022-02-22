import { gql } from "@apollo/client"
export const GET_BUSQUEDA_AVANZADA_TOUR = gql`
  query GetBusquedaAvanzadaTour(
    $fecha_ini: String
    $fecha_fina: String
    $incluye: String
    $actividades: String
    $categoria_slug: String
    $precio_base: String
    $horas: String
    $dias: String
    $page: Int
    $numberPaginate: Int
  ) {
    GetBusquedaAvanzadaTour(
      fecha_ini: $fecha_ini
      fecha_fina: $fecha_fina
      incluye: $incluye
      actividades: $actividades
      categoria_slug: $categoria_slug
      precio_base: $precio_base
      horas: $horas
      dias: $dias
      page: $page
      numberPaginate: $numberPaginate
    ) {
      nroTotalItems
      data {
        tourId
        tituloTour
        slugTour
        regionTour
        ciudadTour
        estadoTour
        destacadoTour
        keywordsTour
        descripcionCortaTour
        descripcionLargaTour
        precioBaseTour
        itinerarioTour
        puntoPartidaTour
        noIncluyeTour
        nroDias
        nroHoras
        notasTour
        politicasTour
        videoPresentacionTour
        imagenPrincipalTour {
          id
          descripcion
          url
        }
        imagenSecundariaTour {
          id
          descripcion
          url
        }
        galeriaTour {
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
        }
        Departamento {
          DeparCodi
          DeparNom
          UbiDepCodi
          DestacadoDepartamento
          imagenPrincipal {
            id
            descripcion
            url
          }
          imagenSecundaria {
            id
            descripcion
            url
          }
          created_at
          updated_at
        }
        Provincia {
          ProvCodi
          ProvNom
          DeparCodi
        }
      }
    }
  }
`
