export default function setLocalStorageTheme(
  selectedTheme: "light" | "dark" | "system"
): void {
  if (!localStorage) return;
  if (selectedTheme === "system") {
    localStorage.removeItem("theme");
    return;
  }
  localStorage.setItem("theme", selectedTheme);
}
