import LineChart from "@components/ui/chart/LineChart/LineChart";
import DateFilter from "@components/ui/DateFilter/DateFilter";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import useGlobalSeaIce from "@/hooks/useGlobalSeaIce";
import getYearRange from "@/utils/getYearRange";
import { useState } from "react";
import getFilteredData from "@/utils/getFilteredData";
import LegendDetails from "@/components/ui/LegendDetails/LegendDetails";
import PageFooter from "@/components/layout/PageFooter/PageFooter";

export default function GlobalSeaIce() {
  useDocumentTitle("Global Sea Ice | Global Warming Dashboard");
  const { data, isError, isPending, error } = useGlobalSeaIce();
  const [fromYear, setFromYear] = useState<number>(2020);
  const [toYear, setToYear] = useState<number>(2025);

  const yearRange = data ? getYearRange(data) : [];
  const filteredData = data ? getFilteredData(data, fromYear, toYear) : null;
  const startDate = yearRange.length > 0 ? yearRange[yearRange.length - 1] : "";
  const endDate = yearRange.length > 0 ? yearRange[0] : "";
  const unit = data?.unitLong || "million square kilometers";
  const basePeriod = "1991-2020";
  return (
    <main>
      <h1>Global Sea Ice Extent</h1>
      <section>
        <h2>Overview</h2>
        <p>
          This chart shows the <strong>global sea ice extent</strong> — the
          total area of the ocean with at least 15% sea ice cover, combining
          data from both the Arctic and Antarctic regions. The values represent{" "}
          <strong>anomalies relative to the {basePeriod} average</strong>, which
          serves as the reference period for assessing long-term changes in sea
          ice coverage.
        </p>
        <p>
          Sea ice extent is a key indicator of climate change, reflecting global
          temperature trends and oceanic heat exchange. A declining trend
          indicates warming oceans and shifts in polar climate dynamics.
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
        <LegendDetails category="gsi" />
      </section>
      <PageFooter>
        <p>
          <strong>Source: </strong>National Centers for Environmental
          Information (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.ncei.noaa.gov/access/monitoring/snow-and-ice-extent/sea-ice/G/0"
          >
            ncei.noaa.gov/access/monitoring/snow-and-ice-extent/sea-ice/G/0
          </a>
          )
        </p>
      </PageFooter>
    </main>
  );
}
