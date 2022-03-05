import React from "react";
import { Routes, Route } from "react-router-dom";
import WebPage from "../pages";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../lib/Theme";

const Router = () => {

    const [theme, setTheme] = React.useState(darkTheme);

    return (
        <>
            <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<WebPage setTheme={setTheme} />} />
            </Routes>
            </ThemeProvider>
        </>
    );
};

export default Router;
