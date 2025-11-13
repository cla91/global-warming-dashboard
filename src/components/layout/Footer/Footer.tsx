import styles from "@components/layout/Footer/Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        © {currentYear} <strong>Global Warming Dashboard</strong> - Design and
        development by <strong>Claudia Cantiani</strong>.
      </p>
      <p>
        Data provided by{" "}
        <a
          href="https://global-warming.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          global-warming.org
        </a>
        .
      </p>
    </footer>
  );
}
