import { useQuery } from "@apollo/client";
import { GET_ALL_ACTIVIDADES } from "../graphql/queries/getAllActividades";

export const useActividadesServices = () => {
  const { data, loading: loadingGetData } = useQuery(GET_ALL_ACTIVIDADES, {
    fetchPolicy: "network-only",
    onError: (err) => {
      console.log(
        "onError getAllData Actividades",
        err?.graphQLErrors[0]?.debugMessage
      );
    },
  });

  const db = data && data?.GetActividadesTour;

  return {
    db,
    loadingGetData,
  };
};
