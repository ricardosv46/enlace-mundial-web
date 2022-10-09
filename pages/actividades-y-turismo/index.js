import React, { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import CardBusqueda from "@/components/cards/card-busqueda";
import Select from "react-select";
import { useScreenContext } from "../../context/screen";
import {
  BreadCrumb,
  SecctionRadioIncluye,
  SecctionRadioActividades,
  SecctionRadioCategorias,
  SelectDestino,
} from "../../components/actividades/home";

import GestionBusqueda from "../../gestion-de-endpoints/GestionBusqueda";
import { useRouter } from "next/router";

const initialState = {
  fecha_ini: "",
  fecha_fina: "",
  incluye: "",
  actividades: "",
  categoria: "",
  DeparCodi: "",
};

const isEmpty = (text = "") => {
  return text.trim().length === 0;
};

export default function ActividadesYTurismo() {
  const { DispatchScreen } = useScreenContext();
  const [firstQuery, setFirstQuery] = useState({ isValid: false, query: {} });
  const [state, setState] = useState(initialState);

  const handleChange = (name, valor) => {
    setState((preState) => {
      return { ...preState, [name]: valor };
    });
  };
  const router = useRouter();
  const query = router.query;

  const { dataBusqueda, getBusquedaAvanzada, loadingBusqueda } =
    GestionBusqueda();

  useEffect(() => {
    const payload = {
      fecha_ini: query.fechaActual ? query.fechaActual : "",
      fecha_fina: query.fechaFinal ? query.fechaFinal : "",
      incluye: query.incluye ? query.incluye : "",
      DeparCodi: query.DeparCodi ? query.DeparCodi : "",
      actividades: query.actividades ? query.actividades : "",
      categoria: query.categoria_slug ? query.categoria_slug : "",
    };

    if (!isEmpty(query.categoria_slug) || !isEmpty(query.DeparCodi)) {
      setState(payload);

      setFirstQuery({ isValid: true, query: payload });
    } else {
      getBusquedaAvanzada({
        fecha_ini: "",
        fecha_fina: "",
        incluye: "",
        actividades: "",
        categoria_slug: "",
        precio_base: "",
        horas: "",
        dias: "",
        DeparCodi: "",
        page: 1,
        numberPaginate: 12,
      });
    }
  }, [
    Object.keys(query).length !== 0 &&
    query?.categoria_slug?.trim().length !== 0,
    Object.keys(query).length !== 0 && query?.DeparCodi?.trim().length !== 0,
  ]);

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
    };
    if (firstQuery.isValid) {
      getBusquedaAvanzada(payload);
    }
  }, [firstQuery.isValid]);

  const isDisable =
    isEmpty(state.fecha_ini) &&
    isEmpty(state.fecha_fina) &&
    isEmpty(state.incluye) &&
    isEmpty(state.actividades) &&
    isEmpty(state.categoria) &&
    isEmpty(state.DeparCodi);

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
    });

    router.replace({
      query: {
        fechaActual: state.fecha_ini,
        fechaFinal: state.fecha_fina,
        incluye: state.incluye,
        actividades: state.actividades,
        categoria_slug: state.categoria,
        DeparCodi: state.DeparCodi,
      },
    });
  };

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
  };

  const quitar = () => {
    setState((prevState) => ({
      ...initialState,
      fecha_ini: prevState.fecha_ini,
      fecha_fina: prevState.fecha_fina,
    }));
    router.replace({
      query: {},
    });
    getBusquedaAvanzada({
      fecha_ini: "",
      fecha_fina: "",
      incluye: "",
      actividades: "",
      categoria_slug: "",
      precio_base: "",
      horas: "",
      dias: "",
      DeparCodi: "",
      page: 1,
      numberPaginate: 12,
    });
    setSelect({ value: "Lugar", label: "Lugar" });
  };

  useEffect(() => {
    DispatchScreen({
      type: "ChangeSubTittle",
      payload: "Actividades y turismo",
    });
  }, []);

  return (
    <div className="busqueda-page">
      <main>
        {/* Breadcrumb */}
        <BreadCrumb
          NombreDepartamento={query?.nombreDepartamento}
          breadcrumb={["Crucero", "Inicio"]}
        />
        <section className="container mt-4 mt-md-5 px-4 px-md-0">
          <div className="row">
            <div className="col-md-3">
              <aside>
                <button
                  type="button"
                  className="btn btn-primary btn-block font-weight-bold"
                  disabled={isDisable}
                  onClick={buscar}
                >
                  Buscar
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-block font-weight-bold"
                  onClick={quitar}
                >
                  Quitar filtros
                </button>

                <div className="card bg-light border-0 rounded-0 mt-4">
                  <div className="card-body pb-1">
                    <h3 className="card-title stext-secondary font-weight-bold">
                      Disponibilidad de salidas
                    </h3>

                    <div className="form-group">
                      <label htmlFor="fechaInicial" className="text-secondary">
                        Desde
                      </label>
                      <input
                        type="date"
                        className="form-control rounded-0"
                        value={state.fecha_ini}
                        name="fecha_ini"
                        onChange={(e) => {
                          handleChange("fecha_ini", e.target.value);
                          updateRouter("fechaActual", e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="fechaInicial" className="text-secondary">
                        Hasta
                      </label>
                      <input
                        type="date"
                        className="form-control rounded-0"
                        value={state.fecha_fina}
                        name="fecha_fina"
                        onChange={(e) => {
                          handleChange("fecha_fina", e.target.value);
                          updateRouter("fechaFinal", e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <SelectDestino DeparCodi={state.DeparCodi} />
                {/* <div className='mt-4'>
                  {loadingGetData ? (
                    <p>Cargando ...</p>
                  ) : (
                    <Select
                      options={lugares}
                      placeholder='Lugar'
                      value={select.value.length === 0 ? lugarSelect : select}
                      onChange={(e) => {
                        handleChange("DeparCodi", e.value)
                        updateRouter("DeparCodi", e.value)
                      }}
                    />
                  )}
                </div>  */}

                {/* Solo desktop */}
                <section className="d-md-block ">
                  <div className="mt-3">
                    {/* Categorias */}
                    <SecctionRadioCategorias
                      categoria={state.categoria}
                      handleChange={handleChange}
                    />
                    {/* Incluye */}
                    <SecctionRadioIncluye
                      incluye={state.incluye}
                      handleChange={handleChange}
                    />
                    {/* Actividades */}
                    <SecctionRadioActividades
                      actividades={state.actividades}
                      handleChange={handleChange}
                    />
                  </div>
                </section>
              </aside>
            </div>

            <div className="col-md-9 mt-4 mt-md-0">
              {dataBusqueda.length === 0 ? (
                <div className="d-flex justify-content-center">
                  <p className="text-md">No hay Resultados</p>
                </div>
              ) : (
                dataBusqueda.map((item) => {
                  return <CardBusqueda item={item} key={item.tourId} />;
                })
              )}
            </div>
          </div>
        </section>
      </main>

      <Script
        src="https://kit.fontawesome.com/3bd84f9f96.js"
        crossorigin="anonymous"
      />
    </div>
  );
}
