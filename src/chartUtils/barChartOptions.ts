import type { ChartOptions } from "chart.js";

export const barChartOptions = (
  minValue: number,
  maxValue: number,
  unit: string
): ChartOptions<"bar"> => ({
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    bar: {
      borderRadius: 4,
      borderSkipped: false,
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "currentColor",
        font: {
          size: 16,
          family: "inherit",
        },
      },
    },
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit: "month",
        displayFormats: {
          month: "yyyy MMM",
          day: "yyyy MMM dd",
        },
      },
      ticks: {
        padding: 10,
        source: "data",
        color: "currentColor",
        font: {
          size: 12,
          family: "Inter, sans-serif",
        },
      },
      grid: {
        color: "rgba(119, 119, 119, 0.1)",
      },
    },
    y: {
      min: minValue - 0.5,
      max: maxValue + 0.5,
      ticks: {
        padding: 10,
        color: "currentColor",
        font: {
          size: 12,
          family: "Inter, sans-serif",
        },
      },
      title: {
        color: "currentColor",
        display: true,
        text: unit,
      },
      grid: {
        color: "rgba(119, 119, 119, 0.1)",
      },
    },
  },
});
