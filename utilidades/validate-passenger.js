// import * as Yup from "yup";
import { string, object, number, ref, lazy } from 'yup'

const TypeDocumento = {
    "DNI": 8,
    "CE": 12,
    "PASAPORTE": 15
}
let lenghtMin = 8
export const ValidationPassenger = object().shape({
    nombres: string().min(2, 'Nombre muy corto').max(255, 'Nombre muy largo').required('Debe ingresar el nombre'),
    apellidos: string().min(2, 'Apellido muy corto').max(255, 'Apellido muy largo').required('Debe ingresar el apellido'),
    // tipoDocumento: string().required('Debe de ingresar el tipo de documento').oneOf(Object.keys(TypeDocumento)),
    tipoDocumento: lazy((value, k) => {
        lenghtMin = TypeDocumento[value]
        return string().required('Debe de ingresar el tipo de documento').oneOf(Object.keys(TypeDocumento))
    }),

    // nroDocumento: string().min(8, 'Tipo de documento incompleto').required('Debe ingresar el Nro de documento'),
    nroDocumento: lazy((value, k) => {
        // console.log(lazy((value = ref('tipoDocumento')) => value), '<=== ')
        return string().length(lenghtMin, 'Compruenbe su numero').required('Debe ingresar el Nro de documento')
    }),
    edad: string().required('Debe ingresar su edad'),
    comentarios: string().optional().max('255')
    // nombres: string().min(2).max(255).required(),
    // apellidos: string().min(2).max(255).required(),
    // tipoDocumento: string().required(),
    // nroDocumento: string().min(8).required(),
    // comentarios: string().optional().max(255)
})
