import styles from "@components/ui/DateFilter/DateFilter.module.scss";
interface DateFilterProps {
  fromYear: number;
  setFromYear: React.Dispatch<React.SetStateAction<number>>;
  toYear: number;
  setToYear: React.Dispatch<React.SetStateAction<number>>;
  yearRange: number[];
}

export default function DateFilter({
  fromYear,
  setFromYear,
  toYear,
  setToYear,
  yearRange,
}: DateFilterProps) {
  return (
    <div className={styles.filterContainer}>
      <div>
        <label>
          <span>From Year:</span>
          <select
            name="fromYear"
            value={fromYear}
            onChange={(e) => setFromYear(Number(e.target.value))}
          >
            {yearRange.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          <span>To Year:</span>
          <select
            name="toYear"
            value={toYear}
            onChange={(e) => setToYear(Number(e.target.value))}
          >
            {yearRange.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
      </div>
      {fromYear > toYear && (
        <p role="alert" aria-live="polite" className={styles.error}>
          Invalid year range selected.
        </p>
      )}
    </div>
  );
}
