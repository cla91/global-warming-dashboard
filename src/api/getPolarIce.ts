import axios from "axios";
import type PolarIceRecord from "@/types/PolarIceRecord";

interface PolarIceApiResponse {
  error: string | null;
  arcticData: {
    description: {
      title: string;
      basePeriod: string;
      units: string;
      annualMean: number;
      decadalTrend: number;
      missing: number;
    };
    data: Record<string, PolarIceRecord>;
  };
}
export default async function getPolarIce(): Promise<
  Record<string, PolarIceRecord>
> {
  const response = await axios.get<PolarIceApiResponse>(
    "https://global-warming.org/api/arctic-api"
  );
  if (response.data.error) throw new Error(response.data.error);
  return response.data.arcticData.data;
}
