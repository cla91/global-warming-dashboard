import Navigation from "@components/layout/Navigation/Navigation";
import ThemeSwitcher from "@components/ui/button/ThemeSwitcher/ThemeSwitcher";
import logo from "@assets/images/logo.png";
import { Link } from "react-router-dom";
import styles from "@components/layout/Header/Header.module.scss";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img
          className={styles.logo}
          src={logo}
          alt="A cartoon illustration of a melting Earth next to a thermometer showing high temperature, symbolizing global warming."
        />
        <span>Global Warming</span>
      </Link>
      <ThemeSwitcher />
      <Navigation />
    </header>
  );
}
