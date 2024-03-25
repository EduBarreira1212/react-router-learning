import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputSub = styled.input`
    margin-top: 2vh;
    height: 5vh;
    width: 5vw;
    cursor: pointer;
    font-size: medium;
`;


const Login = () => {
    const navigate = useNavigate();

    return (
        <Div>
            <h1>Login</h1>
            <Form>
                <label htmlFor="email-client">E-mail:</label>
                <input type="email" name="email" id="email-client" required/>
                <label htmlFor="password-client">Password:</label>
                <input type="password" name="password" id="password-client" required/>
                <InputSub type="submit" onClick={() => navigate("/dashboard")} value={"Sign in"}/>
            </Form>
        </Div>
    );
}

export default Login;