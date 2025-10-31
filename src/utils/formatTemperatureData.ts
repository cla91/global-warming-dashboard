import type FormattedDataRecord from "@/types/FormattedDataRecord";
import type TemperatureRecord from "@/types/TemperatureRecord";
import convertDecimalYearToDate from "./convertDecimalYearToDate";

export default function formatTemperatureData(
  data: TemperatureRecord[]
): FormattedDataRecord[] {
  return data.map((record) => ({
    date: convertDecimalYearToDate(record.time),
    value: {
      station: Number(record.station),
      land: Number(record.land),
    },
  }));
}
