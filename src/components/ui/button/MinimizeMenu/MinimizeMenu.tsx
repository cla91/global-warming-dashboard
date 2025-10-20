import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import styles from "@components/ui/button/MinimizeMenu/MinimizeMenu.module.scss";

interface MinimizeMenuProps {
  minimizeMenu: boolean;
  setMinimizeMenu: (minimizeMenu: boolean) => void;
}
export default function MinimizeMenu({
  minimizeMenu,
  setMinimizeMenu,
}: MinimizeMenuProps) {
  return (
    <button
      onClick={() => setMinimizeMenu(!minimizeMenu)}
      className={styles.minimizeBtn}
    >
      {minimizeMenu ? (
        <>
          <span className="sr-only">"Expand Menu"</span>
          <PanelLeftOpen />
        </>
      ) : (
        <>
          <span className="sr-only">"Minimize Menu"</span>
          <PanelLeftClose />
        </>
      )}
    </button>
  );
}
