import { FunctionComponent, useMemo, useState } from "react";
import styled from "styled-components";
import {
  colorCombinationVariants,
  ColorCombinationVariants,
  colorVariants,
  ColorVariants,
  themeVariants,
  ThemeVariants,
} from "../../interfaces";
import {
  createThemeConfig,
  createThemeWithDefaultPresets,
} from "../../utils/bundler";
import { colorComboTypeName } from "../../utils/combination";
import ThemePallete from "./Pallete";

const Frame = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

const Controls = styled.div`
  display: flex;

  justify-content: space-around;

  gap: 12px;

  padding: 8px;

  p {
    margin: 0;
  }
`;

const Preview = styled.div`
  border-radius: 5px;
`;

type Props = {};

const ThemePreview: FunctionComponent<Props> = ({}) => {
  const [name, setName] = useState<ColorVariants>("green");
  const [theme, setTheme] = useState<ThemeVariants>("dark");
  const [combination, setCombination] =
    useState<ColorCombinationVariants>("analogous");

  const genTheme = useMemo(() => {
    return createThemeConfig({
      name,
      combination,
      theme,
    });
  }, [name, theme, combination]);

  function exportTheme() {
    const themeObj = createThemeWithDefaultPresets({
      name,
      theme,
      combination,
    });

    console.info(themeObj);

    const combinationType = colorComboTypeName(combination);

    const exportableTheme = `
      const theme: BaseTheme<${combinationType}, ChartTheme, AlertThemes> = ${JSON.stringify(
        themeObj,
        undefined,
        2
      )}
    `;

    navigator.clipboard.writeText(exportableTheme);
    alert("Theme copied to clipboard");
  }

  return (
    <Frame>
      <Controls>
        <div>
          <p>Color</p>
          <select
            value={name}
            onChange={(e) => setName(e.target.value as ColorVariants)}
          >
            {Object.values(colorVariants).map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p>Theme</p>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as ThemeVariants)}
          >
            {Object.values(themeVariants).map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p>Color Combination</p>
          <select
            value={combination}
            onChange={(e) =>
              setCombination(e.target.value as ColorCombinationVariants)
            }
          >
            {Object.values(colorCombinationVariants).map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <button onClick={exportTheme}>Export</button>
      </Controls>
      <Preview>
        <ThemePallete {...genTheme} />
      </Preview>
    </Frame>
  );
};

export default ThemePreview;
