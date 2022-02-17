import { useQuery } from "@apollo/client";
import { GET_INCLUYE_TOUR } from "../graphql/queries/getIncluyeTour";
export const useIncluyeServices = () => {
  const {
    data,
    loading: loadingGetData,
  } = useQuery(GET_INCLUYE_TOUR, {
    fetchPolicy: "network-only",
    onError: (err) => {
      console.log(
        "onError getAllData Incluye",
        err?.graphQLErrors[0]?.debugMessage
      );
    },
  });

  const db = data && data?.GetIncluyeTour;

  return {
    db,
    loadingGetData,
  };
};
