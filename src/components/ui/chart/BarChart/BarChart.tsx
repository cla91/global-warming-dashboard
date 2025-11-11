import type FormattedDataRecord from "@/types/FormattedDataRecord";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  type ChartOptions,
  type ScriptableContext,
} from "chart.js";
import {
  TimeSeriesScale,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  TimeScale,
  Filler,
} from "chart.js";

import "chartjs-adapter-date-fns";
import getComputedProperyValue from "@/utils/getComputedPropertyValue";
import addAlphaChannel from "@/utils/addAlphaChannel";
import { barChartOptions } from "@/chartUtils/barChartOptions";
import styles from "@components/ui/chart/BarChart/BarChart.module.scss";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  TimeScale,
  TimeSeriesScale,
  Filler
);

interface SparkbarProps {
  data: FormattedDataRecord;
}
export default function BarChart({ data }: SparkbarProps) {
  const { nameShort, unitLong, records } = data;

  const minValue = Math.min(...records[0].record.map((record) => record.value));
  const maxValue = Math.max(...records[0].record.map((record) => record.value));

  const options: ChartOptions<"bar"> = barChartOptions(
    minValue,
    maxValue,
    unitLong
  );

  const chartData = {
    datasets: [
      {
        label: records[0].name,
        data: records[0].record.map((item) => ({
          x: item.date,
          y: item.value,
        })),
        backgroundColor: (context: ScriptableContext<"bar">) => {
          const { ctx, chartArea } = context.chart;
          if (!chartArea) return getComputedProperyValue("chart", nameShort);

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          const fillColor = getComputedProperyValue("chart", nameShort);
          gradient.addColorStop(0, addAlphaChannel(fillColor, 1));
          gradient.addColorStop(0.95, addAlphaChannel(fillColor, 0.8));
          gradient.addColorStop(1, addAlphaChannel(fillColor, 0));
          return gradient;
        },
        borderRadius: 3,
        barThickness: 5,
      },
    ],
  };

  return (
    <div aria-hidden={true} className={styles.chartContainer}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
