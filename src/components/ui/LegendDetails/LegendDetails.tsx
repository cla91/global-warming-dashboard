import { dataLegend } from "@/data/dataLegend";
import type { Category } from "@/data/dataLegend";
import styles from "@components/ui/LegendDetails/LegendDetails.module.scss";

interface LegendDetailsProps {
  category: Category;
}

export default function LegendDetails({ category }: LegendDetailsProps) {
  return (
    <ul className={styles.dataLegend}>
      {dataLegend[category].map((item) => {
        const className =
          item.label === "station" || item.label === "land"
            ? styles[item.label]
            : styles[category];
        return (
          <li key={item.label}>
            <strong className={className}>{item.label}: </strong>
            {item.description}
          </li>
        );
      })}
    </ul>
  );
}
