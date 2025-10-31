import type FormattedDataRecord from "@/types/FormattedDataRecord";
import type MethaneRecord from "@/types/MethaneRecord";
import convertDecimalYearToDate from "./convertDecimalYearToDate";

export default function formatMethaneData(
  data: MethaneRecord[]
): FormattedDataRecord[] {
  return data.map((record) => ({
    date: convertDecimalYearToDate(record.date),
    value: Number(record.trend),
  }));
}
