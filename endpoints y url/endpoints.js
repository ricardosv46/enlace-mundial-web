export const URL = "https://apienlacemundial.softaki.com/public/graphql"

export const GET_SLUG_TOUR = `
query GetSlugTour($slugTour: String) {
  GetSlugTour(slugTour: $slugTour) {
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
      url
    }
    imagenSecundariaTour {
      id
      url
    }
    galeriaTour {
      id
      url
    }
    slugCategoria
    categoriaId
    IncluyeTour {
      incluyeId
      descripcionIncluye
    }
    ActividadesTour {
      actividadId
      descripcion_actividad
    }
    Departamento {
      DeparCodi
      DeparNom
    }
    Provincia {
      ProvCodi
      ProvNom
    }
  }
}
`
export const GET_ALL_CATEGORIA_BLOG = `
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
