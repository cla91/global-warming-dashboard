import type FormattedDataRecord from "@/types/FormattedDataRecord";
import styles from "@components/ui/CategoryCard/CategoryCard.module.scss";

interface QueryResult {
  data: FormattedDataRecord[] | undefined;
  error: unknown;
  isError: boolean;
  isPending: boolean;
}
type QueryHook = (options?: {
  select?: (data: FormattedDataRecord[]) => FormattedDataRecord[];
}) => QueryResult;

interface CategoryCardProps {
  title: string;
  className: string;
  query: QueryHook;
}

export default function CategoryCard({
  title,
  className,
  query,
}: CategoryCardProps) {
  const { data, isPending, isError, error } = query({
    select: (res) => res.slice(-100),
  });
  const lastData = data?.[data.length - 1];

  return (
    <section className={`${styles.card} ${className ? styles[className] : ""}`}>
      <h2>{title}</h2>
      <h3>Latest measurement:</h3>
      <p>
        Value:{" "}
        {isPending
          ? "Loading..."
          : isError || !lastData
          ? "N/A"
          : typeof lastData.value === "number"
          ? lastData.value
          : `Station: ${lastData.value.station}, Land: ${lastData.value.land}`}
      </p>
      {isError && <p>Error: {(error as Error).message}</p>}
      {data && (
        <p>
          Latest measurement:{" "}
          {`Date: ${lastData?.date.getFullYear()}-${lastData?.date.getMonth()}`}
          {`Value: ${
            typeof lastData?.value === "number"
              ? lastData.value
              : `Station: ${lastData?.value.station}, Land: ${lastData?.value.land}`
          }`}
        </p>
      )}
    </section>
  );
}
