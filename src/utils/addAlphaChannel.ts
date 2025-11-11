export default function addAlphaChannel(rgb: string, alpha: number): string {
  return rgb.replace("rgb", "rgba").replace(")", `, ${alpha})`);
}
