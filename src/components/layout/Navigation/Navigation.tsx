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
            className={({ isActive }) =>
              `${isActive ? styles.active : ""} ${
                isDesktop && onlyIcons ? styles.onlyIcons : ""
              }`
            }
          >
            <span className={styles.icon}>
              <House />
            </span>

            <span className={styles.linkText}>Overview</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMenu}
            to="/temperature"
            className={({ isActive }) =>
              `${styles.temp} ${isActive ? styles.active : ""} ${
                isDesktop && onlyIcons ? styles.onlyIcons : ""
              }`
            }
          >
            <span className={styles.icon}>
              <ThermometerSun />
            </span>
            <span className={styles.linkText}>Temperature</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMenu}
            to="/carbon-dioxide"
            className={({ isActive }) =>
              `${styles.co2} ${isActive ? styles.active : ""} ${
                isDesktop && onlyIcons ? styles.onlyIcons : ""
              }`
            }
          >
            <span className={styles.icon}>
              <TextIcon text="CO₂" />
            </span>
            <span className={styles.linkText}>Carbon Dioxide</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMenu}
            to="/methane"
            className={({ isActive }) =>
              `${styles.ch4} ${isActive ? styles.active : ""} ${
                isDesktop && onlyIcons ? styles.onlyIcons : ""
              }`
            }
          >
            <span className={styles.icon}>
              <TextIcon text="CH₄" />
            </span>
            <span className={styles.linkText}>Methane</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMenu}
            to="/nitrous-oxide"
            className={({ isActive }) =>
              `${styles.n2o} ${isActive ? styles.active : ""} ${
                isDesktop && onlyIcons ? styles.onlyIcons : ""
              }`
            }
          >
            <span className={styles.icon}>
              <TextIcon text="N₂O" />
            </span>
            <span className={styles.linkText}>Nitrous Oxide</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMenu}
            to="/global-sea-ice"
            className={({ isActive }) =>
              `${styles.gsi} ${isActive ? styles.active : ""} ${
                isDesktop && onlyIcons ? styles.onlyIcons : ""
              }`
            }
          >
            <span className={styles.icon}>
              <MountainSnow />
            </span>
            <span className={styles.linkText}>Global Sea Ice</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
