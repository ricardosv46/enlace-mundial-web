import { gql } from '@apollo/client'
export const GET_HORARIOS_TOUR = gql`
query GetHorariosTour($anio:String,$mes:String,$tourId:Int){
  GetHorariosTour(anio:$anio,mes:$mes,tourId:$tourId){
    horarioTourId
    hora
    fecha
    cupos
    precio
    estado
    tourId
  }
}

`