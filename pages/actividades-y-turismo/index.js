import React, { useEffect, useState } from "react"
import Head from "next/head"
import Script from "next/script"
import CardBusqueda from "@/components/cards/card-busqueda"
import Select from "react-select"

import { useActividadesServices } from "../../gestion-de-endpoints/useActividadesServices"
import { useIncluyeServices } from "../../gestion-de-endpoints/useIncluyeServices"
import GestionBusqueda from "../../gestion-de-endpoints/GestionBusqueda"
import CategoriasServices from "../../gestion-de-endpoints/useCategoriasServices"
import { useRouter } from "next/router"
import { useDepartamentosServices } from "../../gestion-de-endpoints/useDepartamentosServices"

const initialState = {
  fecha_ini: "",
  fecha_fina: "",
  incluye: "",
  actividades: "",
  categoria: "",
  DeparCodi: "",
}

const isEmpty = (text = "") => {
  return text.trim().length === 0
}

export default function ActividadesYTurismo() {
  const { dataDepartamentos, loadingGetData } = useDepartamentosServices()

  const [firstQuery, setFirstQuery] = useState({ isValid: false, query: {} })

  const [state, setState] = useState(initialState)

  const handleChange = (name, valor) => {
    setState((preState) => {
      return { ...preState, [name]: valor }
    })
  }
  const router = useRouter()
  const query = router.query
  const { dataCategoria, loadingCategoria } = CategoriasServices()

  const { db: dataActividades, loadingGetData: loadingActiviades } =
    useActividadesServices()

  const { db: dataIncluye, loadingGetData: loadingIncluye } =
    useIncluyeServices()

  const { dataBusqueda, getBusquedaAvanzada, loadingBusqueda } =
    GestionBusqueda()

  const lugares =
    !loadingGetData &&
    dataDepartamentos.map((data) => ({
      value: data.DeparCodi,
      label: data.DeparNom,
    }))

  const lugar =
    !loadingGetData &&
    dataDepartamentos.filter((data) => data.DeparCodi === state.DeparCodi)

  const lugarSelect = {
    value: lugar[0]?.DeparCodi,
    label: lugar[0]?.DeparNom ? lugar[0]?.DeparNom : "Lugar",
  }

  useEffect(() => {
    const payload = {
      fecha_ini: query.fechaActual ? query.fechaActual : "",
      fecha_fina: query.fechaFinal ? query.fechaFinal : "",
      incluye: query.incluye ? query.incluye : "",
      DeparCodi: query.DeparCodi ? query.DeparCodi : "",
      actividades: query.actividades ? query.actividades : "",
      categoria: query.categoria_slug ? query.categoria_slug : "",
    }
    if (!isEmpty(query.categoria_slug) || !isEmpty(query.DeparCodi)) {
      setState(payload)

      setFirstQuery({ isValid: true, query: payload })
    }
  }, [
    Object.keys(query).length !== 0 &&
      query?.categoria_slug?.trim().length !== 0,
    Object.keys(query).length !== 0 && query?.DeparCodi?.trim().length !== 0,
  ])

  useEffect(() => {
    const payload = {
      fecha_ini: firstQuery.query.fecha_ini,
      fecha_fina: firstQuery.query.fecha_fina,
      incluye: firstQuery.query.incluye ? firstQuery.query.incluye : "",
      actividades: firstQuery.query.actividades
        ? firstQuery.query.actividades
        : "",
      categoria_slug: firstQuery.query.categoria
        ? firstQuery.query.categoria
        : "",
      DeparCodi: firstQuery.query.DeparCodi ? firstQuery.query.DeparCodi : "",
      precio_base: "",
      horas: "",
      dias: "",
      page: 1,
      numberPaginate: 12,
    }
    if (firstQuery.isValid) {
      getBusquedaAvanzada(payload)
    }
  }, [firstQuery.isValid])

  const isDisable =
    isEmpty(state.fecha_ini) &&
    isEmpty(state.fecha_fina) &&
    isEmpty(state.incluye) &&
    isEmpty(state.actividades) &&
    isEmpty(state.categoria) &&
    isEmpty(state.DeparCodi)

  const buscar = () => {
    getBusquedaAvanzada({
      fecha_ini: state.fecha_ini,
      fecha_fina: state.fecha_fina,
      incluye: state.incluye,
      actividades: state.actividades,
      categoria_slug: state.categoria,
      precio_base: "",
      horas: "",
      dias: "",
      DeparCodi: state.DeparCodi,
      page: 1,
      numberPaginate: 12,
    })

    router.replace({
      query: {
        fechaActual: state.fecha_ini,
        fechaFinal: state.fecha_fina,
        incluye: state.incluye,
        actividades: state.actividades,
        categoria_slug: state.categoria,
        DeparCodi: state.DeparCodi,
      },
    })
  }

  const updateRouter = (name, valor) => {
    // if (valor.length === 0) {
    //   const { [name]: toDelete, ...res } = query
    //   router.replace({
    //     query: {
    //       ...res,
    //     },
    //   })
    // } else {
    //   router.replace({
    //     query: {
    //       ...query,
    //       [name]: valor,
    //     },
    //   })
    // }
  }

  const quitar = () => {
    setState((prevState) => ({
      ...initialState,
      fecha_ini: prevState.fecha_ini,
      fecha_fina: prevState.fecha_fina,
    }))
    router.replace({
      query: {},
    })
  }

  return (
    <div className='busqueda-page'>
      <Head>
        <title>Actividades y turismo - Enlace mundial</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css'
        />
      </Head>

      <main>
        <section className='container mt-5 px-4 px-md-0'>
          <div className='row'>
            <div className='col-12'>
              <div className='d-flex justify-content-between align-items-center'>
                <h3 className='subtitulo-slug text-secondary text-left'>
                  {query.nombreDepartamento
                    ? `Tours a región ${query.nombreDepartamento}`
                    : "Tours a regiones del Perú"}
                </h3>

                {/* Solo desktop */}
                <div className='d-none d-md-block'>
                  <span className='d-inline-block mr-3'>Crucero</span>
                  <span>Inicio</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='container mt-4 mt-md-5 px-4 px-md-0'>
          <div className='row'>
            <div className='col-md-3'>
              <aside>
                <button
                  type='button'
                  className='btn btn-primary btn-block font-weight-bold'
                  disabled={isDisable}
                  onClick={buscar}
                >
                  Buscar
                </button>
                <button
                  type='button'
                  className='btn btn-primary btn-block font-weight-bold'
                  onClick={quitar}
                >
                  Quitar filtros
                </button>

                <div className='card bg-light border-0 rounded-0 mt-4'>
                  <div className='card-body pb-1'>
                    <h3 className='card-title stext-secondary font-weight-bold'>
                      Disponibilidad de salidas
                    </h3>

                    <div className='form-group'>
                      <label htmlFor='fechaInicial' className='text-secondary'>
                        Desde
                      </label>
                      <input
                        type='date'
                        className='form-control rounded-0'
                        value={state.fecha_ini}
                        name='fecha_ini'
                        onChange={(e) => {
                          handleChange("fecha_ini", e.target.value)
                          updateRouter("fechaActual", e.target.value)
                        }}
                      />
                    </div>

                    <div className='form-group'>
                      <label htmlFor='fechaInicial' className='text-secondary'>
                        Hasta
                      </label>
                      <input
                        type='date'
                        className='form-control rounded-0'
                        value={state.fecha_fina}
                        name='fecha_fina'
                        onChange={(e) => {
                          handleChange("fecha_fina", e.target.value)
                          updateRouter("fechaFinal", e.target.value)
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className='mt-4'>
                  {loadingGetData ? (
                    <p>Cargando ...</p>
                  ) : (
                    <Select
                      options={lugares}
                      placeholder='Lugar'
                      defaultValue={lugarSelect}
                      onChange={(e) => {
                        handleChange("DeparCodi", e.value)
                        updateRouter("DeparCodi", e.value)
                      }}
                    />
                  )}
                </div>

                <div className='mt-4'>
                  <h3 className='card-title stext-secondary font-weight-bold mt-3'>
                    Categorias
                  </h3>
                  {loadingCategoria ? (
                    <p>Cargando ...</p>
                  ) : (
                    dataCategoria.map((item) => {
                      return (
                        <div className='form-check' key={item?.categoriaId}>
                          <input
                            id={item?.categoriaId}
                            className='form-check-input'
                            type='radio'
                            name='categorias'
                            value={item?.slugCategoria}
                            checked={state.categoria === item?.slugCategoria}
                            onChange={(e) => {
                              handleChange("categoria", e.target.value)
                              updateRouter("categoria", e.target.value)
                            }}
                          />
                          <label
                            className='form-check-label'
                            htmlFor={item?.categoriaId}
                          >
                            {item?.tituloCategoria}
                          </label>
                        </div>
                      )
                    })
                  )}
                </div>

                {/* Solo desktop */}
                <section className='  d-md-block'>
                  {/* <h4 className='card-subtitle font-weight-bold'>
                    Tours de último minuto
                  </h4>

                  <div className='mt-3'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='disponibles'
                        id='disponible-1'
                        value='option1'
                      />
                      <label
                        className='form-check-label text-muted'
                        htmlFor='disponible-1'
                      >
                        Disponibles hoy o mañana
                      </label>
                    </div>

                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='radio'
                        name='disponibles'
                        id='disponible-2'
                        value='option1'
                      />
                      <label
                        className='form-check-label text-muted'
                        htmlFor='disponible-2'
                      >
                        Disponibles hoy o mañana o pasado
                      </label>
                    </div>
                  </div> */}

                  <div className='mt-3'>
                    {/* <h3 className='card-title stext-secondary font-weight-bold'>
                      Destinos en Perú
                    </h3>

                    <h3 className='card-title stext-secondary font-weight-bold'>
                      Perú
                    </h3>

                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value=''
                        id='destino-padre'
                      />
                      <label
                        className='form-check-label'
                        htmlFor='destino-padre'
                      >
                        Cusco
                      </label>
                    </div>

                    <div className='mt-1 px-3'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id='destino-hijo'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='destino-hijo'
                        >
                          Tours a Cusco
                        </label>
                      </div>
                    </div> */}
                    {/* Incluye */}
                    <h3 className='card-title stext-secondary font-weight-bold mt-3'>
                      Incluye
                    </h3>
                    {loadingIncluye ? (
                      <p>Cargando ...</p>
                    ) : (
                      dataIncluye.map((item) => {
                        return (
                          <div className='form-check' key={item?.incluyeId}>
                            <input
                              id={item?.incluyeId}
                              className='form-check-input'
                              type='radio'
                              name='incluye'
                              value={item?.descripcionIncluye}
                              checked={
                                state.incluye === item?.descripcionIncluye
                              }
                              onChange={(e) => {
                                handleChange("incluye", e.target.value)
                                updateRouter("incluye", e.target.value)
                              }}
                            />
                            <label
                              className='form-check-label'
                              htmlFor={item?.incluyeId}
                            >
                              {item?.descripcionIncluye}
                            </label>
                          </div>
                        )
                      })
                    )}
                    {/* Actividades */}
                    <h3 className='card-title stext-secondary font-weight-bold mt-3'>
                      Actividades
                    </h3>
                    {loadingActiviades ? (
                      <p>Cargando ...</p>
                    ) : (
                      dataActividades.map((item) => {
                        return (
                          <div className='form-check' key={item?.actividadId}>
                            <input
                              id={item?.actividadId}
                              className='form-check-input'
                              type='radio'
                              name='actividades'
                              value={item?.descripcion_actividad}
                              checked={
                                state.actividades ===
                                item?.descripcion_actividad
                              }
                              onChange={(e) => {
                                handleChange("actividades", e.target.value)
                                updateRouter("actividades", e.target.value)
                              }}
                            />
                            <label
                              className='form-check-label'
                              htmlFor={item?.actividadId}
                            >
                              {item?.descripcion_actividad}
                            </label>
                          </div>
                        )
                      })
                    )}
                  </div>
                </section>
              </aside>
            </div>

            <div className='col-md-9 mt-4 mt-md-0'>
              {dataBusqueda.length === 0 ? (
                <div className='d-flex justify-content-center'>
                  <p className='text-md'>No hay Resultados</p>
                </div>
              ) : (
                dataBusqueda.map((item) => {
                  return <CardBusqueda item={item} key={item.tourId} />
                })
              )}
            </div>
          </div>
        </section>
        <div className='hidden'></div>
      </main>

      <Script
        src='https://kit.fontawesome.com/3bd84f9f96.js'
        crossorigin='anonymous'
      />
    </div>
  )
}
