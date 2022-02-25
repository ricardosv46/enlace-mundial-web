import { useQuery } from "@apollo/client"
import { GET_ALL_CATEGORIA } from "../graphql/queries/getAllCategoria"

const CategoriasServices = () => {
  const { data, loading: loadingCategoria } = useQuery(GET_ALL_CATEGORIA, {
    fetchPolicy: "network-only",
    variables: {
      estadoCategoria: "Activado",
    },
    // onError: (error) => { console.error('Error al obtener la data de los Tours: ', error?.graphQLErrors[0]?.debugMessage) }
  })

  const dataCategoria = data ? data?.GetCategoria : []

  return { dataCategoria, loadingCategoria }
}

export default CategoriasServices
