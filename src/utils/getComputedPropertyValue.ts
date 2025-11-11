export default function getComputedProperyValue(
  generalProperty: string,
  detailProperty?: string
): string {
  const fullProperty = detailProperty
    ? `--${detailProperty}-${generalProperty}`
    : `--${generalProperty}`;

  return getComputedStyle(document.documentElement)
    .getPropertyValue(fullProperty)
    .trim();
}
