import type NitrousOxideRecord from "@/types/NitrousOxideRecord";
import axios from "axios";

interface NitrousOxideApiResponse {
  nitrous: NitrousOxideRecord[];
}
export default async function getNitrousOxide(): Promise<NitrousOxideRecord[]> {
  const response = await axios.get<NitrousOxideApiResponse>(
    "https://global-warming.org/api/nitrous-oxide-api"
  );
  return response.data.nitrous;
}
