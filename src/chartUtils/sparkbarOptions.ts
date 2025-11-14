import type { ChartOptions } from "chart.js";

export const sparkbarOptions = (
  minValue: number,
  maxValue: number
): ChartOptions<"bar"> => ({
  responsive: true,
  maintainAspectRatio: false,
  events: [],
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      type: "category",
      display: false,
    },
    y: {
      display: false,
      min: minValue - 0.5,
      max: maxValue + 0.5,
    },
  },
});
