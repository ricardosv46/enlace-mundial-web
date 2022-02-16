import { useQuery } from "@apollo/client"
import { GET_ALL_LUNA_MIEL } from "../graphql/queries/GetAllLunaMiel"



const GestionLuna = () => {

  const { data, loading } = useQuery(GET_ALL_LUNA_MIEL, {
    fetchPolicy: 'network-only',
    variables: {
      numberPaginate: 10,
      page: 1,
      estadoLuna: 'Activado'
    }
    // onError: (error) => { console.error('Error al obtener la data de los Tours: ', error?.graphQLErrors[0]?.debugMessage) }
  })
  const dataLuna = data ? data?.GetAllLunaMiel?.data : []
  return { dataLuna, loading }
}

export default GestionLuna