"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { isColorVariant, isThemeVariant } from "../../guard";
import {
  ColorCombinationTypes,
  ColorCombinationVariants,
  ColorVariants,
  ThemeVariants,
} from "../../interfaces";
import { createThemeWithDefaultPresets } from "../../utils";

type ThemeCtxType = {
  onThemeChange: (theme: ThemeVariants) => void;
  onColorChange: (color: ColorVariants) => void;
};

const ThemeCtx = createContext<ThemeCtxType>({
  onThemeChange: () => {},
  onColorChange: () => {},
});

type Props = {
  children: ReactNode;
  forceTheme?: ThemeVariants;
  forceColor?: ColorVariants;
  defaultColor?: ColorVariants;
  combination?: ColorCombinationVariants;
};

export default function ThemedPage<T extends ColorCombinationTypes>({
  children,
  forceColor = undefined,
  forceTheme = undefined,
  defaultColor = "green",
  combination = "tetradic",
}: Props) {
  const [loading, setLoading] = useState(true);

  const [renderedTheme, setRenderedTheme] = useState<
    DefaultTheme | undefined
  >();

  function reRenderTheme(theme: ThemeVariants, color: ColorVariants) {
    const renderResult = createThemeWithDefaultPresets<T>({
      name: color,
      theme,
      combination,
    }) as DefaultTheme;

    setRenderedTheme(renderResult);
  }

  function onThemeChange(theme: ThemeVariants) {
    if (renderedTheme === undefined) return;
    window.localStorage.setItem("theme", theme);

    reRenderTheme(theme, renderedTheme.presets.color as ColorVariants);
  }

  function onColorChange(color: ColorVariants) {
    if (renderedTheme === undefined) return;
    window.localStorage.setItem("color", color);

    reRenderTheme(renderedTheme.presets.theme as ThemeVariants, color);
  }

  // Specify theme on first load base don user's browser preferences.
  useEffect(() => {
    let themePreset = window.localStorage.getItem("theme") ?? "";
    if (!isThemeVariant(themePreset)) {
      const isDark = window?.matchMedia("(prefers-color-scheme: dark)").matches;
      themePreset = isDark ? "dark" : "light";
    }
    if (forceTheme !== undefined) {
      window.localStorage.setItem("theme", forceTheme);
      themePreset = forceTheme;
    }

    let colorPreset = window.localStorage.getItem("color") ?? "";
    if (!isColorVariant(colorPreset)) {
      colorPreset = defaultColor;
    }
    if (forceColor !== undefined) {
      colorPreset = forceColor;
      window.localStorage.setItem("color", forceColor);
    }

    reRenderTheme(themePreset as ThemeVariants, colorPreset as ColorVariants);
  }, [forceColor, forceTheme, defaultColor]);

  // After the new theme is rendered, show screen
  useEffect(() => {
    if (renderedTheme === undefined) {
      setLoading(true);
      return;
    }

    setLoading(false);
  }, [renderedTheme]);

  if (loading || renderedTheme === undefined) return <></>;

  return (
    <ThemeCtx.Provider
      value={{
        onColorChange,
        onThemeChange,
      }}
    >
      <ThemeProvider theme={renderedTheme}>{children}</ThemeProvider>
    </ThemeCtx.Provider>
  );
}

export function useThemeCtx() {
  return useContext(ThemeCtx);
}
