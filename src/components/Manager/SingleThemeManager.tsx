import { ThemeProvider } from "styled-components";

import { FunctionComponent, ReactNode } from "react";
import { AlertColors, ColorSystem, FontSystem } from "../../interfaces";
import { bundleThemeType } from "../../utils/bundler";

interface SingleThemeManagerProps {
  children: ReactNode;
  fontSystem: FontSystem;
  alertColors: AlertColors;
  colorSystem: ColorSystem[];
  background: string;
  typeName: string;
  colorName: string;
}

const SingleThemeManager: FunctionComponent<SingleThemeManagerProps> = ({
  children,
  fontSystem,
  alertColors,
  colorSystem,
  background,
  typeName,
  colorName,
}) => {
  const theme = bundleThemeType(
    fontSystem,
    background,
    alertColors,
    colorSystem,
    typeName
  );

  return (
    <ThemeProvider
      theme={{
        presets: theme.presets,
        fonts: theme.fonts,
        fontSystem: theme.fontSystem,
        background: theme.background,
        alerts: theme.alerts,
        colors: theme.colors[colorName],
        typeName: typeName,
        colorName: colorName,
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default SingleThemeManager;
