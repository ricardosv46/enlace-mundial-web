import { useQuery } from "@apollo/client"
import { GET_ALL_BLOG } from "../graphql/queries/GetAllBlog"

const GestionBlog = () => {
  const { data, loading } = useQuery(GET_ALL_BLOG, {
    fetchPolicy: "network-only",
    variables: {
      numberPaginate: 10,
      page: 1,
      estadoBlog: "1",
    },
    // onError: (error) => { console.error('Error al obtener la data de los Tours: ', error?.graphQLErrors[0]?.debugMessage) }
  })
  const dataBlog = data ? data?.GetAllBlog?.data : []
  return { dataBlog, loading }
}

export default GestionBlog
