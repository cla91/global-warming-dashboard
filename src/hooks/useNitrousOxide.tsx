import getNitrousOxide from "@/api/getNitrousOxide";
import type FormattedDataRecord from "@/types/FormattedDataRecord";
import formatNitrousOxideData from "@/utils/formatNitrousOxideData";

import { useQuery } from "@tanstack/react-query";

export default function useNitrousOxide(options?: {
  select?: (data: FormattedDataRecord[]) => FormattedDataRecord[];
}) {
  return useQuery({
    queryKey: ["nitrousOxide"],
    queryFn: async () => {
      const response = await getNitrousOxide();
      return formatNitrousOxideData(response);
    },
    select: options?.select,
  });
}
