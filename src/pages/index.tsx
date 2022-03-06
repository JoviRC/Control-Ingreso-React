import React from "react";
import styled from "styled-components";
import { breakpoints } from "../lib/styledBreakPoints";

const WebPage = () => {
    const Container = styled.div`
        background-color: ${(props) => props.theme.color.primary};
        width: 70vw;
        ${breakpoints("width", "vw", [{ 700: 95 }])};
        height: auto;
        outline: red 2px solid;
        
    `;
    const Titule = styled.h1`
        margin: 0;
        font-size: 1.5em;
        color: ${(props) => props.theme.color.secondary};
    `;
    const Section = styled.section`
        width: 100vw;
        height: 110vh;
    `;

    return (
        <Container>
            <Titule>Hello</Titule>
            <Section/>
        </Container>
    );
};

export default WebPage;
