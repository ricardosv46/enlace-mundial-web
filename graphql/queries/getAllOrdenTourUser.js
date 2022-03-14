import { gql } from "@apollo/client"
export const GET_ALL_ORDEN_TOUR_USER = gql`
  query GetAllOrdenTourUser($page: Int, $numberPaginate: Int) {
    GetAllOrdenTourUser(page: $page, numberPaginate: $numberPaginate) {
      nroTotalItems
      data {
        ordenTourId
        tipoPago
        nroOperacion
        estadoOrdenTour
        descuento
        fechaCompra
        fechaReserva
        User {
          userId
          tipoUsuario
          nombre
          apellidos
          email
          celular
          tipoDocumento
          numDocumento
          estado
          apiToken
          created_at
          updated_at
        }
        Pasajes {
          pasajeId
          estadoPasaje
          nombresVisitante
          apellidosVisitante
          edadVisitante
          fechaReserva
          precioTour
          tituloTour
          Tour {
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
            itinerarioTour
            puntoPartidaTour
            noIncluyeTour
            notasTour
            politicasTour
            videoPresentacionTour
            slugCategoria
            categoriaId
            created_at
            updated_at
          }
        }
      }
    }
  }
`
