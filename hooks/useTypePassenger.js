import { useState, useEffect } from 'react'


const datosFormulario = {
    validado: false,
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
    useEffect(() => {
        const carritoLocal = JSON.parse(localStorage.getItem('carrito'))

        {/* creando array con la cantidad de nro de adultos y nro de menores*/ }
        {/* los numeros de personas estan en el local storage*/ }
        let formMayores = new Array(carritoLocal.nroAdultos).fill({ ...datosFormulario, tipoPersona: 'ADULTO' })
        let formMenores = new Array(carritoLocal.nroMenores).fill({ ...datosFormulario, tipoPersona: 'MENOR' })
        setDatePassenger([...formMayores, ...formMenores])
    }, [])

    return {
        DatePassenger, setDatePassenger
    }
}