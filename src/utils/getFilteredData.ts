import type FormattedDataRecord from "@/types/FormattedDataRecord";

export default function getFilteredData(
  data: FormattedDataRecord,
  fromYear: number,
  toYear: number
): FormattedDataRecord {
  return {
    ...data,
    records: data.records.map((r) => ({
      ...r,
      record: r.record.filter(
        (rec) =>
          rec.date.getFullYear() >= fromYear && rec.date.getFullYear() <= toYear
      ),
    })),
  };
}
