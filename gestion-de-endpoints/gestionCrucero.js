import { useQuery } from "@apollo/client"
import { GET_ALL_CRUCERO } from "../graphql/queries/getAllCrucero"

const gestionCrucero = () => {

  const { data, loading } = useQuery(GET_ALL_CRUCERO, {
    fetchPolicy: 'network-only',
    variables: {
      numberPaginate: 10,
      page: 1,
      estadoCrucero: 'Activado'
    }
    // onError: (error) => { console.error('Error al obtener la data de los Tours: ', error?.graphQLErrors[0]?.debugMessage) }
  })
  const dataCrucero = data ? data?.GetAllCrucero?.data : []
  return {  dataCrucero, loading }
};

export default gestionCrucero;
