import React from "react";
import Image from "next/image";

// Componentes
import Like from "./components/like";

export default function CardDestino(props) {
  return (
    <article className="wrapperCard-destino">
      <div
        className="wrapperCard-destino wrapperCard-destino_wrapperImg"
        style={{
          backgroundImage: `url("${props.item.imagen}")`,
        }}
      />

      <div className="wrapperCard-destino wrapperCard-destino_titulo">
        <h3 className="">{props.item.titulo}</h3>
        {/* <Like /> */}
      </div>
    </article>
  );
}

{
  /*<article
   className="card-destino "
 style={{
 overflow: "hidden",
    backgroundImage: `url("${props.item.imagen}")`,
   }}
   >


 <div className="card-destino__header d-flex justify-content-end align-items-center p-3 position-relative ">
  <h3 className="card-destino__titulo text-white">{props.item.titulo}</h3>

     <Like />
     </div>
  </article> */
}
