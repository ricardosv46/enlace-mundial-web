import { useState, useEffect } from 'react'
const datosFormulario = {
  validado: true,
  nombres: undefined,
  apellidos: undefined,
  tipoDocumento: 'DNI',
  edad: undefined,
  nroDocumento: undefined,
  comentarios: undefined
}

export const useTypePassenger = () => {
  const [DatePassenger, setDatePassenger] = useState([])

  // Asignar formularios
  const handlePassenger = (e, index) => {
    let LenghtCurrent = e.target.value.length
    let maxLength = e.target.maxLength === -1 ? 255 : e.target.maxLength
    if (LenghtCurrent <= maxLength || e.target.name === 'tipoDocumento') {
      setDatePassenger(DatePassenger.map((obj, i) => i === index ? { ...obj, [e.target.name]: e.target.value || undefined } : obj))
    }
  }

  useEffect(() => {
    const carritoLocal = JSON.parse(localStorage.getItem('carrito'))

    {/* creando array con la cantidad de nro de adultos y nro de menores*/ }
    {/* los numeros de personas estan en el local storage*/ }
    let formMayores = new Array(carritoLocal?.nroAdultos).fill({ ...datosFormulario, tipoPersona: 'ADULTO' })
    let formMenores = new Array(carritoLocal?.nroMenores).fill({ ...datosFormulario, tipoPersona: 'MENOR' })
    setDatePassenger([...formMayores, ...formMenores])
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = JSON.parse(localStorage.getItem('Datepassenger'))
      if (data) { setDatePassenger(data) }

    }
  }, [])

  return {
    DatePassenger,
    handlePassenger
  }
}