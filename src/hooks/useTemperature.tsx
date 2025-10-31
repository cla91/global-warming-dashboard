import getTemperature from "@/api/getTemperature";
import type FormattedDataRecord from "@/types/FormattedDataRecord";
import formatTemperatureData from "@/utils/formatTemperatureData";
import { useQuery } from "@tanstack/react-query";

export default function useTemperature(options?: {
  select?: (data: FormattedDataRecord[]) => FormattedDataRecord[];
}) {
  return useQuery({
    queryKey: ["temperature"],
    queryFn: async () => {
      const response = await getTemperature();
      return formatTemperatureData(response);
    },
    select: options?.select,
  });
}
