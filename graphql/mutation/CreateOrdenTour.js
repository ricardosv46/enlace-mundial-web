import { gql } from "@apollo/client"
export const CREATE_ORDEN_TOUR = gql`
  mutation CreateOrdenTour($input: OrdenTourInput, $input1: MercadoPagoInput) {
    CreateOrdenTour(input: $input, input1: $input1) {
      ordenTourId
      tipoPago
      nroOperacion
      estadoOrdenTour
      descuento
      total
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
`
