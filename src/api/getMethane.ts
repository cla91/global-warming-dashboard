import axios from "axios";
import type MethaneRecord from "@/types/MethaneRecord";

interface MethaneApiResponse {
  methane: MethaneRecord[];
}

export default async function getMethane(): Promise<MethaneRecord[]> {
  const response = await axios.get<MethaneApiResponse>(
    "https://global-warming.org/api/methane-api"
  );
  return response.data.methane;
}
