import React from "react";
import { useRouter } from "next/router";

import Select from "react-select";

export default function BuscadorPrincipal() {
  const router = useRouter();

  const lugares = [
    { value: "Lima", label: "Lima" },
    { value: "Arequipa", label: "Arequipa" },
    { value: "Puno", label: "Puno" },
  ];

  const categorias = [
    { value: "Tours", label: "Tours" },
    { value: "Cruceros", label: "Cruceros" },
    { value: "Luna de miel", label: "Luna de miel" },
  ];

  const buscar = (e) => {
    e.preventDefault();

    router.push("/actividades-y-turismo");
  };

  return (
    <form className="buscador-p">
      <div className="h-100">
        <input
          type="search"
          placeholder="¿Qué estás buscando?"
          list="list"
          className="buscador-p__field w-100 h-100 px-4"
        />

        {/* <datalist id="list">
          {categorias.map((item) => {
            return <option value={item.value}>{item.label}</option>;
          })}
        </datalist> */}
      </div>

      <div>
        <Select options={lugares} placeholder="Lugar" />
      </div>

      <div>
        <Select options={categorias} placeholder="Categorías" />
      </div>

      <div className="buscador-p__button-c d-flex justify-content-center align-items-center">
        <button type="submit" className="btn btn-primary" onClick={buscar}>
          <i className="fas fa-search"></i>
          <span>Vamos</span>
        </button>
      </div>
    </form>
  );
}
