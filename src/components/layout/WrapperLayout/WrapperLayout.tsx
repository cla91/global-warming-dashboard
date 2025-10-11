import Navigation from "@components/layout/Navigation/Navigation";

interface props {
  children: React.ReactNode;
}

export default function WrapperLayout({ children }: props) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      {children}
      <footer>Footer</footer>
    </>
  );
}
