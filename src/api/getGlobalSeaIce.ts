import axios from "axios";
import type GlobalSeaIceRecord from "@/types/GlobalSeaIceRecord";

interface GlobalSeaIceApiResponse {
  error: object | null;
  arcticData: {
    description: {
      title: string;
      basePeriod: string;
      units: string;
      annualMean: number;
      decadalTrend: number;
      missing: number;
    };
    data: Record<string, GlobalSeaIceRecord>;
  };
  result?: string;
}
export default async function getGlobalSeaIce(): Promise<
  Record<string, GlobalSeaIceRecord>
> {
  const response = await axios.get<GlobalSeaIceApiResponse>(
    "https://global-warming.org/api/arctic-api"
  );
  if (response.data.error) throw new Error(response.data.result);
  return response.data.arcticData.data;
}
