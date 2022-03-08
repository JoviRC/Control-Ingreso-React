import styled from "styled-components";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";

const Container = styled.div`
    display: flex;
    margin: auto 15px auto -15px;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.secondary};
    outline: 2px solid ${(props) => props.theme.color.tertiary};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
`;

const ButtonNav = (props: any) => {
    function handleButtonNav() {
        props.setPress(!props.press);
    }

    return (
        <Container onClick={() => handleButtonNav()}>
            {props.press ? <BiMenuAltRight /> : <BiMenu />}
        </Container>
    );
};
export default ButtonNav;
