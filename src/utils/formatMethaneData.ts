import type FormattedDataRecord from "@/types/FormattedDataRecord";
import type MethaneRecord from "@/types/MethaneRecord";
import parseYearMonth from "./parseYearMonth";

export default function formatMethaneData(
  data: MethaneRecord[]
): FormattedDataRecord {
  return {
    nameShort: "ch4",
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
