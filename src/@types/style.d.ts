import "styled-components";

import { defaultTheme } from "../styles/theme/default";

type ITheme = typeof defaultTheme;

declare module "styled-components" {
    export interface DefaultTheme extends ITheme {}
}
