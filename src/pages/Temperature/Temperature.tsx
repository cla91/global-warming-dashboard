import DateFilter from "@components/ui/DateFilter/DateFilter";
import LineChart from "@components/ui/chart/LineChart/LineChart";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import useTemperature from "@/hooks/useTemperature";
import getYearRange from "@/utils/getYearRange";
import { useState } from "react";
import getFilteredData from "@/utils/getFilteredData";
import PageFooter from "@/components/layout/PageFooter/PageFooter";
import LegendDetails from "@/components/ui/LegendDetails/LegendDetails";

export default function Temperature() {
  useDocumentTitle("Temperature | Global Warming Dashboard");
  const { data, isError, isPending, error } = useTemperature();
  const [fromYear, setFromYear] = useState<number>(2023);
  const [toYear, setToYear] = useState<number>(2025);

  const yearRange = data ? getYearRange(data) : [];

  const filteredData = data ? getFilteredData(data, fromYear, toYear) : null;
  const basePeriod = "1951-1980";
  const startDate = yearRange.length > 0 ? yearRange[yearRange.length - 1] : "";
  const endDate = yearRange.length > 0 ? yearRange[0] : "";
  const unit = data?.unitLong || "°C";

  return (
    <main>
      <h1>Global Surface Temperature</h1>
      <section>
        <h2>Overview</h2>
        <p>
          This chart shows the{" "}
          <strong>global mean surface temperature anomaly </strong>
          relative to the {basePeriod} average. Anomalies represent the
          difference between observed temperatures and the long-term mean,
          indicating how much warmer or cooler each year was compared to the
          reference period.
        </p>
        {startDate && endDate && (
          <p>
            The data spans from <strong>{startDate}</strong> to{" "}
            <strong>{endDate}</strong>.
          </p>
        )}
      </section>
      <section className="chartSection">
        <h2>Data Visualization - {unit}</h2>
        <DateFilter
          fromYear={fromYear}
          setFromYear={setFromYear}
          toYear={toYear}
          setToYear={setToYear}
          yearRange={yearRange}
        />
        {isError && <p className="error-message">Error: {error.message}</p>}
        {isPending && <p>Loading...</p>}
        {filteredData && <LineChart data={filteredData} />}
        <LegendDetails category="temp" />
      </section>
      <PageFooter>
        <p>
          <strong>Source: </strong>
          GISTEMP Team, 2020: GISS Surface Temperature Analysis (GISTEMP),
          version 4. NASA Goddard Institute for Space Studies. Dataset accessed
          20YY-MM-DD at{" "}
          <a
            href="https://data.giss.nasa.gov/gistemp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            data.giss.nasa.gov/gistemp
          </a>
          .
        </p>
        <p>
          <strong>Source data 1880 - present: </strong>
          Lenssen, N., G. Schmidt, J. Hansen, M. Menne, A. Persin, R. Ruedy, and
          D. Zyss, 2019: Improvements in the GISTEMP uncertainty model. J.
          Geophys. Res. Atmos., 124, no. 12, 6307-6326,
          doi:10.1029/2018JD029522.
        </p>
      </PageFooter>
    </main>
  );
}
