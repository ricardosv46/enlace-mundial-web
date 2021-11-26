export const URL = "https://apienlacemundial.softaki.com/public/graphql";

export const GET_SLUG_TOUR = `
query GetSlugTour($slugTour:String){
  GetSlugTour(slugTour:$slugTour) {
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
    itinerarioTour
    puntoPartidaTour
    incluyeTour
    noIncluyeTour
    actividadesTour
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
  }
}
`;
