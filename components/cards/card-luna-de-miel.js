import React from "react";
import Link from "next/link";

export default function CardLunaDeMiel({ item }) {
  return (
    <article className="card-l-miel">
      <div
        className="card-l-miel__imagen"
        style={{ backgroundImage: `url("${item.imagen}")` }}
      ></div>

      <div className="text-center pt-2 pb-4 px-4">
        <h3 className="card-l-miel__titulo font-weight-bold mt-1">
          {item.titulo}
        </h3>

        <Link href={`/luna-de-miel/${item.slug}`} passHref>
          <a className="card-l-miel__categoria">{item.categoria}</a>
        </Link>

        <p className="card-l-miel__descripcion mt-3 text-left">
          {item.descripcion}
        </p>

        <Link href={`/luna-de-miel/${item.slug}`} passHref>
          <a className="btn btn-outline-primary py-2 px-4">Informes</a>
        </Link>
      </div>
    </article>
  );
}