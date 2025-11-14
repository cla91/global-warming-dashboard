import WrapperLayout from "@components/layout/WrapperLayout/WrapperLayout";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <WrapperLayout>
      <Outlet />
    </WrapperLayout>
  );
}
