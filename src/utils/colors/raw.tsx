import { RgbColor } from "../../interfaces";

export function hexToRgbColor(color: string): RgbColor {
  const decimalColor = hexToDecimal(color);

  return decimalToRgbColor(decimalColor);
}

export function decimalToRgbColor(color: number[]): RgbColor {
  return {
    red: color[0],
    green: color[1],
    blue: color[2],
  };
}

export function hexToDecimal(hexColorString: string): number[] {
  let hexColor = hexColorString.slice(1).match(/.{1,2}/g);

  if (!hexColor) {
    throw new Error("Invalid Color");
  }

  return hexColor.map((value) => parseInt(value, 16));
}

function numberToHexString(number: number): string {
  return number.toString(16).padStart(2, "0");
}

export function decimalToHex(color: number[]): string {
  let hexColor: string = color
    .map((value) => numberToHexString(value))
    .join("");

  return `#${hexColor}`;
}

export function rgbToHex(color: RgbColor): string {
  let hexColor: string[] = [
    numberToHexString(color.red),
    numberToHexString(color.green),
    numberToHexString(color.blue),
  ];

  if (color["alpha"]) {
    hexColor.push(numberToHexString(color["alpha"]));
  }

  return `#${hexColor.join("")}`;
}
