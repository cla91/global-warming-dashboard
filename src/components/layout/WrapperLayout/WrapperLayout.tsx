import Header from "@components/layout/Header/Header";
import Footer from "@components/layout/Footer/Footer";

interface props {
  children: React.ReactNode;
}

export default function WrapperLayout({ children }: props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
