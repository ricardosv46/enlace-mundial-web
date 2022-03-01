import { useLazyQuery, useQuery } from "@apollo/client"
import { request } from "graphql-request"
import { useEffect, useState } from "react"
import { URL } from "../endpoints y url/endpoints"
import { GET_BUSQUEDA_AVANZADA_TOUR } from "../graphql/queries/GetBusquedaAvanzadaTour"

const GestionBusqueda = () => {
  const [loading, setLoading] = useState(false)
  const [itemTours, setItemTours] = useState([])
  const getBusquedaAvanzada = async ({
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
    setLoading(true)
    const res = await request(URL, GET_BUSQUEDA_AVANZADA_TOUR, {
      fecha_ini: fecha_ini ? fecha_ini : new Date().toISOString().split("T")[0],
      fecha_fina: fecha_fina ? fecha_fina : "2022-03-26",
      incluye: incluye,
      actividades: actividades,
      categoria_slug: categoria_slug,
      precio_base: precio_base,
      horas: horas,
      dias: dias,
      page: page,
      numberPaginate: numberPaginate,
    }).catch((error) => {
      console.log("error", error)
    })
    setLoading(false)
    console.log(res)

    if (res) {
      setItemTours(res?.GetBusquedaAvanzadaTour?.data)
    } else {
      setItemTours([])
    }
  }
  console.log("databusqueda")
  // const dataBusqueda = data ? data?.GetBusquedaAvanzadaTour?.data : []
  return {
    dataBusqueda: itemTours,
    loadingBusqueda: loading,
    getBusquedaAvanzada,
  }
}

export default GestionBusqueda
