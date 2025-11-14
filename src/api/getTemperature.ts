import axios from "axios";
import type TemperatureRecord from "@/types/TemperatureRecord";

interface TemperatureApiResponse {
  error: string | null;
  result: TemperatureRecord[];
}
export default async function getTemperature(): Promise<TemperatureRecord[]> {
  const response = await axios.get<TemperatureApiResponse>(
    "https://global-warming.org/api/temperature-api"
  );
  if (response.data.error) {
    throw new Error(response.data.error);
  }
  return response.data.result;
}
