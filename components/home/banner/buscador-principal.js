import React from "react";

import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function BuscadorPrincipal() {
  return (
    <form className="buscador-p">
      <div className="h-100">
        <input
          type="search"
          placeholder="¿Qué estás buscando?"
          className="buscador-p__field w-100 h-100 px-4"
        />
      </div>

      <div>
        <Select options={options} placeholder="Lugar" />
      </div>

      <div>
        <Select options={options} placeholder="Categorías" />
      </div>

      <div className="buscador-p__button-c d-flex justify-content-center align-items-center">
        <button type="submit" className="btn btn-primary">
          <i className="fas fa-search"></i>
          <span>Vamos</span>
        </button>
      </div>
    </form>
  );
}
