// import * as Yup from "yup";
import { string, object, number, ref, lazy } from 'yup'

const TypeDocumento = {
    "DNI": 8,
    "CE": 12,
    "PASAPORTE": 12
}
let LengthDocument = 8
export const ValidationPassenger = object().shape({
    nombres: string().min(2, 'Nombre muy corto').max(255, 'Nombre muy largo').required('Debe ingresar el nombre'),
    apellidos: string().min(2, 'Apellido muy corto').max(255, 'Apellido muy largo').required('Debe ingresar el apellido'),
    /*
    Generamos una funcion con lazy para saber el tipo de documento que se recibe
     y saber el tamaño de length necesario
    */
    tipoDocumento: lazy((value, k) => {
        LengthDocument = TypeDocumento[value]
        return string().required('Debe de ingresar el tipo de documento').oneOf(Object.keys(TypeDocumento))
    }),
    /*
    Generamos una funcion con lazy para poder poner el LengthDocument a nuestra conveniencia
    */
    nroDocumento: lazy((value) => {
        return string().length(LengthDocument, 'Revise su numero').required('Debe ingresar el Nro de documento')
    }),
    edad: number().positive('Revise su edad').required('Debe ingresar su edad'),
    comentarios: string().optional().max('255')

})
