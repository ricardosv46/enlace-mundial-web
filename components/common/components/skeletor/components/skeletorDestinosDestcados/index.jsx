import React from "react";

export const SkeletorDestinosDestacados = ({ Class = "" }) => {
  return (
    <div className={`wrapperSkeletorDestinosDestacados ${Class}`}>
      <div className="wrapperSkeletorDestinosDestacados wrapperSkeletorDestinosDestacados_img" />
      <div className="wrapperSkeletorDestinosDestacados wrapperSkeletorDestinosDestacados_text" />
      <div className="wrapperSkeletorDestinosDestacados wrapperSkeletorDestinosDestacados_subtext" />
    </div>
  );
};
