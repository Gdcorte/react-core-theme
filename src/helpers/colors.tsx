import { RgbColor } from "../interfaces";

export class ColorHelper {

    static hexToDecimal(hexColorString: string): number[]{
        let hexColor = hexColorString.slice(1).match(/.{1,2}/g);
        
        if (!hexColor){
            throw new Error('Invalid Color')
        }

        return hexColor.map( (value) => parseInt(value, 16) )
    }

    static decimalToHex(decimalColor: number[]): string{
        let hexColor: string = decimalColor.map( (value) => value.toString(16) ).join('')
        
        return `#${hexColor}`
    }

    static mix(originalColor: string, baseColor: string, weight: number): string{
        let originalColorDecimal = this.hexToDecimal(originalColor)
        let baseColorDecimal = this.hexToDecimal(baseColor)

        let newColor = originalColorDecimal.map( (value, index) => {
            // We want to keep alpha untouched here
            if (index >=3){
                return value
            }

            return Math.round( value*(1-weight) + baseColorDecimal[index]*weight )
        })

        return this.decimalToHex(newColor)
    }

    static tint(originalColor: string, weight: number): string{  
       return this.mix(originalColor, '#ffffff', weight)
    }

    static shade(originalColor: string, weight: number): string{
       return this.mix(originalColor, '#000000', weight)
    }

    static brightnessCalc(rawColor: number[]): number{
        const rgbColor = this.rgbColor(rawColor)
        
        // Source: https://www.w3.org/TR/AERT/#color-contrast
        return ((rgbColor.red * .299) + (rgbColor.green*.587) + (rgbColor.blue * .114)) / 255
    }

    static rgbColor(rawColor: number[]):RgbColor {
        return {
            red: rawColor[0],
            green: rawColor[1],
            blue: rawColor[2],
        }
    }

    static autoMix(originalColor: string, weight: number): string{
        let originalColorDecimal = this.hexToDecimal(originalColor)
        const brightness = this.brightnessCalc(originalColorDecimal)

        if (brightness>=.5){
            return this.shade(originalColor, weight)
        }

        return this.tint(originalColor, weight)
    }
    
    static autoMixReverse(originalColor: string, weight: number): string{
        let originalColorDecimal = this.hexToDecimal(originalColor)
        const brightness = this.brightnessCalc(originalColorDecimal)

        if (brightness<.5){
            return this.shade(originalColor, weight)
        }

        return this.tint(originalColor, weight)
    }
}