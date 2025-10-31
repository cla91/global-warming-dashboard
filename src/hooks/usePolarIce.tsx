import getPolarIce from "@/api/getPolarIce";
import type FormattedDataRecord from "@/types/FormattedDataRecord";
/* import type PolarIceRecord from "@/types/PolarIceRecord"; */
import formatPolarIceData from "@/utils/formatPolarIceData";
import { useQuery } from "@tanstack/react-query";

export default function usePolarIce(options?: {
  select?: (data: FormattedDataRecord[]) => FormattedDataRecord[];
}) {
  return useQuery({
    queryKey: ["polarIce"],
    queryFn: async () => {
      const response = await getPolarIce();
      return formatPolarIceData(response);
    },
    select: options?.select,
  });
}
