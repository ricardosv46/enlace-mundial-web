import { useQuery } from "@apollo/client"
import { GET_ALL_DEPARTAMENTOS } from "../graphql/queries/getDepartamentos"

export const useDepartamentosServices = () => {
  const { data, loading: loadingGetData } = useQuery(GET_ALL_DEPARTAMENTOS, {
    fetchPolicy: "network-only",
    onError: (err) => {
      console.log(
        "onError getAllData Departamentos",
        err?.graphQLErrors[0]?.debugMessage
      )
    },
    variables: {
      destacado: "",
    },
  })
  const dataDepartamentos = data && data?.GetDepartamentos

  return {
    dataDepartamentos,
    loadingGetData,
  }
}
