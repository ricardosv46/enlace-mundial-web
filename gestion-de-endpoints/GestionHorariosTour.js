import { useQuery } from "@apollo/client";
import { GET_HORARIOS_TOUR } from "../graphql/queries/GetHorariosTour";

const GestionHorariosTour = ({anio, mes, tourId}) => {
  const fechaActual = new Date();
  const mesActual = fechaActual.getMonth() + 1;
  const anioActual = fechaActual.getFullYear();
  const { data, loading } = useQuery(GET_HORARIOS_TOUR, {
    variables: {
      anio: anio || anioActual,
      mes: mes || mesActual,
      tourId: tourId,
    },
  });
  const dataHorario = data ? data?.GetHorariosTour : [];
  return { dataHorario, loading }
};



export default GestionHorariosTour;
