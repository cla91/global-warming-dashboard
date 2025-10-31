export default function convertDecimalYearToDate(decimalYear: string): Date {
  const year = Math.floor(Number(decimalYear));
  const fraction = Number(decimalYear) - year;
  const daysInYear = 365 + (isLeapYear(year) ? 1 : 0);
  return new Date(Date.UTC(year, 0, fraction * daysInYear));
}

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
