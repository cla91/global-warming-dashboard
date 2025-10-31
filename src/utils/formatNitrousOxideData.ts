import type FormattedDataRecord from "@/types/FormattedDataRecord";
import type NitrousOxideRecord from "@/types/NitrousOxideRecord";
import convertDecimalYearToDate from "./convertDecimalYearToDate";

export default function formatNitrousOxideData(
  data: NitrousOxideRecord[]
): FormattedDataRecord[] {
  return data.map((record) => ({
    date: convertDecimalYearToDate(record.date),
    value: Number(record.trend),
  }));
}
