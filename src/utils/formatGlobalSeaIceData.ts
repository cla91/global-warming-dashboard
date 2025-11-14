import type GlobalSeaIceRecord from "@/types/GlobalSeaIceRecord";
import type FormattedDataRecord from "@/types/FormattedDataRecord";

export default function formatGlobalSeaIceData(
  data: Record<string, GlobalSeaIceRecord>
): FormattedDataRecord {
  const formattedData = Object.entries(data)
    .map(([yearMonth, obj]) => ({
      date: new Date(
        Date.UTC(
          Number(yearMonth.slice(0, 4)),
          Number(yearMonth.slice(4)) - 1,
          1
        )
      ),
      value: obj.value,
    }))
    .filter((record) => record.value !== -9999); // Filter out missing values

  return {
    nameShort: "gsi",
    unitLong: "million square km",
    unitShort: "million km²",
    records: [
      {
        name: "extension",
        record: formattedData,
      },
    ],
  };
}
