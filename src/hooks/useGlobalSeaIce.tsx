import getGlobalSeaIce from "@/api/getGlobalSeaIce";
import type FormattedDataRecord from "@/types/FormattedDataRecord";
/* import type GlobalSeaIceRecord from "@/types/GlobalSeaIceRecord"; */
import formatGlobalSeaIceData from "@/utils/formatGlobalSeaIceData";
import { useQuery } from "@tanstack/react-query";

export default function useGlobalSeaIce(options?: {
  select?: (data: FormattedDataRecord[]) => FormattedDataRecord[];
}) {
  return useQuery({
    queryKey: ["globalSeaIce"],
    queryFn: async () => {
      const response = await getGlobalSeaIce();
      return formatGlobalSeaIceData(response);
    },
    select: options?.select,
  });
}
