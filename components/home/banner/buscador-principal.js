import React, { useState } from "react"
import { useRouter } from "next/router"

import Select from "react-select"
import { useDepartamentosServices } from "../../../gestion-de-endpoints/useDepartamentosServices"
import CategoriasServices from "../../../gestion-de-endpoints/useCategoriasServices"

export default function BuscadorPrincipal() {
  const { dataCategoria, loadingCategoria } = CategoriasServices()
  const { dataDepartamentos, loadingGetData } = useDepartamentosServices()
  const [categoria, setCategoria] = useState("")

  const categorias =
    !loadingCategoria &&
    dataCategoria.map((data) => ({
      value: data.slugCategoria,
      label: data.tituloCategoria,
    }))

  const lugares =
    !loadingGetData &&
    dataDepartamentos.map((data) => ({
      value: data.DeparCodi,
      label: data.DeparNom,
    }))

  const router = useRouter()

  let date = new Date()
  const buscar = (e) => {
    e.preventDefault()

    router.push({
      pathname: "/actividades-y-turismo",
      query: {
        categoria: categoria,
        fechaActual: date.toISOString().split("T")[0],
        fechaFinal: "2022-03-26",
      },
    })
  }

  return (
    <form className='buscador-p py-4 py-md-0 px-3 container'>
      <div className='h-100'>
        <input
          type='search'
          placeholder='¿Qué estás buscando?'
          list='list'
          className='buscador-p__field w-100 h-100 px-4'
        />

        {/* <datalist id="list">
          {categorias.map((item) => {
            return <option value={item.value}>{item.label}</option>;
          })}
        </datalist> */}
      </div>

      <div>
        <Select options={lugares} placeholder='Lugar' />
      </div>

      <div>
        <Select
          options={categorias}
          placeholder='Categorías'
          onChange={(e) => setCategoria(e.value)}
        />
      </div>

      <div className='buscador-p__button-c d-flex justify-content-center align-items-center'>
        <button type='submit' className='btn btn-primary' onClick={buscar}>
          <i className='fas fa-search'></i>
          <span>Vamos</span>
        </button>
      </div>
    </form>
  )
}
