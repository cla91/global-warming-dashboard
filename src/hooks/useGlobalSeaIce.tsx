import getGlobalSeaIce from "@/api/getGlobalSeaIce";
import type FormattedDataRecord from "@/types/FormattedDataRecord";
import formatGlobalSeaIceData from "@/utils/formatGlobalSeaIceData";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export default function useGlobalSeaIce(): UseQueryResult<
  FormattedDataRecord,
  Error
> {
  return useQuery({
    queryKey: ["globalSeaIce"],
    queryFn: async () => {
      const response = await getGlobalSeaIce();
      return formatGlobalSeaIceData(response);
    },
  });
}
