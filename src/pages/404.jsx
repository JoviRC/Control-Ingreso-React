import React from "react";
import AnimationPage from "../components/PageTransition";
import styled from "styled-components";
import DataCard from "../lib/DataCard";
import { motion } from "framer-motion";

const NotFound = () => {
    const [currentWidth, setCurrentWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setCurrentWidth(window.innerWidth);
        });
    }, [currentWidth]);


    const Container = styled.div`
        display: flex;
        flex-direction: column;
        item-align: center;
        max-height: 100vh;
        width: ${currentWidth > 600 ? "600px" : "100%"};
        background-color: ${(props) => props.theme.color.primary};
    `;
    const Title = styled.h1`
        color: ${(props) => props.theme.color.secondary};
        font-size: ${currentWidth > 600 ? "40px" : "30px"};
        font-family: Ruluko;
        font-weight: bold;
        margin: 30px auto;
        text-align: center;
    `;
    return (
        <AnimationPage>
            <Container>
                <Title>Error 404 Pagina no encontrada</Title>
            </Container>
        </AnimationPage>
    );
};

export default NotFound;