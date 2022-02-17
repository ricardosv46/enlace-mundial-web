import { gql } from "@apollo/client";

export const GET_TOURS_SIMILARES = gql`
query GetToursRelacionadosLugar($deparCodi: String, $provCodi: String) {
  GetToursRelacionadosLugar(DeparCodi: $deparCodi, ProvCodi: $provCodi) {
    tourId
    tituloTour
    slugTour
    regionTour
    ciudadTour
    estadoTour
    precioBaseTour
    nroHoras
    nroDias
    destacadoTour
    keywordsTour
    descripcionCortaTour
    descripcionLargaTour
    itinerarioTour
    puntoPartidaTour
    noIncluyeTour
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
    updated_at
    created_at
    Provincia {
      DeparNom
      DeparCodi
      ProvNom
      ProvCodi
    }
    Departamento {
      created_at
      updated_at
      imagenSecundaria {
        url
        descripcion
        id
      }
      imagenPrincipal {
        url
        descripcion
        id
      }
      DestacadoDepartamento
      UbiDepCodi
      DeparNom
      DeparCodi
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
    }
    IncluyeTour {
      incluyeId
      descripcionIncluye
    }
    ActividadesTour {
      actividadId
      descripcion_actividad
    }
  }
}
`