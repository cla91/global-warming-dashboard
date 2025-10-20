import { useEffect, useState } from "react";

export default function useMediaQuery(query: string): boolean {
  /* lazy initialization */
  const [isDesktop, setIsDesktop] = useState<boolean>(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    setIsDesktop(mediaQuery.matches);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return isDesktop;
}
