import style from "@components/layout/PageFooter/PageFooter.module.scss";

interface PageFooterProps {
  children: React.ReactNode;
}

export default function PageFooter({ children }: PageFooterProps) {
  return (
    <footer className={style.pageFooter}>
      <h2>Data sources</h2>
      {children}
    </footer>
  );
}
