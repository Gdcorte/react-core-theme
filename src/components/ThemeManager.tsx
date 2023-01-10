import { ThemeProvider } from "styled-components";

import { FunctionComponent, useMemo } from "react";
import { bundleBaseThemes } from "../utils/bundler";

interface ThemeManagerProps {
  children: JSX.Element;
  colorName: string;
  typeName: string;
}

const ThemeManager: FunctionComponent<ThemeManagerProps> = ({
  children,
  colorName,
  typeName,
}) => {
  const themes = useMemo(() => {
    return bundleBaseThemes();
  }, []);

  // Default fallback in case of invalid combination of type/color
  const type = themes[typeName] ? typeName : "dark";
  const color = themes[type].colors[colorName] ? colorName : "Green";

  return (
    <ThemeProvider
      theme={{
        presets: themes[type].presets,
        fonts: themes[type].fonts,
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

export default ThemeManager;
