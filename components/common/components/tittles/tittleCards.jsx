import React from "react";

export const TittleCards = ({ tittle = "" }) => {
  return (
    <h2 className="subtitulo-general subtitulo-general--border-bottom text-black">
      {tittle || ""}
    </h2>
  );
};
