import { useQuery } from "@apollo/client"
import { GET_ALL_TOURS } from "../graphql/queries/GetAllTours"


const GestionTours = () => {

  const { data, loading } = useQuery(GET_ALL_TOURS, {
    fetchPolicy: 'network-only',
    variables: {
      numberPaginate: 10,
      page: 1,
      estadoTour: ''
    }
    // onError: (error) => { console.error('Error al obtener la data de los Tours: ', error?.graphQLErrors[0]?.debugMessage) }
  })
  const dataTours = data ? data?.GetAllTour?.data : []
  return { dataTours, loading }
}

export default GestionTours
