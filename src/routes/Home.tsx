import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
    border: solid;
    padding: 2vh 2vw;
`;

const P = styled.p`
    font-size: larger;
    font-weight: 600;
`;

const Button = styled.button`
    height: 5vh;
    width: 8vw;
    font-size: large;
    font-weight: 500;
    cursor: pointer;
`;

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Div>
            <P>Hello, you need to login</P>
            <Button onClick={() => navigate("/login")}>Go to Login</Button>
        </Div>
    );
}

export default Home;