import { RgbColor } from "../../interfaces/models";

export function hexToDecimal(hex: string): number[] {
  // Hex always start with #
  const escapedHex = hex.slice(1);

  let hexColor: RegExpMatchArray | null;
  if (escapedHex.length > 3) {
    // 6-length rgb strings
    hexColor = escapedHex.match(/.{1,2}/g);
  } else {
    // 6-length rgb strings
    hexColor = escapedHex.match(/.{1}/g);
  }

  if (!hexColor) {
    throw new Error("Invalid Color");
  }

  return hexColor.map((value) => parseInt(value, 16));
}

export function hexToRgb(hex: string): RgbColor {
  const decimalHex = hexToDecimal(hex);

  return {
    red: decimalHex[0],
    green: decimalHex[1],
    blue: decimalHex[2],
    alpha: decimalHex[3] ?? 255,
  };
}
