import React, { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
registerLocale("es", es);

export default function Calendar({
  setMes,
  fechaSeleccionada,
  setAnio,
  dataHorario,
  pintarDias,
}) {
  const [startDate, setStartDate] = useState(null);
  const [fechas, setFechas] = useState([]);
  // Evento para enviar la fecha seleccionada
  console.log("esta es la fecha seleccionada");

  useEffect(() => {
    setFechas([]);
    pintarDias.map((fecha) => {
      const arrayFecha = fecha.split("-");
      setFechas((f) => [
        ...f,
        new Date(arrayFecha[0], arrayFecha[1] - 1, arrayFecha[2]),
      ]);
    });
  }, [pintarDias]);
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
        }}
        // onSelect={date => setStartDate(date)}
        onMonthChange={(date) => {
          setMes(date.getMonth() + 1);
          setAnio(date.getFullYear());
          setStartDate(date);
        }}
        // filterDate={isWeekday}
        filterDate={(date) =>
          (date.getFullYear() === new Date(2021, 11, 21).getFullYear()) &&
          (date.getMonth() === new Date(2021, 11, 21).getMonth()) &&
          (date.getDate() === 
          
          new Date(2021, 11, 21).getDate()||date.getDate() === new Date(2021, 11, 22).getDate()
          
          )
         
        }
        includeDates={[new Date(2021,11,21),new Date(2021,11,22),new Date(2021,11,24)]}
        // includeDates={fechas}
        highlightDates={fechas}
        locale="es"
        inline
      >
        <div style={{ color: "red" }}>
          Debe de seleccionar una fecha asignada
        </div>
      </DatePicker>
    </>
  );
}
