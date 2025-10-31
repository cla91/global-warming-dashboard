import type PolarIceRecord from "@/types/PolarIceRecord";
import type FormattedDataRecord from "@/types/FormattedDataRecord";

export default function formatPolarIceData(
  data: Record<string, PolarIceRecord>
): FormattedDataRecord[] {
  const formattedData = Object.entries(data).map(([yearMonth, obj]) => ({
    date: new Date(
      Date.UTC(Number(yearMonth.slice(0, 4)), Number(yearMonth.slice(4)) - 1, 1)
    ),
    value: obj.value,
  }));
  return formattedData;
}
