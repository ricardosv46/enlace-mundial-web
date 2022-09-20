import React from "react";

export default function CardBlog(props) {
  return (
    // <article className="card-testimonio">
    //   <div className="card-testimonio__imagen-c d-flex justify-content-center align-items-center">
    //     <img
    //       src={props.item.imagen}
    //       alt="Picture of the author"
    //       className="card-testimonio__imagen"
    //     />
    //   </div>

    //   <div className="text-center pt-0 pb-4 px-5">
    //     <h3 className="card-testimonio__titulo font-weight-bold">
    //       {props.item.nombre}
    //     </h3>

    //     <p className="card-testimonio__descripcion text-justify mt-3">
    //       {props.item.comentario}
    //     </p>
    //   </div>
    // </article>
    <div className="card-testimonio">
      <img
        className="card-testimonio_img"
        src={props.item.imagen}
        alt="Picture of the author"
      />
      <div className="card-testimonio_wrappertext">
        <div className="card-testimonio_wrappertext_user">{props.item.nombre || 'username_default'}</div>
        <div className="card-testimonio_wrappertext_content">{props.item.comentario || ''}</div>
        <div className="card-testimonio_wrappertext_wrappertime">
          <div className="card-testimonio_wrappertext_wrappertime_gusta">Me gusta</div>
          <div className="card-testimonio_wrappertext_wrappertime_responder">Responder</div>
          <div className="card-testimonio_wrappertext_wrappertime_time">{props.item.datetime || ' 1 year'}</div>
        </div>
      </div>
    </div >
  );
}
