import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

interface SidebarContextValue {
  minimize: boolean;
  setIsMinimized: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContextValue | null>(null);

export default function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error(
      "useSidebarContext must be used whitin a SidebarContextProvider"
    );
  }
  return context;
}
