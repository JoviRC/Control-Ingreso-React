import styled from "styled-components";
import AnimationPage from "../components/PageTransition";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState, useEffect } from "react";
import { flexDirection, width, height, padding } from "styled-system";
import { AiFillLinkedin, AiFillInstagram, AiFillHeart, AiFillMail, AiFillGithub } from "react-icons/ai";
const WebPage = () => {
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const [GmailText, setGmailText] = useState("@Gmail");
    useEffect(() => {
        window.addEventListener("resize", () => {
            setCurrentWidth(window.innerWidth);
        });
    }, [currentWidth]);

    const copy = () => {
        navigator.clipboard.writeText("johanrc95@gmail.com");
        setGmailText("Copiado");
        setTimeout(() => {
            setGmailText("@Gmail");
        }, 1000);
    };
    const Container = styled.div`
        height: auto;
        width: ${currentWidth > 600 ? "600px" : "100%"};
        background-color: ${(props) => props.theme.color.primary};
    `;
    const NameTitle = styled.h1`
        color: ${(props) => props.theme.color.secondary};
        font-size: ${currentWidth > 600 ? "40px" : "30px"};
        margin: 0 auto;
        font-family: Ruluko;
    `;
    const NameSubTitle = styled.p`
        font-size: ${currentWidth > 600 ? "20px" : "16px"};
        margin: 0 auto;
        color: ${(props) => props.theme.color.tertiary};
        font-family: Ruluko;
        font-weight: bold;
    `;
    const Section = styled.div`
        width: auto;
        height: auto;
        ${padding};
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
        font-weight: bold;
        cursor: pointer;
    `;
    const LayoutBio = styled.div`
        display: flex;
        padding: ${currentWidth > 600 ? "0 50px" : "0 30px"};
        margin: ${currentWidth > 600 ? "10px auto 10px 0" : "10px auto"};
        text-align: flex-start;
        flex-direction: row;
        justify-content: space-between;
    `;
    const AgeBio = styled.h1`
        font-size: ${currentWidth > 600 ? "20px" : "24px"};
        font-family: Ruluko;
        color: ${(props) => props.theme.color.secondary};
        margin: 0 10px 0 0;
    `;
    const ContentBio = styled.p`
        font-size: ${currentWidth > 600 ? "16px" : "20px"};
        font-family: Ruluko;
        color: ${(props) => props.theme.color.secondary};
        margin: auto 10px auto 0;
        text-align: justify;
    `;
    const RedesContainer = styled.a`
        display: flex;
        justify-content: ${currentWidth > 600 ? "flex-start" : "center"};
        align-items: center;
        background-color: ${(props) => props.theme.color.buttonBg};
        color: ${(props) => props.theme.color.primary};
        font-family: Ruluko;
        font-weight: bold;
        padding: 8px 16px;
        border-radius: 10px;
        margin: ${currentWidth > 600 ? "0 auto 20px 50px;" : "10px auto"};
        transition: all 0.3s;
        cursor: pointer;
        :hover {
            background-color: ${(props) => props.theme.color.secondary};
        }
    `;
    const RedesText = styled.div`
        margin: 0 0 0 10px;
        font-size: 20px;
        font-family: Ruluko;
        font-weight: lighter;
        cursor: pointer;
    `;
    const TextFooter = styled.p`
        color:${(props) => props.theme.color.tertiary};
        font-family: Ruluko;
        margin: 0 auto 30px auto;
    `;

    return (
        <AnimationPage>
            <Container>
                <Section padding="60px 0 0 0" flexDirection={currentWidth > 600 ? "row" : "column"}>
                    <Box width="auto" height="auto" flexDirection="column">
                        <NameTitle>Johan Rivera</NameTitle>
                        <NameSubTitle>Desarrollador FullStack</NameSubTitle>
                    </Box>
                    <Box width="180px" height="auto">
                        <Avatar
                            src={process.env.PUBLIC_URL + "/assets/img/foto.jpeg"}
                            alt="Avatar"
                        />
                    </Box>
                </Section>
                <Section padding="30px 0px" flexDirection={currentWidth > 600 ? "row" : "column"}>
                    <Box
                        flexDirection="column"
                        width={currentWidth > 600 ? "630px" : "100%"}
                        height="90%"
                    >
                        <Titule>Sobre mí</Titule>
                        <Paragraph>
                            Soy un desarrollador web apasionado por la tecnología, la música,
                            la ciencia y la animación, poseeo un titulo de Ingeniero en informática en
                            la Universidad Tecnológica INACAP y actualmente trabajo como back-end en AMSOFT. 
                            Me considero una persona responsable, autodidacta y comunicativa.
                        </Paragraph>
                    </Box>
                </Section>
                <Section padding="10px">
                    <Link to="/works" style={{ textDecoration: "none" }}>
                        <ButtonPortfolio>
                            Trabajos <MdKeyboardArrowRight />
                        </ButtonPortfolio>
                    </Link>
                </Section>
                <Section padding="50px 0" flexDirection="column">
                    <Titule>Bibliografía</Titule>
                    <br />
                    <LayoutBio>
                        <AgeBio>2022</AgeBio>
                        <ContentBio>Desarrollador Back-End, AMSOFT ( Región Metropolitana )</ContentBio>
                    </LayoutBio>
                    <LayoutBio>
                        <AgeBio>2022</AgeBio>
                        <ContentBio>Puesto administrativo, Hospital Provincial ( 4ta Región - Ovalle )</ContentBio>
                    </LayoutBio>
                    <LayoutBio>
                        <AgeBio>2021</AgeBio>
                        <ContentBio>
                            Titulado de Ingeniero en Informática de la Universidad Tecnológica
                            INACAP ( 4ta Región - La Serena )
                        </ContentBio>
                    </LayoutBio>
                    <LayoutBio>
                        <AgeBio>1995</AgeBio>
                        <ContentBio>
                            Nací y me crié en la ciudad de Ovalle Cuarta Región de Coquimbo, Chile
                        </ContentBio>
                    </LayoutBio>
                </Section>
                <Section padding="0 0 50px 0" flexDirection="column">
                    <Titule>
                        <AiFillHeart />
                    </Titule>
                    <br />
                    <LayoutBio>
                        <AgeBio>Película</AgeBio>
                        <ContentBio>Interestelar</ContentBio>
                    </LayoutBio>
                    <LayoutBio>
                        <AgeBio>Grupo Musical</AgeBio>
                        <ContentBio>Mago de Oz</ContentBio>
                    </LayoutBio>
                    <LayoutBio>
                        <AgeBio>Artistas</AgeBio>
                        <ContentBio>Steve Vai - Stevie Ray - Gary Moore</ContentBio>
                    </LayoutBio>
                    <LayoutBio>
                        <AgeBio>Instrumento Musical</AgeBio>
                        <ContentBio>Guitarra</ContentBio>
                    </LayoutBio>
                </Section>
                <Section padding="0 0 50px 0" flexDirection="column">
                    <Titule>Redes</Titule>
                    <br />
                    <RedesContainer
                        href="https://www.linkedin.com/in/johan-rc/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                        rel="noreferrer"
                    >
                        <AiFillLinkedin style={{ height: "20px", width: "20px" }} />
                        <RedesText>@JohanRC</RedesText>
                    </RedesContainer>
                    <RedesContainer
                        href="https://github.com/JoviRC"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                        rel="noreferrer"
                    >
                        <AiFillGithub style={{ height: "20px", width: "20px" }} />
                        <RedesText>@JoviRC</RedesText>
                    </RedesContainer>
                    <RedesContainer
                        href="https://www.instagram.com/jovirc/"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                        rel="noreferrer"
                    >
                        <AiFillInstagram style={{ height: "20px", width: "20px" }} />
                        <RedesText>@JoviRC</RedesText>
                    </RedesContainer>
                    <RedesContainer onClick={copy} style={{ textDecoration: "none" }}>
                        <AiFillMail style={{ height: "20px", width: "20px" }} />
                        <RedesText>{GmailText}</RedesText>
                    </RedesContainer>
                </Section>
                <Section>
                    <TextFooter>&#xA9; 2022 Johan Rivera. All Rights Reserved.</TextFooter>
                </Section>
            </Container>
        </AnimationPage>
    );
};

export default WebPage;