import { useQuery } from "@apollo/client"
import { GET_TOURS_SIMILARES } from "../graphql/queries/getToursRelacionados"


const GestionToursSimilares = ({deparCodi}) => {

  const { data, loading } = useQuery(GET_TOURS_SIMILARES, {
    fetchPolicy: 'network-only',
    variables: {
      "deparCodi":deparCodi,
      "provCodi": null
    }
    // onError: (error) => { console.error('Error al obtener la data de los Tours: ', error?.graphQLErrors[0]?.debugMessage) }
  })
  const dataToursSimilares = data ? data?.GetToursRelacionadosLugar : []
  return { dataToursSimilares, loading }
}

export default GestionToursSimilares
