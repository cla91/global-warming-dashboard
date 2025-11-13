import LoaderIcon from "@/components/ui/LoaderIcon/LoaderIcon";
import styles from "@components/layout/FallBackMain/FallBackMain.module.scss";
export default function FallBackMain() {
  return (
    <main className={styles.loaderContainer}>
      <LoaderIcon />
    </main>
  );
}
