import DateFilter from "@components/ui/DateFilter/DateFilter";
import LineChart from "@components/ui/chart/LineChart/LineChart";
import useCarbonDioxide from "@/hooks/useCarbonDioxide";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import getYearRange from "@/utils/getYearRange";
import { useState } from "react";
import getFilteredData from "@/utils/getFilteredData";
import LegendDetails from "@/components/ui/LegendDetails/LegendDetails";
import PageFooter from "@/components/layout/PageFooter/PageFooter";

export default function CarbonDioxide() {
  useDocumentTitle("Carbon Dioxide | Global Warming Dashboard");
  const { data, isError, isPending, error } = useCarbonDioxide();
  const [fromYear, setFromYear] = useState<number>(2025);
  const [toYear, setToYear] = useState<number>(2025);

  const yearRange = data ? getYearRange(data) : [];
  const filteredData = data ? getFilteredData(data, fromYear, toYear) : null;

  const startDate = yearRange.length > 0 ? yearRange[yearRange.length - 1] : "";
  const endDate = yearRange.length > 0 ? yearRange[0] : "";
  const unit = data?.unitLong || "Parts per million (ppm)";

  return (
    <main>
      <h1>Atmospheric Carbon Dioxide</h1>
      <section>
        <h2>Overview</h2>
        <p>
          This chart shows the{" "}
          <strong>daily mean atmospheric CO₂ concentration</strong> measured at
          Mauna Loa Observatory, Hawaii. The
          <strong> trend line</strong> is seasonally adjusted to remove the
          regular annual cycle caused by natural processes such as plant growth
          and decay, revealing the long-term rise in CO₂ concentrations driven
          by human emissions.
        </p>
        {startDate && endDate && (
          <p>
            The data spans from <strong>{startDate}</strong> to{" "}
            <strong>{endDate}</strong>.
          </p>
        )}
      </section>
      <section className="chartSection">
        <h2>Data visualization - {unit}</h2>
        <DateFilter
          fromYear={fromYear}
          setFromYear={setFromYear}
          toYear={toYear}
          setToYear={setToYear}
          yearRange={yearRange}
        />
        {isError && <p>Error: {error.message}</p>}
        {isPending && <p>Loading...</p>}
        {filteredData && <LineChart data={filteredData} />}
        <LegendDetails category="co2" />
      </section>
      <PageFooter>
        <p>
          <strong>Source: </strong>Ed Dlugokencky and Pieter Tans, NOAA/GML (
          <a
            href="https://www.esrl.noaa.gov/gmd/ccgg/trends/"
            target="_blank"
            rel="noopener noreferrer"
          >
            esrl.noaa.gov/gmd/ccgg/trends/
          </a>
          )
        </p>
      </PageFooter>
    </main>
  );
}
