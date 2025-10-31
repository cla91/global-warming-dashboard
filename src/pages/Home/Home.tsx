import CategoryCard from "@components/ui/CategoryCard/CategoryCard";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import styles from "@pages/Home/Home.module.scss";
import useTemperature from "@/hooks/useTemperature";
import useCarbonDioxide from "@/hooks/useCarbonDioxide";
import useMethane from "@/hooks/useMethane";
import useNitrousOxide from "@/hooks/useNitrousOxide";
import usePolarIce from "@/hooks/usePolarIce";

export default function Home() {
  useDocumentTitle("Global Warming Dashboard");

  return (
    <div className={`${styles.home}`}>
      <h1>Overview</h1>
      <div className={styles.cardGrid}>
        <CategoryCard
          title={"Temperature"}
          className={"temp"}
          query={useTemperature}
        />
        <CategoryCard
          title={"Carbon Dioxide"}
          className={"co2"}
          query={useCarbonDioxide}
        />
        <CategoryCard title={"Methane"} className={"ch4"} query={useMethane} />
        <CategoryCard
          title={"Nitrous Oxide"}
          className={"n2o"}
          query={useNitrousOxide}
        />
        <CategoryCard
          title={"Polar Ice"}
          className={"pi"}
          query={usePolarIce}
        />
      </div>
    </div>
  );
}
