import baseStyled, { ThemedStyledInterface } from "styled-components";
import "styled-components";

export const darkTheme = {
    color: {
        primary: "#353739",
        secondary: "#e4ded2",
        tertiary: "#a4a4a4",
        nav: "#20202580",
        buttonBg: "#dec492",
        buttonBorder: "#decfb3",
        buttonIcon: "#353749"
    },
};

export const lightTheme: Theme = {
    color: {
        primary: "#e4ded2",
        secondary: "#353739",
        tertiary: "#a4a4a4",
        nav: "#ffffff40",
        buttonBg: "#353749",
        buttonBorder: "#464a66",
        buttonIcon: "#dec492"
    },
};

export type Theme = typeof darkTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
