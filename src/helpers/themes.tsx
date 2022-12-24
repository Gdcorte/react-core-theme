import { ActionablePresets, defaultAlerts, defaultColors, defaultTypes, InputTheme, isAlertType, isColorType, isThemeType, OutputColorPresets, OutputTheme, ShadePresets } from "../interfaces"
import { ColorHelper } from "./colors"
import { FontHelper } from "./fonts"

export class ThemeHelper {

    getTheme(){

    }

    buildTheme(inputTheme: InputTheme): OutputTheme{
        let baseBackground = FontHelper.findBestContrast(inputTheme.primary, [inputTheme.light, inputTheme.dark])
        let background = this.buildShades(baseBackground)

        let result: Partial<OutputTheme> = {
            background: {
                base: baseBackground,
                ...background,
            },
            fonts: {
                light: inputTheme.light,
                dark: inputTheme.dark,
            },
            type: inputTheme.type,
            color: inputTheme.color,
            name: `${capitalizeWord(inputTheme.type)} ${capitalizeWord(inputTheme.color)}`,
        }
        
        Object.entries(inputTheme).map(([key, base]:[string, string]) =>{
            if (['light', 'dark'].includes(key)){
                return
            }
            let shades: ShadePresets = this.buildShades(base)
            let actionables: ActionablePresets = this.buildActionables(base)
            
            if (isThemeType(key)){
                result[key]= {
                    base,
                    ...shades,
                }
                return
            }

            if (isAlertType(key)){
                result[key]= {
                    base,
                    ...actionables,
                }
                return
            }

            if (isColorType(key)){
                let expandedColorPreset: OutputColorPresets = {
                    base,
                    ...shades,
                    ...actionables,
                }
                result[key]= expandedColorPreset;
                return
            }
        })

        return result as OutputTheme
    }

    buildShades(base: string): ShadePresets{
        let shadedColor: ShadePresets = {
            shade1: '#ffffff',
            shade2: '#ffffff',
            shade3: '#ffffff',
            shade4: '#ffffff',
            shade5: '#ffffff',
        }

        for (let index=1; index<=5; index++){
            let shadeKey = `shade${index}` as keyof ShadePresets
            shadedColor[shadeKey] = ColorHelper.autoMix(base, index/10)
        }

        return shadedColor

    }

    buildActionables(base: string): ActionablePresets{
        let actionableColor: Partial<ActionablePresets> = {
            disabled: `${base}40`,
        } 
        let actionableWeights = {
            hover: .2,
            focus: .4,
            selected: .6,
        }

        Object.entries(actionableWeights).map(([action, weight]:[string, number])=>{
            actionableColor[action] = ColorHelper.autoMix(base, weight)
        })
        

        return actionableColor as ActionablePresets
    }
}

function capitalizeWord(word: string){
    return word.charAt(0).toUpperCase() + word.slice(1)
}