import { useMutation, useQuery } from "@apollo/client"
import { CREATE_ORDEN_TOUR } from "../graphql/mutation/CreateOrdenTour"
import { GET_ALL_ORDEN_TOUR_USER } from "../graphql/queries/getAllOrdenTourUser"

//
export const useOrdenServices = () => {
  const {
    data,
    loading: loadingGetData,
    refetch,
  } = useQuery(GET_ALL_ORDEN_TOUR_USER, {
    fetchPolicy: "network-only",
    variables: {
      numberPaginate: 12,
      page: 1,
    },
    onError: (err) => {
      console.log(
        "onError getAllData Orden tour user",
        err?.graphQLErrors[0]?.debugMessage
      )
    },
  })
  const dataOrden = data && data?.GetAllOrdenTourUser

  const [CreateOrdenTour, { loading: loadingCreate }] = useMutation(
    CREATE_ORDEN_TOUR,
    {
      onError: (err) => {
        console.log(
          "onError Create Usuario",
          err?.graphQLErrors[0]?.debugMessage
        )
      },
    }
  )

  const createOrdenTour = async ({
    input: { tipoPago, nroOperacion, estadoOrdenTour, descuento, PasajesInput },

    input1: {
      type_save,
      source_id,
      payment_method_id,
      installments,
      tipo_tarjeta,
    },
  }) => {
    const res = await CreateOrdenTour({
      variables: {
        input: {
          tipoPago: tipoPago,
          nroOperacion: nroOperacion,
          estadoOrdenTour: estadoOrdenTour,
          descuento: descuento,
          PasajesInput: PasajesInput,
        },

        input1: {
          type_save: type_save,
          source_id: source_id,
          payment_method_id: payment_method_id,
          installments: installments,
          tipo_tarjeta: tipo_tarjeta,
        },
      },
    })
    refetch()
    console.log("CreateOrdenTour", res)
    if (res.data?.CreateOrdenTour) return "exito"
  }

  return {
    dataOrden,
    loadingGetData,
    loadingCreate,
    createOrdenTour,
  }
}
