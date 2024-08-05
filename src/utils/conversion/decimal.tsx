export function decimalToHex(decimal: number[]): string {
  const parsedHex = decimal.map((value) => value.toString(16).padStart(2, "0"));

  return `#${parsedHex.join("")}`;
}
