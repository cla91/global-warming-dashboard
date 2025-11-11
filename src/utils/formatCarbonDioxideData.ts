import type CarbonDioxideRecord from "@/types/CarbonDioxideRecord";
import type FormattedDataRecord from "@/types/FormattedDataRecord";

export default function fromatCarbonDioxideData(
  data: CarbonDioxideRecord[]
): FormattedDataRecord {
  return {
    nameShort: "co2",
    unitLong: "parts per million",
    unitShort: "ppm",
    records: [
      {
        name: "trend",
        record: data.map((r) => ({
          date: new Date(
            Date.UTC(Number(r.year), Number(r.month) - 1, Number(r.day))
          ),
          value: Number(r.trend),
        })),
      },
    ],
  };
}
