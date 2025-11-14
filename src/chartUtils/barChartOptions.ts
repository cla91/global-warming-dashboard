import getComputedProperyValue from "@/utils/getComputedPropertyValue";
import type { ChartOptions } from "chart.js";

const currentColor = () => getComputedProperyValue("text-color-primary");

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
        color: "rgb(119, 119, 119)",
        font: {
          size: 14,
          family: "Inter, sans-serif",
          weight: 500,
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
        color: currentColor,
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
        color: currentColor,
        font: {
          size: 12,
          family: "Inter, sans-serif",
        },
      },
      title: {
        color: "rgb(119, 119, 119)",
        display: true,
        text: unit,
        font: {
          size: 14,
          family: "Inter, sans-serif",
          weight: 500,
        },
      },
      grid: {
        color: "rgba(119, 119, 119, 0.1)",
      },
    },
  },
});
