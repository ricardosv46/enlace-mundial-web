import { useLazyQuery, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { GET_BUSQUEDA_AVANZADA_TOUR } from "../graphql/queries/GetBusquedaAvanzadaTour"

const GestionBusqueda = ({
  fecha_ini,
  fecha_fina,
  incluye,
  actividades,
  categoria_slug,
  precio_base,
  horas,
  dias,
  page,
  numberPaginate,
}) => {
  const [getBusquedaAvanzada, { data, loading }] = useLazyQuery(
    GET_BUSQUEDA_AVANZADA_TOUR,
    {
      fetchPolicy: "network-only",
      variables: {
        fecha_ini: fecha_ini,
        fecha_fina: fecha_fina,
        incluye: incluye,
        actividades: actividades,
        categoria_slug: categoria_slug,
        precio_base: precio_base,
        horas: horas,
        dias: dias,
        page: page,
        numberPaginate: numberPaginate,
      },
      onError: (error) => {
        console.error(
          "Error al obtener la data de la busqueda: ",
          error?.graphQLErrors[0]?.debugMessage
        )
      },
    }
  )

  useEffect(() => {
    getBusquedaAvanzada()
  }, [])

  const dataBusqueda = data ? data?.GetBusquedaAvanzadaTour?.data : []
  return { dataBusqueda, loading, getBusquedaAvanzada }
}

export default GestionBusqueda
