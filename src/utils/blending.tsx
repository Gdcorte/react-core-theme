import { luminanceIndex } from "./analysis";
import { decimalToHex, hexToDecimal, hexToRgb } from "./conversion";
import { hslToRgb } from "./conversion/hsl";
import { rgbToHex, rgbToHsl } from "./conversion/rgb";

function validatePercentage(value: number): number {
  // Just assume the user is passing percentage as in 0-100
  if (value > 1) return value / 100;

  if (value < 0) return 0;

  return value;
}

/**
 * Elevates a color while normalizing with 255 cap.
 * This might potentially change the color...
 * ref: https://pathowe.co.uk/creating-colour-tints-and-shades-for-websites/
 * @param hex
 * @param percentage
 */
export function upshift(hex: string, percentage: number = 0.1): string {
  const normPercent = validatePercentage(percentage);
  const rgb = hexToDecimal(hex);
  const alpha = rgb[3] ?? 255;

  const upshifted = rgb.map((value) => {
    const total = value * (1 + normPercent);

    if (total > 255) {
      return 255;
    }

    return Math.round(total);
  });

  upshifted[3] = alpha; //restore alpha here.
  return decimalToHex(upshifted);
}

/**
 * Blends a color with white, thus making it lighter
 * @param hex
 * @param percentage
 */
export function tint(hex: string, percentage: number = 0.3): string {
  const normPercent = validatePercentage(percentage);
  const rgb = hexToDecimal(hex);
  const alpha = rgb[3] ?? 255;

  const tinted = rgb.map((value) => {
    const whiteness = 255 - value;
    const total = value + normPercent * whiteness;

    return Math.round(total);
  });

  tinted[3] = alpha; //restore alpha here.
  return decimalToHex(tinted);
}

/**
 *  Blends a color with black, thus making it darker
 * @param hex
 * @param percentage
 */
export function shade(hex: string, percentage: number = 0.1): string {
  const normPercent = validatePercentage(percentage);
  const rgb = hexToDecimal(hex);
  const alpha = rgb[3] ?? 255;
  const shaded = rgb.map((value) => {
    const total = value * (1 - normPercent);

    return Math.round(total);
  });

  shaded[3] = alpha; //restore alpha here.

  return decimalToHex(shaded);
}

/**
 * Apply a tone to a color.
 * The tone consists in successivelly applying shades and tints to emulate a gray mixing
 * @param color
 * @param percentage
 */
export function tone(color: string, percentage: number = 0.1): string {
  return tint(shade(color, percentage), 2 * percentage);
}

/**
 * Generate a contrasted color based on the current color luminance.
 * This involves transformation to the HSL space
 * @param color
 */
export function contrast(color: string): string {
  const rgb = hexToRgb(color);
  const hsl = rgbToHsl(rgb);
  const contrastHsl = { ...hsl };

  // Define new lightness
  if (hsl.lightness > 0.6) {
    contrastHsl.lightness /= 5;
  }
  if (hsl.lightness < 0.4) {
    contrastHsl.lightness *= 5;
  }
  if (hsl.saturation >= 0.4 && hsl.saturation <= 0.6) {
    contrastHsl.saturation /= 3;
  }

  console.info("YIIHAAA", hsl, contrastHsl);
  const contrastRgb = hslToRgb(contrastHsl);
  return rgbToHex(contrastRgb);
}

/**
 * Automatically tints or shades colors based on their luminance index,
 * as defined by the w3c
 * @param hex
 * @param percentage
 */
export function mix(hex: string, percentage: number = 0.1): string {
  const luma = luminanceIndex(hex);

  if (luma >= 0.5) {
    return shade(hex, percentage);
  }

  return tint(hex, percentage);
}
