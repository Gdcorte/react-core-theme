// import original module declarations
import "styled-components";
import { BaseTheme } from "./src/interfaces";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme {}
}
