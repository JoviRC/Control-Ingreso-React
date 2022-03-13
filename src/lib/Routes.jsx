import React from "react";
import WebPage from "../pages";
import Works from "../pages/works";
import NavBar from "../components/NavBar";
import styled, { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import { darkTheme, lightTheme } from "./Theme";

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
        padding: 60px 0 0 0;
        margin: 0;
        min-height: 100vh;
        min-width: 100vw;
        height: 100%;
        width: 100%;
    `;

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container>
                    <NavBar setTheme={setTheme} />
                    <Route
                        render={({ location }) => (
                            <>
                                <AnimatePresence exitBeforeEnter initial={false}>
                                    <Switch key={location.key} location={location}>
                                        <Route exact path="/Portfolio-React/">
                                            <WebPage />
                                        </Route>
                                        <Route path="/works">
                                            <Works />
                                        </Route>
                                    </Switch>
                                </AnimatePresence>
                            </>
                        )}
                    />
                </Container>
            </ThemeProvider>
        </>
    );
};

export default Router;
