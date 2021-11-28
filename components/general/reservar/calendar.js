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
  const [startDate, setStartDate] = useState(new Date());
  const [fechas, setFechas] = useState([]);
  // Evento para enviar la fecha seleccionada
  const asignarFecha = (fecha) => {
    fechaSeleccionada(fecha);
    // setStartDate(fecha);
  };
  console.log('las fechas son', fechas)
  useEffect(() => {
    pintarDias.map((fecha) => {
      const arrayFecha = fecha.split("-");
      setFechas((f) => [
        ...f,
        new Date((arrayFecha[0]),(arrayFecha[1] - 1),(arrayFecha[2])),
      ]);
    })
  }, [pintarDias])
  return (
    <>
      <DatePicker
        selected={startDate}
        // onSelect={() => { alert('') }}
        onChange={(date) => {
          asignarFecha(date);
        }}
        onMonthChange={(date) => {
          setMes(date.getMonth() + 1);
          setAnio(date.getFullYear());
        }}
        highlightDates={
          fechas
        }
        // [new Date(2021, 10, 29), new Date(2021, 10, 30)]}
        locale="es"
        inline
        // filterDate={(date) => {
        //   return date.getMonth() === mes;
        // }}
        // includeDates={[
        //   new Date(2021, 10, 29),
        //   new Date(2021, 10, 30),
        //   new Date(2021, 11, 10),
        // ]}
        showDisabledMonthNavigation
      // dayClassName={(date = new Date) =>
      //   date.getDate() < Math.random() * 31 ? "random" : undefined
      // }
      >
        <div style={{ color: "red" }}>
          Debe de seleccionar una fecha asignada
        </div>
      </DatePicker>
    </>
  );
}
