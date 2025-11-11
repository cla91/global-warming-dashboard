import type { ChartOptions } from "chart.js";

export const lineChartOptions = (unit: string): ChartOptions<"line"> => ({
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
    },
    point: {
      radius: 2,
      borderWidth: 1,
      hoverRadius: 5,
      hoverBorderWidth: 2,
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
        unit: "day",
        displayFormats: {
          month: "yyyy MMM dd",
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
