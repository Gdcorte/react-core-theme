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

  return (
    <ThemeProvider
      theme={{
        presets: themes[typeName].presets,
        fonts: themes[typeName].fonts,
        background: themes[typeName].background,
        alerts: themes[typeName].alerts,
        colors: themes[typeName].colors[colorName],
        typeName,
        colorName,
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeManager;
