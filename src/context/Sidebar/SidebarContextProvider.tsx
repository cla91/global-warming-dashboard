import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { SidebarContext } from "@/context/Sidebar/useSidebarContext";

interface SidebarContextProviderProps {
  children: React.ReactNode;
}

export function SidebarContextProvider({
  children,
}: SidebarContextProviderProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 48rem)");
  const minimize = isDesktop && isMinimized;
  return (
    <SidebarContext.Provider value={{ minimize, setIsMinimized }}>
      {children}
    </SidebarContext.Provider>
  );
}
