import { NavLink } from "react-router-dom";
import { House, MountainSnow, ThermometerSun } from "lucide-react";
import TextIcon from "@components/ui/icon/TextIcon/TextIcon";
import styles from "@components/layout/Navigation/Navigation.module.scss";
import useMediaQuery from "@/hooks/useMediaQuery";

interface NavigationProps {
  onlyIcons: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}
export default function Navigation({
  onlyIcons,
  menuOpen,
  setMenuOpen,
}: NavigationProps) {
  const isDesktop = useMediaQuery("(min-width: 48rem)");
  function closeMenu() {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink
            onClick={closeMenu}
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <House />
            <span className={isDesktop && onlyIcons ? "sr-only" : ""}>
              Overview
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMenu}
            to="/temperature"
            className={({ isActive }) =>
              `${styles.temperature} ${isActive ? styles.active : ""}`
            }
          >
            <ThermometerSun />
            <span className={isDesktop && onlyIcons ? "sr-only" : ""}>
              Temperature
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMenu}
            to="/carbon-dioxide"
            className={({ isActive }) =>
              `${styles.carbonDioxide} ${isActive ? styles.active : ""}`
            }
          >
            <TextIcon text="CO₂" />
            <span className={isDesktop && onlyIcons ? "sr-only" : ""}>
              {" "}
              Carbon Dioxide
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMenu}
            to="/methane"
            className={({ isActive }) =>
              `${styles.methane} ${isActive ? styles.active : ""}`
            }
          >
            <TextIcon text="CH₄" />
            <span className={isDesktop && onlyIcons ? "sr-only" : ""}>
              Methane
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMenu}
            to="/nitrous-oxide"
            className={({ isActive }) =>
              `${styles.nitrousOxide} ${isActive ? styles.active : ""}`
            }
          >
            <TextIcon text="N₂O" />
            <span className={isDesktop && onlyIcons ? "sr-only" : ""}>
              Nitrous Oxide
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMenu}
            to="/global-sea-ice"
            className={({ isActive }) =>
              `${styles.globalSeaIce} ${isActive ? styles.active : ""}`
            }
          >
            <MountainSnow />
            <span className={isDesktop && onlyIcons ? "sr-only" : ""}>
              Global Sea Ice
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
