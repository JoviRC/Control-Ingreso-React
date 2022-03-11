import React from "react";
import AnimationPage from "../components/PageTransition";
import styled from "styled-components";
import DataCard from "../lib/DataCard";
import { motion } from "framer-motion";

const Works = () => {
    const [currentWidth, setCurrentWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setCurrentWidth(window.innerWidth);
        });
    }, [currentWidth]);

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        height: "auto";
        width: ${currentWidth > 600 ? "600px" : "100%"};
        margin-top: 60px;
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
    const Section = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    `;
    const Card = styled.a`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        height: auto;
        width: 300px;
        overflow: hidden;
        margin: 10px auto;
        text-decoration: none;
        cursor: pointer;
    `;
    const ImgCard = styled.img`
        height: 150px;
        width: 270px;
        border-radius: 15px;
        text-decoration: none;
    `;
    const InfoCard = styled.div`
        width: 100%;
        height: auto;
        text-decoration: none;
    `;
    const TitleCard = styled.h1`
    font-size: ${currentWidth > 600 ? "20px" : "15px"};
    font-family: Ruluko;
    color: ${(props) => props.theme.color.secondary};
    margin: 0;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    `;
    const DetailsCard = styled.p`
        font-size: ${currentWidth > 600 ? "15px" : "10px"};
        color: ${(props) => props.theme.color.secondary};
        margin: 0;
        text-align: center;
        text-decoration: none;
    `;

    return (
        <AnimationPage>
            <Container>
                <Title>Trabajos</Title>
                <Section>
                    {DataCard.map((data, idx) => (
                        <Card key={idx} href={data.url} >
                            <ImgCard src={data.img} />
                            <InfoCard>
                                <TitleCard>{data.title}</TitleCard>
                                <DetailsCard>{data.description}</DetailsCard>
                            </InfoCard>
                        </Card>
                    ))}
                </Section>
            </Container>
        </AnimationPage>
    );
};

export default Works;
