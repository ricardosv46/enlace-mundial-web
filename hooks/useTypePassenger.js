import { useState, useEffect } from 'react'


const datosFormulario = {
    validado: false,
    nombres: '',
    apellidos: '',
    tipoDocumento: 'DNI',
    nroDocumento: undefined,
    comentarios: ''
}

export const useTypePassenger = () => {
    const [DatePassenger, setDatePassenger] = useState([])

    // Asignar formularios
    useEffect(() => {
        const carritoLocal = JSON.parse(localStorage.getItem('carrito'))

        // Calcular cuantos formularios se renderizarán
        let forms = []
        for (let i = 0; i < carritoLocal.nroAdultos; i++) {
            let form = {
                ...datosFormulario,
                tipoPersona: 'ADULTO'
            }
            forms.push(form)
        }
        for (let i = 0; i < carritoLocal.nroMenores; i++) {
            let form = {
                ...datosFormulario,
                tipoPersona: 'MENOR'
            }

            forms.push(form)
        }

        setDatePassenger(forms)
    }, [])

    return {
        DatePassenger, setDatePassenger
    }
}