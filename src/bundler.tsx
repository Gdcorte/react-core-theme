import { lightColors } from './light'

import { darkColors } from './dark'

import type {
    InputTheme,
    ThemeAlertColors,
    ThemeColors,
    ThemeTypes,
} from './interfaces'
import { ThemeHelper } from './helpers'

import { OutputTheme } from './interfaces'

const BaseTypes: ThemeTypes = {
    light: '#fefefe',
    dark: '#2a2a2a',
}

const BaseAlerts: ThemeAlertColors = {
    info: '#70bbfd',
    success: '#4ce1b6',
    warning: '#f6da6e',
    danger: '#ff4861',
}

export const TestTheme: InputTheme = {
    ...BaseTypes,
    ...BaseAlerts,
    primary: '#B4F8C8',
    secondary: '#b4f8ea',
    color: 'green',
    type: 'dark'
}

export { ThemeHelper, ColorHelper, FontHelper} from './helpers'

interface ThemeBundle {
    presets: {
        [key: string]: string,
    },
    themes: {
        [key: string]: OutputTheme,
    },
}

function bundleThemeType(colorTypes: {[key: string]: ThemeColors}, type: string): ThemeBundle{
    let themeManager = new ThemeHelper()
    let themeBundle:ThemeBundle = {
        presets: {},
        themes: {},
    }

    let darkPrimaries: any = {}
    Object.values(colorTypes).map((themeColor)=>{
        let inputTheme: InputTheme = {
            ...BaseTypes,
            ...BaseAlerts,
            ...themeColor,
            type,
        }

        let theme = themeManager.buildTheme(inputTheme)

        themeBundle.themes[theme.color] = theme
        darkPrimaries[theme.color] = themeColor.primary
    })
    themeBundle.presets = darkPrimaries

    return themeBundle
}

interface BundledTheme {
    [key: string]: ThemeBundle,
    light: ThemeBundle,
    dark: ThemeBundle
}

export function bundleThemes(): BundledTheme{
    let themes = {
        light: bundleThemeType(lightColors, 'light'),
        dark: bundleThemeType(darkColors, 'dark'),
    }

    return themes
}