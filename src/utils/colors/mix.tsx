import { brightnessIndex } from "./brightness";
import { decimalToHex, hexToDecimal } from "./raw";

export function mix(
  originalColor: string,
  baseColor: string,
  weight: number
): string {
  let originalColorDecimal = hexToDecimal(originalColor);
  let baseColorDecimal = hexToDecimal(baseColor);

  let newColor = originalColorDecimal.map((value, index) => {
    // We want to keep alpha untouched here
    if (index >= 3) {
      return value;
    }

    return Math.round(value * (1 - weight) + baseColorDecimal[index] * weight);
  });

  return decimalToHex(newColor);
}

// Makes it lighter
export function tint(originalColor: string, weight: number): string {
  return mix(originalColor, "#ffffff", weight);
}

// Makes it darker
export function shade(originalColor: string, weight: number): string {
  return mix(originalColor, "#000000", weight);
}

export function autoMix(
  color: string,
  weight: number,
  reverse?: boolean
): string {
  if (reverse) {
    return reverseMixing(color, weight);
  }

  return directMixing(color, weight);
}

// Make bright colors darker and lighter colors darker
function directMixing(color: string, weight: number) {
  const brightness = brightnessIndex(color);
  if (brightness >= 0.5) {
    return shade(color, weight);
  }

  return tint(color, weight);
}

// Make bright colors brighter and dark colors darker
function reverseMixing(color: string, weight: number) {
  const brightness = brightnessIndex(color);

  if (brightness >= 0.5) {
    return tint(color, weight);
  }

  return shade(color, weight);
}
