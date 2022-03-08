import React from "react";
import { Routes, Route } from "react-router-dom";
import WebPage from "../pages";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../lib/Theme";
import NavBar from "../components/NavBar";

const Router = () => {
    let themeMode = localStorage.getItem("theme");
    const [theme, setTheme] = React.useState(
        themeMode === "light" || null ? lightTheme : darkTheme
    );

    const Container = styled.div`
        background-color: ${(props) => props.theme.color.primary};
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin: 0;
        height: auto;
        width: 100%;
    `;

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>
                    <NavBar setTheme={setTheme} />
                    <Routes>
                        <Route path="/" element={<WebPage />} />
                    </Routes>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default Router;
