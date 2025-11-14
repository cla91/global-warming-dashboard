import PageFooter from "@/components/layout/PageFooter/PageFooter";
import BarChart from "@/components/ui/chart/BarChart/BarChart";
import DateFilter from "@/components/ui/DateFilter/DateFilter";
import LegendDetails from "@/components/ui/LegendDetails/LegendDetails";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import useNitrousOxide from "@/hooks/useNitrousOxide";
import getFilteredData from "@/utils/getFilteredData";
import getYearRange from "@/utils/getYearRange";
import { useState } from "react";

export default function NitrousOxide() {
  useDocumentTitle("Nitrous Oxide | Global Warming Dashboard");
  const { data, isError, isPending, error } = useNitrousOxide();
  const [fromYear, setFromYear] = useState<number>(2022);
  const [toYear, setToYear] = useState<number>(2025);

  const yearRange = data ? getYearRange(data) : [];

  const filteredData = data ? getFilteredData(data, fromYear, toYear) : null;
  const startDate = yearRange.length > 0 ? yearRange[yearRange.length - 1] : "";
  const endDate = yearRange.length > 0 ? yearRange[0] : "";
  const unit = data?.unitLong || "parts per billion (ppb)";
  return (
    <main>
      <h1>Atmospheric Nitrous Oxide</h1>
      <section>
        <h2>Overview</h2>
        <p>
          This chart shows the{" "}
          <strong>
            global mean atmospheric nitrous oxide (N₂O) concentration
          </strong>
          . Nitrous oxide is a long-lived greenhouse gas primarily emitted from
          agricultural activities and industrial processes. The{" "}
          <strong>trend line</strong> highlights its steady increase in the
          atmosphere since the pre-industrial era.
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
        {filteredData && <BarChart data={filteredData} />}
        <LegendDetails category="n2o" />
      </section>
      <PageFooter>
        <p>
          <strong>Source: </strong> Ed Dlugokencky, NOAA/GML (
          <a
            href="https://www.esrl.noaa.gov/gmd/ccgg/trends_n2o/"
            target="_blank"
            rel="noopener noreferrer"
          >
            esrl.noaa.gov/gmd/ccgg/trends_n2o/
          </a>
          )
        </p>
      </PageFooter>
    </main>
  );
}
