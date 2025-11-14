import { Chart as ChartJS } from "chart.js";

export default function refreshAllCharts(): void {
  Object.values(ChartJS.instances).forEach((chart) => {
    try {
      chart.update();
    } catch (err) {
      console.log("error: ", err);
    }
  });
}
