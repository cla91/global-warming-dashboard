import styles from "@components/ui/icon/TextIcon/TextIcon.module.scss";

interface TextIconProps {
  text: string;
}

export default function TextIcon({ text }: TextIconProps) {
  return <span className={styles.textIcon}>{text}</span>;
}
