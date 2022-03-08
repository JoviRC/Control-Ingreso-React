import { useState, useEffect } from "react";
import styled from "styled-components";
import { breakpoints } from "../lib/styledBreakPoints";
import { flexDirection, width, height, padding } from "styled-system";

const WebPage = () => {
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setCurrentWidth(window.innerWidth);
        });
    }, [currentWidth]);
    const Container = styled.div`
        margin-top: 70px;
        background-color: ${(props) => props.theme.color.primary};
        width: 600px;
        /* outline: red 2px solid; */
        ${breakpoints("width", "vw", [{ 600: 100 }])};
    `;
    const NameTitle = styled.h1`
        color: ${(props) => props.theme.color.secondary};
        font-size: ${currentWidth > 600 ? "40px" : "30px"};
        margin: 0 auto;
    `;
    const NameSubTitle = styled.h1`
        font-size: ${currentWidth > 600 ? "20px" : "16px"};
        margin: 0 auto;
        color: ${(props) => props.theme.color.tertiary};
    `;
    const Section = styled.div`
        width: auto;
        height: auto;
        ${padding}
        display: flex;
        justify-content: center;
        align-items: center;
        ${flexDirection};
    `;
    const Box = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        ${width};
        ${height};
        ${flexDirection};
    `;
    const Avatar = styled.img`
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.color.secondary};
        border: 5px solid ${(props) => props.theme.color.secondary};
        object-fit: cover;
        margin: ${currentWidth > 600 ? "0" : "30px 0"};
    `;
    const Titule = styled.h1`
        margin: ${currentWidth > 600 ? "0 auto 0 60px" : "auto"};
        font-size: ${currentWidth > 600 ? "24px" : "30px"};
        color: ${(props) => props.theme.color.secondary};
        font-family: Ruluko;
        text-align: justify;
    `;
    const Paragraph = styled.p`
        padding: ${currentWidth > 600 ? "0 50px" : "0 30px"};
        font-size: ${currentWidth > 600 ? "16px" : "20px"};
        font-family: Ruluko;
        color: ${(props) => props.theme.color.secondary};
        text-align: justify;
    `;

    return (
        <Container>
            <Section padding="40px 0 30px 0" flexDirection={currentWidth > 600 ? "row" : "column"}>
                <Box width="auto" height="auto" flexDirection="column">
                    <NameTitle>Johan Rivera</NameTitle>
                    <NameSubTitle>Desarrollador ( React / Angualar )</NameSubTitle>
                </Box>
                <Box width="180px" height="auto">
                    <Avatar src={process.env.PUBLIC_URL + "/assets/img/foto.png"} alt="Avatar" />
                </Box>
            </Section>
            <Section flexDirection={currentWidth > 600 ? "row" : "column"} padding="30px 0px">
                <Box
                    flexDirection="column"
                    width={currentWidth > 600 ? "630px" : "100%"}
                    height="90%"
                >
                    <Titule>Sobre mí</Titule>
                    <Paragraph>
                        Soy un desarrollador Front-End apasionado por la tecnología, la música, la
                        ciencia y el anime, poseeo un titulo de Ingeniero en informática en la
                        Universidad Tecnológica INACAP y actualmente trabajo en el Hospital
                        Provincial de Ovalle. Me considero una persona responsable, autodidacta,
                        comprometida y ademas con muchas ganas de trabajar en un equipo de
                        desarrollo Web.
                    </Paragraph>
                </Box>
            </Section>
        </Container>
    );
};

export default WebPage;
