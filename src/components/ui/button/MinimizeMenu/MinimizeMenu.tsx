import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import styles from "@components/ui/button/MinimizeMenu/MinimizeMenu.module.scss";

import useSidebarContext from "@/context/Sidebar/useSidebarContext";

export default function MinimizeMenu() {
  const { minimize, setIsMinimized } = useSidebarContext();

  return (
    <button
      onClick={() => setIsMinimized((minimize) => !minimize)}
      className={styles.minimizeBtn}
      title={minimize ? "Expand Menu" : "Minimize Menu"}
    >
      {minimize ? (
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
