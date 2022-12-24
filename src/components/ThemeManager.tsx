import { ThemeProvider } from "styled-components";

import { FunctionComponent, useMemo } from "react";
import { bundleThemes } from "../bundler";

interface ThemeManagerProps {
  children: JSX.Element;
  color: string;
  type: string;
}

const ThemeManager: FunctionComponent<ThemeManagerProps> = ({
  children,
  color,
  type,
}) => {
  const themes = useMemo(() => {
    return bundleThemes();
  }, []);

  return (
    <ThemeProvider
      theme={{
        presets: themes[type].presets,
        theme: themes[type].themes[color],
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeManager;
