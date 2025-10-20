import styles from "@components/ui/button/HamburgerButton/HamburgerButton.module.scss";

interface HamburgerButtonProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}
export default function HamburgerButton({
  menuOpen,
  setMenuOpen,
}: HamburgerButtonProps) {
  return (
    <button
      type="button"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
      className={`${styles.button} ${menuOpen ? styles.open : ""}`}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
