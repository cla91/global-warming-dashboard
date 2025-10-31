import Header from "@components/layout/Header/Header";
import Footer from "@components/layout/Footer/Footer";
import useSidebarContext from "@/context/Sidebar/useSidebarContext";

interface WrapperLayoutProps {
  children: React.ReactNode;
}

export default function WrapperLayout({ children }: WrapperLayoutProps) {
  const { minimize } = useSidebarContext();
  return (
    <>
      <Header />
      <main className={minimize ? "minimize" : ""}>{children}</main>
      <Footer />
    </>
  );
}
