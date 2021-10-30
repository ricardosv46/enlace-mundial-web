import React, { useState } from "react";

import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

export default function Calendar(props) {
  const [startDate, setStartDate] = useState(new Date());

  // Evento para enviar la fecha seleccionada
  const asignarFecha = (fecha) => {
    props.fechaSeleccionada(fecha);
    setStartDate(fecha);
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => asignarFecha(date)}
        locale="es"
        inline
        minDate={new Date()}
      />
    </>
  );
}
