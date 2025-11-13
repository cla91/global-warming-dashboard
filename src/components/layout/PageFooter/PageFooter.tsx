import style from "@components/layout/PageFooter/PageFooter.module.scss";

interface PageFooterProps {
  children: React.ReactNode;
}

export default function PageFooter({ children }: PageFooterProps) {
  return (
    <footer className={style.pageFooter}>
      <h3>Data sources</h3>
      {children}
    </footer>
  );
}
