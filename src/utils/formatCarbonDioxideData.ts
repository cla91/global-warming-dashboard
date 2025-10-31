import type CarbonDioxideRecord from "@/types/CarbonDioxideRecord";
import type FormattedDataRecord from "@/types/FormattedDataRecord";

export default function fromatCarbonDioxideData(
  data: CarbonDioxideRecord[]
): FormattedDataRecord[] {
  return data.map((record) => ({
    date: new Date(
      Date.UTC(
        Number(record.year),
        Number(record.month) - 1,
        Number(record.day)
      )
    ),
    value: Number(record.trend),
  }));
}
