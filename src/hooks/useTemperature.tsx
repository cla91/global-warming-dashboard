import getTemperature from "@/api/getTemperature";
import type FormattedDataRecord from "@/types/FormattedDataRecord";
import formatTemperatureData from "@/utils/formatTemperatureData";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export default function useTemperature(): UseQueryResult<
  FormattedDataRecord,
  Error
> {
  return useQuery({
    queryKey: ["temperature"],
    queryFn: async () => {
      const response = await getTemperature();
      return formatTemperatureData(response);
    },
  });
}
