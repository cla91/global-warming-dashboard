import CategoryCard from "@components/ui/CategoryCard/CategoryCard";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import styles from "@pages/Home/Home.module.scss";
import useTemperature from "@/hooks/useTemperature";
import useCarbonDioxide from "@/hooks/useCarbonDioxide";
import useGlobalSeaIce from "@/hooks/useGlobalSeaIce";

import useMethane from "@/hooks/useMethane";
import useNitrousOxide from "@/hooks/useNitrousOxide";

import { Link } from "react-router-dom";

export default function Home() {
  useDocumentTitle("Global Warming Dashboard");

  return (
    <main>
      <h1>Overview</h1>
      <p>
        This dashboard provides key indicators of global climate change. Each
        card shows the latest measurement and recent trends for a major climate
        variable — including temperature, greenhouse gases, and sea ice extent.
      </p>
      <div className={styles.cardGrid}>
        <Link to="/temperature" className={styles.cardLink}>
          <CategoryCard
            title={"Temperature"}
            sparktype="line"
            query={useTemperature}
          />
        </Link>
        <Link to="/carbon-dioxide" className={styles.cardLink}>
          <CategoryCard
            title={"Carbon Dioxide"}
            sparktype="line"
            query={useCarbonDioxide}
          />
        </Link>
        <Link to="/methane" className={styles.cardLink}>
          <CategoryCard title={"Methane"} sparktype="bar" query={useMethane} />
        </Link>
        <Link to="/nitrous-oxide" className={styles.cardLink}>
          <CategoryCard
            title={"Nitrous Oxide"}
            sparktype="bar"
            query={useNitrousOxide}
          />
        </Link>
        <Link to="/global-sea-ice" className={styles.cardLink}>
          <CategoryCard
            title={"Global Sea Ice"}
            sparktype="line"
            query={useGlobalSeaIce}
          />
        </Link>
      </div>
    </main>
  );
}
