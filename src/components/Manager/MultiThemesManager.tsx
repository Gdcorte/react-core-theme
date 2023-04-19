import { ThemeProvider } from "styled-components";

import { FunctionComponent, ReactNode } from "react";
import { BundledTheme } from "../../interfaces";

interface ThemeManagerProps {
  children: ReactNode;
  themes: BundledTheme;
  type: string;
  color: string;
}

const MultiThemesManager: FunctionComponent<ThemeManagerProps> = ({
  children,
  themes,
  type,
  color,
}) => {
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

export default MultiThemesManager;
