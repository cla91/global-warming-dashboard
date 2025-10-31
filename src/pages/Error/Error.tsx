import WrapperLayout from "@components/layout/WrapperLayout/WrapperLayout";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function Error() {
  useDocumentTitle("Error 404 | Global Warming Dashboard");
  return (
    <WrapperLayout>
      <div>
        <h1>Error 404</h1>
        <p>Page not found</p>
      </div>
    </WrapperLayout>
  );
}
