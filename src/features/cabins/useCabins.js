import { getCabins } from "../../services/apiCabins";
import { useQuery } from "@tanstack/react-query";

export const useCabins = () => {
  // useQuery를 사용하여 cabins 데이터를 가져옵니다.
  const {
    isPending: isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
};
