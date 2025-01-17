import React, { useState } from "react"
import { useRouter } from "next/router"

import Select from "react-select"
import { useDepartamentosServices } from "../../../gestion-de-endpoints/useDepartamentosServices"
import CategoriasServices from "../../../gestion-de-endpoints/useCategoriasServices"

export default function BuscadorPrincipal() {
  const { dataCategoria, loadingCategoria } = CategoriasServices()
  const { dataDepartamentos, loadingGetData } = useDepartamentosServices()
  const [categoria, setCategoria] = useState("")

  const [departamento, setDepartamento] = useState({ nombre: "", id: "" })
  const { nombre, id } = departamento
  const categorias =
    !loadingCategoria &&
    dataCategoria.map((data) => ({
      // id: data.slugCategoria,
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

  const buscar = (e) => {
    e.preventDefault()

    router.push({
      pathname: "/actividades-y-turismo",
      query: {
        DeparCodi: id,
        nombreDepartamento: nombre,
        categoria_slug: categoria,
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
        <Select
          instanceId="long-value-select"
          options={lugares}
          placeholder='Lugar'
          onChange={(e) => {
            setDepartamento({ nombre: e.label, id: e.value })
          }}
        />
      </div>

      <div>
        <Select
          instanceId="long-value-select"
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
