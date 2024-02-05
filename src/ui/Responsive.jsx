import styled from "styled-components";
import Heading from "./Heading";
import Logo from "./Logo";
import Button from "./Button";
import { Link } from "react-router-dom";

const Resposive = styled.div`
  @media screen and (max-width: 930px) {
    display: none;
  }
`;

const NotResponsive = styled.div`
  @media screen and (max-width: 930px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* margin-top: 50%; */
    background-color: #313131;
    color: white;
    height: 100vh;
    /* max-height: 100vh; */
  }

  & span {
    font-weight: bold;
  }
`;

export default function Responsive({ children }) {
  return (
    <>
      <Resposive>{children}</Resposive>
      <NotResponsive>
        <Logo />
        <Heading as="h2" style={{ marginBottom: "30px" }}>
          Hotel Managment
        </Heading>
        The Mobile Design is not still Responsive ! You can Check the App on
        <span> Dekstop Mode 😁</span>
        <a href="https://amiralifakhari.github.io/newCV/">
          <Button style={{ marginTop: "40px" }}>My Portfolio</Button>
        </a>
      </NotResponsive>
    </>
  );
}
