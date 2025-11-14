import type FormattedDataRecord from "@/types/FormattedDataRecord";
import styles from "@components/ui/chart/LineChart/LineChart.module.scss";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, type ScriptableContext } from "chart.js";
import {
  TimeSeriesScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip,
  TimeScale,
  Filler,
} from "chart.js";

import "chartjs-adapter-date-fns";
import addAlphaChannel from "@/utils/addAlphaChannel";
import getComputedProperyValue from "@/utils/getComputedPropertyValue";

ChartJS.register(
  TimeSeriesScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip,
  TimeScale,
  Filler
);
import { lineChartOptions } from "@/chartUtils/lineChartOptions";

interface LineChartProps {
  data: FormattedDataRecord;
}
export default function LineChart({ data }: LineChartProps) {
  const { nameShort, records, unitLong } = data;

  const chartData = {
    datasets: records.map((r) => {
      const { name, record } = r;
      const propertyPartialName =
        name === "station" || name === "land" ? `chart-${name}` : "chart";
      return {
        label: name,
        data: record.map((item) => ({
          x: item.date,
          y: item.value,
        })),
        borderColor: () =>
          getComputedProperyValue(propertyPartialName, nameShort),
        borderWidth: 2,
        fill: records.length === 1,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const { ctx, chartArea } = context.chart;
          const fillColor = getComputedProperyValue(
            propertyPartialName,
            nameShort
          );
          if (!chartArea) return fillColor;
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, addAlphaChannel(fillColor, 0.7)); // 70% opacity
          gradient.addColorStop(0.7, addAlphaChannel(fillColor, 0.15)); // 15% opacity
          gradient.addColorStop(1, addAlphaChannel(fillColor, 0)); // 0% opacity
          return gradient;
        },
      };
    }),
  };

  return (
    <div className={styles.chartContainer}>
      <Line data={chartData} options={lineChartOptions(unitLong)} />
    </div>
  );
}
