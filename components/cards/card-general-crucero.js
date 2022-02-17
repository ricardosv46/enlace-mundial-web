import React from "react";
import Link from "next/link";

export default function CardGeneralCrucero({ tipo, item }) {
  let urlARedirigir =
    tipo === "luna-de-miel"
      ? `/luna-de-miel/${item.slug}`
      : `/cruceros/${item.slugCrucero}`;

  return (
    <article className="card-l-miel">
      <Link href={`/cruceros/${item?.slugCrucero}`} passHref>
        <div
          className="card-l-miel__imagen pointer"
          style={{ backgroundImage: `url("${item?.imagenPrincipalCrucero?.url}")` }}
        ></div>
      </Link>

      <div className="text-center pt-2 pb-4 px-4">
        <h3 className="card-l-miel__titulo font-weight-bold mt-1">
          {item?.tituloCrucero}
        </h3>

        <Link href={`/cruceros/${item?.slugCrucero}`} passHref>
          <a className="card-l-miel__categoria">{item?.regionCrucero}</a>
        </Link>

        <p className="card-l-miel__descripcion mt-3 text-left">
          {item?.descripcionLargaCrucero}
        </p>

        <Link href={urlARedirigir} passHref>
          <a className="btn btn-outline-primary py-2 px-4">Informes</a>
        </Link>
      </div>
    </article>
  );
}
