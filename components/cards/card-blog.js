import React from "react";

export default function CardBlog({ item }) {
  return (
    <article className="card-blog">
      <div
        className="card-blog__imagen"
        style={{ backgroundImage: `url("${item.imagen}")` }}
      ></div>

      <div className="text-center py-2 px-3">
        <h3 className="card-blog__titulo font-weight-bold">{item.titulo}</h3>

        <p className="card-blog__descripcion mt-3">{item.descripcion}</p>
      </div>
    </article>
  );
}
