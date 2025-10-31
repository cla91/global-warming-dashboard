import axios from "axios";
import type CarbonDioxideRecord from "@/types/CarbonDioxideRecord";

interface CarbonDioxideApiResponse {
  co2: CarbonDioxideRecord[];
}
export default async function getCarbonDioxide(): Promise<
  CarbonDioxideRecord[]
> {
  const response = await axios.get<CarbonDioxideApiResponse>(
    "https://global-warming.org/api/co2-api"
  );
  return response.data.co2;
}
