import React, { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import { registerLocale } from "react-datepicker"
import es from "date-fns/locale/es"
import { addDays, getDate } from "date-fns"
import moment from "moment"
registerLocale("es", es)

export default function Calendar({
  setMes,
  fechaSeleccionada,
  setFechaSeleccionada,
  setAnio,
  dataHorario,
  pintarDias,
  EsfechaValida,
  setEsFechaValida,
  setPrecioReal,
  setCupos,
  setDuracion,
  setNroAdultos,
  setNroMenores,
}) {
  const [startDate, setStartDate] = useState(new Date())
  const [fechas, setFechas] = useState([])

  useEffect(() => {
    setCupos(0)
    setPrecioReal(null)
    setEsFechaValida(false)
    setDuracion("No tiene fecha asignada")
    setFechaSeleccionada(
      startDate?.getFullYear() +
        "-" +
        (startDate?.getMonth() + 1) +
        "-" +
        startDate?.getDate()
    )
    dataHorario.map((item) => {
      if (item.fecha === fechaSeleccionada) {
        setDuracion(item)
        setEsFechaValida(true)
        setPrecioReal(item.precio)
        setCupos(item.cupos)
        setNroAdultos(0)
        setNroMenores(0)

        return
      }
    })
  }, [startDate, fechaSeleccionada, dataHorario])

  useEffect(() => {
    setFechas([])
    pintarDias.map((fecha) => {
      const arrayFecha = fecha.split("-")
      setFechas((f) => [
        ...f,
        new Date(arrayFecha[0], arrayFecha[1] - 1, arrayFecha[2]),
      ])
    })
  }, [pintarDias])

  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-2": fechas,
    },
  ]

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date)
        }}
        onSelect={(date) => setStartDate(date)}
        onMonthChange={(date) => {
          setMes(date.getMonth() + 1)
          setAnio(date.getFullYear())
          setStartDate(date)
        }}
        highlightDates={highlightWithRanges}
        includeDates={fechas}
        locale='es'
        inline
      >
        {EsfechaValida ? (
          <div
            style={{ color: "green", margin: ".5rem 0", textAlign: "center" }}
          >
            Fecha seleccionada valida
          </div>
        ) : (
          <div style={{ color: "red", margin: ".5rem 0", textAlign: "center" }}>
            Seleccione una fecha valida
          </div>
        )}
      </DatePicker>
    </>
  )
}
