import React from "react";
import styled from "styled-components";

const WebPage = ({setTheme}) => {
    const Container = styled.div`
        color: ${(props) => props.theme.color.secundary};
        background-color: ${(props) => props.theme.color.primary};
    `;

    return (
            <Container>Hello, world!</Container>
    );
};

export default WebPage;
