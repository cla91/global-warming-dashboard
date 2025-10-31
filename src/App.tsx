import WrapperLayout from "@components/layout/WrapperLayout/WrapperLayout";
import { Outlet } from "react-router-dom";
import { SidebarContextProvider } from "./context/Sidebar/SidebarContextProvider";

export default function App() {
  return (
    <SidebarContextProvider>
      <WrapperLayout>
        <Outlet />
      </WrapperLayout>
    </SidebarContextProvider>
  );
}
