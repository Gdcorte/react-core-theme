import { ColorHelper } from "./colors"

export class FontHelper {
    static getLuminance(rawColor: string): number{
        // Source: https://www.w3.org/TR/WCAG20/#audiodescdef
        let colorDecimal = ColorHelper.hexToDecimal(rawColor)
        const rgbColor = ColorHelper.rgbColor(colorDecimal)

        // Normalize
        Object.keys(rgbColor).map((value:string) =>{
            let intermediateColor = rgbColor[value]/255
            rgbColor[value] = (intermediateColor <= 0.03928) ? intermediateColor/12.92 : Math.pow(((intermediateColor+0.055)/1.055), 2.4)
        })

        return  0.2126 * rgbColor.red + 0.7152 * rgbColor.green + 0.0722 * rgbColor.blue
        
    }

    static contrastChecker(luminance1:number, luminance2: number): number{
        return (Math.max(luminance1,  luminance2) + 0.05) / (Math.min(luminance1,  luminance2) + 0.05)
    }

    static findBestContrast(originalColor: string, fonts: string[]): string {
        let originalLuminance = this.getLuminance(originalColor)
        let contrasts = fonts.map( (fontColor) => {
            let luminance = this.getLuminance(fontColor)
            let constrastValue = this.contrastChecker(luminance, originalLuminance)
            
            return constrastValue
        })

        let maxContrast = Math.max(...contrasts)
        let bestContrastIndex = contrasts.indexOf(maxContrast)
        return fonts[bestContrastIndex]
    }
}