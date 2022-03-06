import React, { memo } from "react";
import styled from "styled-components";
import { lightTheme, darkTheme } from "../lib/Theme";
import { breakpoints } from "../lib/styledBreakPoints";
import { ButtonDark, ButtonLight } from "../components/ButtonTheme";

const Nav = styled.nav`
    overflow: hidden;
    position: absolute;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.color.nav};
    color: ${(props) => props.theme.color.secondary};
    width: 70vw;
    height: 60px;
    outline: red 2px solid;
    ${breakpoints("width", "vw", [{ 700: 95 }])};
    backdrop-filter: blur(2px);
`;
const Box = styled.div`
    display: flex;
    flex-direction: row;
`;

function NavBar(props: any) {
    function setLightTheme() {
        let themeMode = localStorage.getItem("theme");
        if (themeMode === "dark" || themeMode === null) {
            props.setTheme(lightTheme);
            localStorage.setItem("theme", "light");
        }
    }
    function setDarkTheme() {
        let themeMode = localStorage.getItem("theme");
        if (themeMode === "light" || themeMode === null) {
            props.setTheme(darkTheme);
            localStorage.setItem("theme", "dark");
        }
    }
    return (
        <Nav>
            <Box>
                <h1>Book App</h1>
                {localStorage.getItem("theme") === "dark" ? (
                    <div onClick={setLightTheme}>
                        <ButtonLight />
                    </div>
                ) : (
                    <div onClick={setDarkTheme}>
                        <ButtonDark />
                    </div>
                )}
            </Box>
        </Nav>
    );
}

export default memo(NavBar);
