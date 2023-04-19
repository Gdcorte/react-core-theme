import { ThemeProvider } from "styled-components";

import { FunctionComponent, ReactNode, useMemo } from "react";
import { isBasicThemeType } from "../../interfaces";
import { bundleBaseThemes } from "../../utils/bundler";

interface ThemeManagerProps {
  children: ReactNode;
  colorName: string;
  typeName: string;
}

const BaseThemesManager: FunctionComponent<ThemeManagerProps> = ({
  children,
  colorName,
  typeName,
}) => {
  const themes = useMemo(() => {
    return bundleBaseThemes();
  }, []);

  // Default fallback in case of invalid combination of type/color
  const type = isBasicThemeType(typeName) ? typeName : "dark";
  const color = themes[type].colors[colorName] ? colorName : "Green";

  return (
    <ThemeProvider
      theme={{
        presets: themes[type].presets,
        fonts: themes[type].fonts,
        fontSystem: themes[type].fontSystem,
        background: themes[type].background,
        alerts: themes[type].alerts,
        colors: themes[type].colors[color],
        typeName: type,
        colorName: color,
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default BaseThemesManager;
