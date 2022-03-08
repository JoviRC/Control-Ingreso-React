import { useState, useEffect, createRef, useRef } from "react";
import styled from "styled-components";
import { flexDirection, width, height, padding } from "styled-system";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const WebPage = () => {
    const heightRef = useRef();
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const [currentHeight, setCurrentHeight] = useState(window.innerHeight);
    const [contentHeight, setContentHeight] = useState(undefined);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setCurrentWidth(window.innerWidth);
        });
    }, [currentWidth]);
    useEffect(() => {
        window.addEventListener("resize", () => {
            setCurrentHeight(window.innerHeight);
        });
    }, [currentHeight]);
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (contentHeight > currentHeight) {
                setContentHeight(heightRef.current.offsetHeight);
                console.log(heightRef.current.offsetHeight);
            }
        });
    }, []);

    const Container = styled.div`
        height: ${currentHeight > contentHeight ? "100vh" : "auto"};
        width: ${currentWidth > 600 ? "600px" : "100%"};
        margin-top: 70px;
        background-color: ${(props) => props.theme.color.primary};
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
    const ButtonPortfolio = styled.div`
        display: flex;
        padding: 0 10px;
        align-items: center;
        justify-content: space-around;
        height: 50px;
        width: 120px;
        background-color: ${(props) => props.theme.color.buttonBg};
        color: ${(props) => props.theme.color.primary};
        font-family: Ruluko;
        border-radius: 10px;
        cursor: pointer;
    `;
    const LayoutBio = styled.div`
        display: flex;
        margin: ${currentWidth > 600 ? "10px auto 10px 30px" : "10px auto"};
        text-align: justify;
        flex-direction: row;
        justify-content: space-around;
    `;
    const AgeBio = styled.h1`
        font-size: ${currentWidth > 600 ? "20px" : "24px"};
        font-family: Ruluko;
        color: ${(props) => props.theme.color.secondary};
        margin: 0 10px;
    `;
    const ContentBio = styled.p`
        font-size: ${currentWidth > 600 ? "16px" : "20px"};
        font-family: Ruluko;
        color: ${(props) => props.theme.color.secondary};
        margin: 0 10px;
    `;

    return (
        <Container ref={heightRef}>
            <Section padding="40px 0 0 0" flexDirection={currentWidth > 600 ? "row" : "column"}>
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
                        comprometida y además con muchas ganas de trabajar en un equipo de
                        desarrollo Web.
                    </Paragraph>
                </Box>
            </Section>
            <Section padding="10px">
                <Link to="/Trabajos" style={{ textDecoration: "none" }}>
                    <ButtonPortfolio>
                        Portafolio <MdKeyboardArrowRight />
                    </ButtonPortfolio>
                </Link>
            </Section>
            <Section padding="30px" flexDirection="column">
                <Titule>Bibliografia</Titule>
                <br />
                <LayoutBio>
                    <AgeBio>1995</AgeBio>
                    <ContentBio>
                        Nací y me crie en la ciudad de Ovalle Cuarta Región de Chile
                    </ContentBio>
                </LayoutBio>
                <LayoutBio>
                    <AgeBio>2021</AgeBio>
                    <ContentBio>
                        Titulado de Ingeniero en Informática de la Universidad Tecnológica INACAP
                    </ContentBio>
                </LayoutBio>
                <LayoutBio>
                    <AgeBio>2022</AgeBio>
                    <ContentBio>Puesto administrativo, Hospital Provincial Ovalle</ContentBio>
                </LayoutBio>
            </Section>
        </Container>
    );
};

export default WebPage;
