import type FormattedDataRecord from "@/types/FormattedDataRecord";
import type TemperatureRecord from "@/types/TemperatureRecord";
import convertDecimalYearToDate from "./convertDecimalYearToDate";

export default function formatTemperatureData(
  data: TemperatureRecord[]
): FormattedDataRecord {
  return {
    nameShort: "temp",
    unitLong: "°C",
    unitShort: "°C",
    records: [
      {
        name: "station",
        record: data.map((record) => ({
          date: convertDecimalYearToDate(record.time),
          value: Number(record.station),
        })),
      },
      {
        name: "land",
        record: data.map((record) => ({
          date: convertDecimalYearToDate(record.time),
          value: Number(record.land),
        })),
      },
    ],
  };
}
