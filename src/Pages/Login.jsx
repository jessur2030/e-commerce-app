import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fcf1ed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #dadce0;
  border-radius: 5px;
  padding-bottom: 50px;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.15);
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

const SocialLoginsContainer = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  min-width: 40%;
  width: 80%;
  padding: 12px 20px;
  margin: 10px 0;
  color: #747476;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 60%;
  padding: 0.625rem; //10px
  font-size: 1.25rem; //20px
  background-color: #fff;
  border: 2px solid #333;
  margin: 10px 0;

  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #333;
    color: #fff;
    transition: 60ms ease-in-out;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 550;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SING IN</Title>

        {/* <SocialLoginsContainer>
      <GoogleIcon />
    </SocialLoginsContainer> */}
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />

          <Button>SING IN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
