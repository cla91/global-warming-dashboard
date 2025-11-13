import Navigation from "@components/layout/Navigation/Navigation";
import ThemeSwitcher from "@components/ui/button/ThemeSwitcher/ThemeSwitcher";
import logo from "@assets/images/logo.png";
import { Link } from "react-router-dom";
import styles from "@components/layout/Header/Header.module.scss";
import HamburgerButton from "@components/ui/button/HamburgerButton/HamburgerButton";
import MinimizeMenu from "@components/ui/button/MinimizeMenu/MinimizeMenu";
import { useEffect, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

export default function HeaderProva() {
  const isDesktop = useMediaQuery("(min-width: 48rem)");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [minimizeMenu, setMinimizeMenu] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`${styles.header} ${minimizeMenu ? styles.minimized : ""}`}
    >
      <div
        className={`${styles.topBar} ${minimizeMenu ? styles.minimized : ""}`}
      >
        {/* logo */}
        <Link
          to="/"
          className={`${styles.logoLink} ${
            minimizeMenu ? styles.onlyIcons : ""
          } `}
        >
          <img className={styles.logoImg} src={logo} alt="Logo GlobalWarming" />
          <span className={`${styles.logoText}`}>GlobalWarming</span>
        </Link>

        {/* controller mobile menu */}
        <HamburgerButton
          menuOpen={mobileMenuOpen}
          setMenuOpen={setMobileMenuOpen}
        />
        {/* controller desktop menu */}
        <MinimizeMenu
          minimize={minimizeMenu}
          setIsMinimized={setMinimizeMenu}
        />
      </div>

      {/* menu */}
      <div
        aria-hidden={!isDesktop && !mobileMenuOpen}
        inert={!isDesktop && !mobileMenuOpen}
        className={`${styles.menu} ${mobileMenuOpen ? styles.open : ""}`}
      >
        <Navigation
          onlyIcons={minimizeMenu}
          menuOpen={mobileMenuOpen}
          setMenuOpen={setMobileMenuOpen}
        />
        <ThemeSwitcher minimized={minimizeMenu} />
      </div>
    </header>
  );
}
