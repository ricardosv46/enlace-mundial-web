import { gql } from '@apollo/client'
export const GET_ALL_TOURS = gql`
query GetAllTour($estadoTour:String,$page:Int,$numberPaginate:Int){
  GetAllTour(estadoTour:$estadoTour,page:$page,numberPaginate:$numberPaginate){
    nroTotalItems
    data{
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
}
`;
