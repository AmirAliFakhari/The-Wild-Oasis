import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import Responsive from "../ui/Responsive";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <Responsive>
      <LoginLayout>
        <Logo />
        <Heading as="h4">Login in to your account</Heading>
        <LoginForm />
      </LoginLayout>
    </Responsive>
  );
}

export default Login;
