import type FormattedDataRecord from "@/types/FormattedDataRecord";
import styles from "@components/ui/chart/Sparkline/Sparkline.module.scss";
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
import getComputedProperyValue from "@/utils/getComputedPropertyValue";
import { sparklineOptions } from "@/chartUtils/sparklineOptions";
import addAlphaChannel from "@/utils/addAlphaChannel";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip,
  TimeScale,
  TimeSeriesScale,
  Filler
);

interface SparklineProps {
  data: FormattedDataRecord;
}
export default function Sparkline({ data }: SparklineProps) {
  const lastValues = data.records[0].record.slice(-50);
  const valueName = data.records[0].name;
  const { nameShort } = data;
  const propertyPartialName =
    valueName === "station" ? `chart-${valueName}` : "chart";

  const chartData = {
    labels: lastValues.map((r) => r.date),
    datasets: [
      {
        label: valueName,
        data: lastValues.map((r) => r.value),
        borderColor: () => {
          return getComputedProperyValue(propertyPartialName, nameShort);
        },
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
        fill: true,
      },
    ],
  };

  return (
    <div aria-hidden={true} className={styles.container}>
      <Line data={chartData} options={sparklineOptions} />
    </div>
  );
}
