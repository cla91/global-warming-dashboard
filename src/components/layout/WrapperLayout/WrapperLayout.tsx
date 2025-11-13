import Footer from "@components/layout/Footer/Footer";
import { Suspense } from "react";
import Header from "@components/layout/Header/Header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FallBackMain from "../FallBackMain/FallBackMain";

interface WrapperLayoutProps {
  children: React.ReactNode;
}

export default function WrapperLayout({ children }: WrapperLayoutProps) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Suspense fallback={<FallBackMain />}>{children}</Suspense>
      <Footer />
    </>
  );
}
