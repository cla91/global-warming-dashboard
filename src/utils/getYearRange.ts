import type FormattedDataRecord from "@/types/FormattedDataRecord";

export default function getYearRange(data: FormattedDataRecord): number[] {
  return Array.from(
    new Set(data.records[0].record.map((r) => r.date.getFullYear()))
  ).sort((a, b) => b - a);
}
