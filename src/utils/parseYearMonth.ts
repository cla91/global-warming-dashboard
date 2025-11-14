export default function parseYearMonth(date: string): Date {
  const [year, month] = date.split(".").map(Number);
  return new Date(year, month - 1, 1);
}
