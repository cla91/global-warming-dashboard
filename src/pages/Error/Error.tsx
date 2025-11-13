import WrapperLayout from "@components/layout/WrapperLayout/WrapperLayout";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  useDocumentTitle("Error | Global Warming Dashboard");
  if (isRouteErrorResponse(error)) {
    return (
      <WrapperLayout>
        <main>
          <h1>
            Error {error.status}: {error.statusText}
          </h1>
          <p>{error.data}</p>
        </main>
      </WrapperLayout>
    );
  } else {
    return (
      <WrapperLayout>
        <main>
          <h1>Unexpected Error</h1>
          <p>Sorry, an unexpected error has occurred.</p>
        </main>
      </WrapperLayout>
    );
  }
}
