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
    const date = new Date()

    const month = date.getMonth()
    const year = date.getFullYear()
    const day = date.getDate()
    const fechaInicial = date.toISOString().split("T")[0]
    const fechaFinal = new Date(year, month + 1, day)
      .toISOString()
      .split("T")[0]

    setLoading(true)
    const res = await request(URL, GET_BUSQUEDA_AVANZADA_TOUR, {
      fecha_ini: fecha_ini ? fecha_ini : fechaInicial,
      fecha_fina: fecha_fina ? fecha_fina : fechaFinal,
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
