import type FormattedDataRecord from "@/types/FormattedDataRecord";
import type NitrousOxideRecord from "@/types/NitrousOxideRecord";
import parseYearMonth from "./parseYearMonth";

export default function formatNitrousOxideData(
  data: NitrousOxideRecord[]
): FormattedDataRecord {
  return {
    nameShort: "n2o",
    unitLong: "parts per billion",
    unitShort: "ppb",
    records: [
      {
        name: "trend",
        record: data.map((record) => ({
          date: parseYearMonth(record.date),
          value: Number(record.trend),
        })),
      },
    ],
  };
}
