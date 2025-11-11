import PageFooter from "@/components/layout/PageFooter/PageFooter";
import BarChart from "@/components/ui/chart/BarChart/BarChart";
import DateFilter from "@/components/ui/DateFilter/DateFilter";
import LegendDetails from "@/components/ui/LegendDetails/LegendDetails";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import useMethane from "@/hooks/useMethane";
import getFilteredData from "@/utils/getFilteredData";
import getYearRange from "@/utils/getYearRange";
import { useState } from "react";

export default function Methane() {
  useDocumentTitle("Methane | Global Warming Dashboard");
  const { data, isError, isPending, error } = useMethane();
  const [fromYear, setFromYear] = useState<number>(2022);
  const [toYear, setToYear] = useState<number>(2025);

  const yearRange = data ? getYearRange(data) : [];
  const filteredData = data ? getFilteredData(data, fromYear, toYear) : null;
  const startDate = yearRange.length > 0 ? yearRange[yearRange.length - 1] : "";
  const endDate = yearRange.length > 0 ? yearRange[0] : "";
  const unit = data?.unitLong || "parts per billion (ppb)";
  return (
    <>
      <h1>Atmospheric Methane</h1>
      <section>
        <h2>Overview</h2>
        <p>
          This chart shows the{" "}
          <strong>global mean atmospheric methane (CH₄) concentration</strong>{" "}
          measured from surface air samples. The <strong>trend line</strong>{" "}
          removes short-term variability to highlight the long-term rise in
          methane levels — a potent greenhouse gas produced by natural sources
          and human activities such as agriculture, landfills, and fossil fuel
          extraction.
        </p>
        {startDate && endDate && (
          <p>
            The data spans from <strong>{startDate}</strong> to{" "}
            <strong>{endDate}</strong>.
          </p>
        )}
      </section>
      <section>
        <h2>Data Visualization - {unit}</h2>
        <DateFilter
          fromYear={fromYear}
          setFromYear={setFromYear}
          toYear={toYear}
          setToYear={setToYear}
          yearRange={yearRange}
        />
        {isError && <p>Error: {error.message}</p>}
        {isPending && <p>Loading...</p>}
        {filteredData && <BarChart data={filteredData} />}
        <LegendDetails category="ch4" />
      </section>
      <PageFooter>
        <p>
          <strong>Source:</strong> Global Monitoring Division of NOAA’s Earth
          System Research Laboratory Ed Dlugokencky, NOAA/GML (
          <a
            href="https://www.esrl.noaa.gov/gmd/ccgg/trends_ch4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            esrl.noaa.gov/gmd/ccgg/trends_ch4/
          </a>
          ).
        </p>
      </PageFooter>
    </>
  );
}
