export type Category = "temp" | "co2" | "ch4" | "n2o" | "gsi";

interface SingleLegend {
  label: string;
  description: string;
}

export const dataLegend: Record<Category, SingleLegend[]> = {
  temp: [
    {
      label: "station",
      description:
        "represent direct temperature measurements from ground-based meteorological stations located worldwide.",
    },
    {
      label: "land",
      description:
        "derived from these observations, interpolated onto a global grid to better represent average land-surface temperature changes over time.",
    },
  ],
  co2: [
    {
      label: "trend",
      description:
        "represents the monthly mean atmospheric CO₂ concentration, the trend is seasonally adjusted to highlight the long-term increase in carbon dioxide levels.",
    },
  ],
  ch4: [
    {
      label: "trend",
      description:
        "shows the globally averaged atmospheric methane (CH₄) concentration. The trend line removes seasonal variability to emphasize long-term growth in methane emissions.",
    },
  ],
  n2o: [
    {
      label: "trend",
      description:
        "shows the global mean atmospheric nitrous oxide (N₂O) concentration. The trend is calculated from long-term in-situ and flask measurements, highlighting the steady increase over recent decades.",
    },
  ],
  gsi: [
    {
      label: "extension",
      description:
        "represents the global sea ice extent — the total area of the ocean with at least 15% sea ice cover — combining data from the Arctic and Antarctic regions.",
    },
  ],
};
