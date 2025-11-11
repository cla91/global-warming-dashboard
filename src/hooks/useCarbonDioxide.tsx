import getCarbonDioxide from "@/api/getCarbonDioxide";
import type FormattedDataRecord from "@/types/FormattedDataRecord";
import fromatCarbonDioxideData from "@/utils/formatCarbonDioxideData";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export default function useCarbonDioxide(): UseQueryResult<
  FormattedDataRecord,
  Error
> {
  return useQuery({
    queryKey: ["carbonDioxide"],
    queryFn: async () => {
      const response = await getCarbonDioxide();
      return fromatCarbonDioxideData(response);
    },
  });
}
