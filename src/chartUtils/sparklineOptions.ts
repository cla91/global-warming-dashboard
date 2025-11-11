import type { ChartOptions } from "chart.js";

export const sparklineOptions: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,

  events: [],
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
    },
  },
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
      type: "time",
      display: false,
      ticks: {
        autoSkip: false,
      },
    },
    y: {
      display: false,
    },
  },
};
