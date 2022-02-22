import { useQuery } from "@apollo/client"
import { GET_ALL_BLOG } from "../graphql/queries/GetAllBlog"

const GestionBlog = ({ pagina }) => {
  const { data, loading } = useQuery(GET_ALL_BLOG, {
    fetchPolicy: "network-only",
    variables: {
      numberPaginate: 3,
      page: pagina,
      estadoBlog: "1",
    },
    // onError: (error) => { console.error('Error al obtener la data de los Tours: ', error?.graphQLErrors[0]?.debugMessage) }
  })

  const dataBlog = data ? data?.GetAllBlog?.data : []
  const nroTotalItems = data ? data?.GetAllBlog?.nroTotalItems : 1
  return { dataBlog, loading, nroTotalItems }
}

export default GestionBlog
