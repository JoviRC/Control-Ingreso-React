import baseStyled, { ThemedStyledInterface } from "styled-components";
import "styled-components";

export const darkTheme = {
    color: {
        primary: "#202025",
        secondary: "#ffffff",
        tertiary: "#a4a4a4",
        nav: "#20202580",
    },
};

export const lightTheme: Theme = {
    color: {
        primary: "#ffffff",
        secondary: "#202020",
        tertiary: "#a4a4a4",
        nav: "#ffffff20",
    },
};

export type Theme = typeof darkTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
