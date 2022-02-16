import { useQuery } from "@apollo/client";
import { GET_ALL_DEPARTAMENTOS } from "../graphql/queries/getAllDepartamentos";
export const useDepartamentosServices = () => {
  const { data, loading: loadingGetData } = useQuery(GET_ALL_DEPARTAMENTOS, {
    fetchPolicy: "network-only",
    onError: (err) => {
      console.log(
        "onError getAllData Departamentos",
        err?.graphQLErrors[0]?.debugMessage
      );
    },
    variables: {
      destacado: "1",
    },
  });
  const db = data ? data?.GetDepartamentos : [];

  return {
    db,
    loadingGetData,
  };
};
