import React from "react";

export default function Card2Columnas(props) {
  return (
    <article className="card-blog">
      <div
        className="card-blog__imagen"
        style={{ backgroundImage: `url("${props.item.imagen}")` }}
      ></div>

      <div className="text-center py-2 px-3">
        <h3 className="card-blog__titulo font-weight-bold">
          {props.item.titulo}
        </h3>

        <p className="card-blog__descripcion mt-3">{props.item.descripcion}</p>
      </div>
    </article>
  );
}
