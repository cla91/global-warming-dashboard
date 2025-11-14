import type FormattedDataRecord from "@/types/FormattedDataRecord";
import styles from "@components/ui/CategoryCard/CategoryCard.module.scss";
import Sparkline from "@components/ui/chart/Sparkline/Sparkline";
import LoaderIcon from "@components/ui/LoaderIcon/LoaderIcon";
import Sparkbar from "@components/ui/chart/Sparkbar/Sparkbar";
import type { UseQueryResult } from "@tanstack/react-query";

interface CategoryCardProps {
  title: string;
  query: () => UseQueryResult<FormattedDataRecord, Error>;
  sparktype: "line" | "bar";
}

export default function CategoryCard({
  title,
  sparktype,
  query,
}: CategoryCardProps) {
  const { data, isPending, isError, error } = query();

  const lastData = data?.records.map((item) => {
    return {
      name: item.name,
      lastValue: item.record[item.record.length - 1].value,
      dateLastValue: item.record[item.record.length - 1].date,
    };
  });

  if (isPending) {
    return (
      <section className={`${styles.card}`}>
        <h2>{title}</h2>
        <h3>Latest measurement</h3>
        <p>Value: Loading...</p>
        <p>Date: Loading...</p>
        <LoaderIcon className={styles.loader} />
      </section>
    );
  }
  if (isError) {
    return (
      <section className={`${styles.card}`}>
        <h2>{title}</h2>
        <h3>Latest measurement</h3>
        <p>Value: "N/A"</p>
        <p>Date: "N/A"</p>
        <p className="error-message">Error: {(error as Error).message}</p>
      </section>
    );
  }

  return (
    <section className={`${styles.card}`}>
      <h2>{title}</h2>
      <div className={styles.details}>
        <h3>Latest measurement</h3>
        <p>
          {lastData
            ? lastData.map((item, index) => (
                <span key={index}>
                  {index > 0 && ", "}
                  <span className="capitalize">{item.name}:</span>{" "}
                  {item.lastValue} {data.unitShort}
                </span>
              ))
            : "No last data"}
        </p>
        <p>
          Date:{" "}
          {lastData?.[0].dateLastValue.toLocaleDateString("en", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }) || "No date available"}
        </p>
      </div>
      {data &&
        (sparktype === "line" ? (
          <Sparkline data={data} />
        ) : (
          <Sparkbar data={data} />
        ))}
    </section>
  );
}
