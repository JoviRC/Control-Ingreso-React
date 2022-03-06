import React from "react";
import styled from "styled-components";
import { BiMoon, BiSun } from "react-icons/bi";

const ContainerIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.color.secundary};
    background-color: ${(props) => props.theme.color.secundary};
    outline: none;
`;

export const ButtonLight = () => {
    return <ContainerIcon>x</ContainerIcon>;
};
export const ButtonDark = () => {
    return <ContainerIcon>i</ContainerIcon>;
};
