import { useQuery } from "@apollo/client"
import { GET_ALL_CATEGORIA_BLOG } from "../graphql/queries/getAllcategoriaBlog"

const GestionCategoriaBlog = () => {
  const { data, loading } = useQuery(GET_ALL_CATEGORIA_BLOG, {
    fetchPolicy: "network-only",
    variables: {
      estadoCategoriaBlog: "Activado",
    },
    // onError: (error) => { console.error('Error al obtener la data de los Tours: ', error?.graphQLErrors[0]?.debugMessage) }
  })
  const dataCategoriaBlog = data ? data?.GetAllCategoriaBlog : []
  return { dataCategoriaBlog, loading }
}

export default GestionCategoriaBlog
