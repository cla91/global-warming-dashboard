import Navigation from "@components/layout/Navigation/Navigation";
import ThemeSwitcher from "@components/ui/button/ThemeSwitcher/ThemeSwitcher";
import logo from "@assets/images/logo.png";
import { Link } from "react-router-dom";
import styles from "@components/layout/Header/Header.module.scss";
import HamburgerButton from "@components/ui/button/HamburgerButton/HamburgerButton";
import MinimizeMenu from "@components/ui/button/MinimizeMenu/MinimizeMenu";
import { useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Header() {
  const [desktopMenuMinimized, setDesktopMenuMinimized] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 48rem)");

  return (
    <header className={styles.header}>
      <div
        className={`${styles.topBar} ${
          desktopMenuMinimized ? styles.minimized : ""
        }`}
      >
        {/* logo */}
        <Link to="/" className={styles.logoLink}>
          <img className={styles.logoImg} src={logo} alt="Logo GlobalWarming" />
          <span
            className={`${isDesktop && desktopMenuMinimized ? "sr-only" : ""} ${
              styles.logoText
            }`}
          >
            GlobalWarming
          </span>
        </Link>

        {/* controller mobile menu */}
        <HamburgerButton
          menuOpen={mobileMenuOpen}
          setMenuOpen={setMobileMenuOpen}
        />
        {/* controller desktop menu */}
        <MinimizeMenu
          minimizeMenu={desktopMenuMinimized}
          setMinimizeMenu={setDesktopMenuMinimized}
        />
      </div>

      {/* menu */}
      <div
        aria-hidden={!isDesktop && !mobileMenuOpen}
        inert={!isDesktop && !mobileMenuOpen}
        className={`${styles.menu} ${mobileMenuOpen ? styles.open : ""}`}
      >
        <Navigation
          onlyIcons={desktopMenuMinimized}
          menuOpen={mobileMenuOpen}
          setMenuOpen={setMobileMenuOpen}
        />
        <ThemeSwitcher minimized={desktopMenuMinimized} />
      </div>
    </header>
  );
}
