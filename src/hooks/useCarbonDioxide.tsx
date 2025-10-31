import getCarbonDioxide from "@/api/getCarbonDioxide";
import type FormattedDataRecord from "@/types/FormattedDataRecord";
import fromatCarbonDioxideData from "@/utils/formatCarbonDioxideData";
import { useQuery } from "@tanstack/react-query";

export default function useCarbonDioxide(options?: {
  select?: (data: FormattedDataRecord[]) => FormattedDataRecord[];
}) {
  return useQuery({
    queryKey: ["carbonDioxide"],
    queryFn: async () => {
      const response = await getCarbonDioxide();
      return fromatCarbonDioxideData(response);
    },
    select: options?.select,
  });
}
