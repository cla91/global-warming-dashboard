import Navigation from "@components/layout/Navigation/Navigation";
import ThemeSwitcher from "@components/ui/button/ThemeSwitcher/ThemeSwitcher";
import logo from "@assets/images/logo.png";
import { Link } from "react-router-dom";
import styles from "@components/layout/Header/Header.module.scss";
import HamburgerButton from "@components/ui/button/HamburgerButton/HamburgerButton";
import MinimizeMenu from "@components/ui/button/MinimizeMenu/MinimizeMenu";
import { useState } from "react";
import useSidebarContext from "@/context/Sidebar/useSidebarContext";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function Header() {
  const isDesktop = useMediaQuery("(min-width: 48rem)");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { minimize } = useSidebarContext();

  return (
    <header className={`${styles.header} ${minimize ? styles.minimized : ""}`}>
      <div className={`${styles.topBar} ${minimize ? styles.minimized : ""}`}>
        {/* logo */}
        <Link to="/" className={styles.logoLink}>
          <img className={styles.logoImg} src={logo} alt="Logo GlobalWarming" />
          <span className={`${minimize ? "sr-only" : ""} ${styles.logoText}`}>
            GlobalWarming
          </span>
        </Link>

        {/* controller mobile menu */}
        <HamburgerButton
          menuOpen={mobileMenuOpen}
          setMenuOpen={setMobileMenuOpen}
        />
        {/* controller desktop menu */}
        <MinimizeMenu />
      </div>

      {/* menu */}
      <div
        aria-hidden={!isDesktop && !mobileMenuOpen}
        inert={!isDesktop && !mobileMenuOpen}
        className={`${styles.menu} ${mobileMenuOpen ? styles.open : ""}`}
      >
        <Navigation
          onlyIcons={minimize}
          menuOpen={mobileMenuOpen}
          setMenuOpen={setMobileMenuOpen}
        />
        <ThemeSwitcher minimized={minimize} />
      </div>
    </header>
  );
}
