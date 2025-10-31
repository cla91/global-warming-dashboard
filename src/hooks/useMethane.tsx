import { useQuery } from "@tanstack/react-query";
import getMethane from "@/api/getMethane";
import formatMethaneData from "@/utils/formatMethaneData";
import type FormattedDataRecord from "@/types/FormattedDataRecord";

export default function useMethane(options?: {
  select?: (data: FormattedDataRecord[]) => FormattedDataRecord[];
}) {
  return useQuery({
    queryKey: ["methane"],
    queryFn: async () => {
      const response = await getMethane();
      return formatMethaneData(response);
    },
    select: options?.select,
  });
}
