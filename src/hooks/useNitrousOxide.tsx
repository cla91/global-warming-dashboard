import getNitrousOxide from "@/api/getNitrousOxide";
import type FormattedDataRecord from "@/types/FormattedDataRecord";
import formatNitrousOxideData from "@/utils/formatNitrousOxideData";

import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export default function useNitrousOxide(): UseQueryResult<
  FormattedDataRecord,
  Error
> {
  return useQuery({
    queryKey: ["nitrousOxide"],
    queryFn: async () => {
      const response = await getNitrousOxide();
      return formatNitrousOxideData(response);
    },
  });
}
