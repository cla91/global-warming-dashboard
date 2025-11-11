import type FormattedDataRecord from "@/types/FormattedDataRecord";
import styles from "@components/ui/chart/Sparkbar/Sparkbar.module.scss";
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
import { sparkbarOptions } from "@/chartUtils/sparkbarOptions";

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
export default function Sparkbar({ data }: SparkbarProps) {
  const lastValues = data.records[0].record.slice(-40);
  const valueName = data.records[0].name;
  const { nameShort } = data;

  const minValue = Math.min(...lastValues.map((record) => record.value));
  const maxValue = Math.max(...lastValues.map((record) => record.value));

  const options: ChartOptions<"bar"> = sparkbarOptions(minValue, maxValue);

  const chartData = {
    labels: lastValues.map((r) => r.date),
    datasets: [
      {
        label: valueName,
        data: lastValues.map((r) => r.value),
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
          gradient.addColorStop(0, addAlphaChannel(fillColor, 0.9));
          gradient.addColorStop(0.7, addAlphaChannel(fillColor, 0.25));
          gradient.addColorStop(1, addAlphaChannel(fillColor, 0));
          return gradient;
        },
        borderRadius: 3,
        barThickness: 5,
      },
    ],
  };

  return (
    <div aria-hidden={true} className={styles.container}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
