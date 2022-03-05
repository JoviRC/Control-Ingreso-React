// import React from "react";
import baseStyled, { ThemedStyledInterface } from "styled-components";
import "styled-components";

// declare module 'styled-components' {
//     export interface Theme {
//         color: {
//             primary: string,
//             secondary: string,
//             tertiary: string,
//     }
// }

export const darkTheme = {
    color: {
        primary: "#202025",
        secondary: "#ffffff",
        tertiary: "#a4a4a4",
    },
};

export const lightTheme: Theme = {
    color: {
        primary: "#ffffff",
        secondary: "#202020",
        tertiary: "#a4a4a4",
    },
};

export type Theme = typeof darkTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
