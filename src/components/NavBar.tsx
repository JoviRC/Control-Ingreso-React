import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { lightTheme, darkTheme } from "../lib/Theme";
import { breakpoints } from "../lib/styledBreakPoints";
import { ButtonDark, ButtonLight } from "../components/ButtonTheme";
import { GoMarkGithub } from "react-icons/go";
import ButtonNav from "./ButtonNav";

const Nav = styled.nav`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.color.nav};
    color: ${(props) => props.theme.color.secondary};
    width: 100%;
    height: auto;
    top: 0;
    backdrop-filter: blur(10px);
`;
const Box = styled.div`
    height: 60px;
    /* padding: 0 30px; */
    width: 900px;
    ${breakpoints("width", "vw", [{ 900: 100 }])};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
`;
const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const BoxNav = styled.div`
    height: auto;
    padding: 0 30px;
    width: 900px;
    ${breakpoints("width", "vw", [{ 900: 100 }])};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Titule = styled.h1`
    width: auto;
    color: ${(props) => props.theme.color.secondary};
    text-decoration: none;
    margin: 0 10px 0 30px;
    font-family: Ruluko;
    :hover {
        color: ${(props) => props.theme.color.tertiary};
    }
`;
const LinkBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
`;
const LinkText = styled.h2`
    text-decoration: none;
    margin: 0 0 0 20px;
    margin-top: 4.5px;
    font-size: 16px;
    font-family: Ruluko;
    line-height: 1.5;
    color: ${(props) => props.theme.color.secondary};
    outline-offset: 3px;
    text-underline-offset: 4px;
    :hover {
        text-decoration: underline;
    }
    ${window.innerWidth < 600 ? breakpoints("font-size", "px", [{ 600: 20 }]) : ""};
`;
const Button = styled.div`
    display: relative;
    float: right;
    margin: 0;
    margin-right: 30px;
`;

function NavBar(props: any) {
    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
    const [press, setPress] = useState(false);

    window.addEventListener("resize", () => {
        setWindowsWidth(window.innerWidth);
    });

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
        <>
            <Nav>
                <Box>
                    <Container>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Titule>Johan Rivera</Titule>
                        </Link>
                        {windowsWidth > 600 ? (
                            <LinkBox>
                                <Link to="/Trabajos" style={{ textDecoration: "none" }}>
                                    <LinkText>Trabajos</LinkText>
                                </Link>
                                <a
                                    href="https://github.com/JoviRC"
                                    target="_blank"
                                    style={{ textDecoration: "none" }}
                                    rel="noreferrer"
                                >
                                    <LinkText>
                                        <GoMarkGithub /> GitHub
                                    </LinkText>
                                </a>
                            </LinkBox>
                        ) : null}
                    </Container>
                    <ContainerButtons>
                        {localStorage.getItem("theme") === "dark" ? (
                            <Button onClick={setLightTheme}>
                                <ButtonLight />
                            </Button>
                        ) : (
                            <Button onClick={setDarkTheme}>
                                <ButtonDark />
                            </Button>
                        )}
                        {windowsWidth < 600 ? (
                            <ButtonNav setPress={setPress} press={press} />
                        ) : null}
                    </ContainerButtons>
                </Box>
                {press && windowsWidth < 600 ? (
                    <BoxNav>
                        <Link to="/Trabajos" style={{ textDecoration: "none" }}>
                            <LinkText>Trabajos</LinkText>
                        </Link>
                        <a
                            href="https://github.com/JoviRC"
                            target="_blank"
                            style={{ textDecoration: "none" }}
                            rel="noreferrer"
                        >
                            <LinkText>
                                <GoMarkGithub /> GitHub
                            </LinkText>
                        </a>
                    </BoxNav>
                ) : null}
            </Nav>
        </>
    );
}

export default memo(NavBar);
