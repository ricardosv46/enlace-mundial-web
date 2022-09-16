import React from "react";
export const TittleCards = ({ tittle = "", Push }) => {
  return (
    <h2
      className="subtitulo-general subtitulo-general--border-bottom text-black "
      onClick={typeof Push === "function" ? () => Push() : null}
    >
      {tittle || ""}
    </h2>
  );
};
