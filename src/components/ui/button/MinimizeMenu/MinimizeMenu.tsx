import { ChevronLeft } from "lucide-react";
import styles from "@components/ui/button/MinimizeMenu/MinimizeMenu.module.scss";

interface MinimizeMenuProps {
  minimize: boolean;
  setIsMinimized: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MinimizeMenu({
  minimize,
  setIsMinimized,
}: MinimizeMenuProps) {
  return (
    <button
      onClick={() => setIsMinimized((minimize) => !minimize)}
      className={`${styles.minimizeBtn} ${minimize ? styles.shifted : ""}`}
      title={minimize ? "Expand Menu" : "Minimize Menu"}
    >
      <span className="sr-only">
        {minimize ? "Expand Menu" : "Minimize Menu"}
      </span>

      <ChevronLeft className={`${minimize ? styles.rotate : ""}`} />
    </button>
  );
}
