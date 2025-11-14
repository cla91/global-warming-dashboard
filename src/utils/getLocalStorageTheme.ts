export default function getLocalStorageTheme(): "light" | "dark" | "system" {
  if (!localStorage) return "system";
  const theme = localStorage.getItem("theme");
  if (theme === "light" || theme === "dark") return theme;
  return "system";
}
