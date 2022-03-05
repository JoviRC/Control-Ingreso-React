import React, {memo,  useState } from "react";
import styled, { ThemedStyledInterface } from "styled-components";
import { Theme, lightTheme, darkTheme } from "../lib/Theme";

type NavBarProps = {
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

function NavBar (props: any)  {
    function setLightTheme() {
        props.setTheme(lightTheme);
    }
    function setDarkTheme() {
        props.setTheme(darkTheme);
    }
    return (
        <div>
            <h1>Book App</h1>
            <button onClick={setLightTheme}>Light </button>
            <button onClick={setDarkTheme}> Dark </button>
        </div>
    );
};

export default memo(NavBar);
