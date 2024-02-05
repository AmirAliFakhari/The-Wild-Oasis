import styled from "styled-components";

const Resposive = styled.div`
  @media screen and (max-width: 930px) {
    display: none;
  }
`;

const NotResponsive = styled.p`
  @media screen and (max-width: 930px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* margin-top: 50%; */
    background-color: #313131;
    color: white;
    height: 100vh;
    /* max-height: 100vh; */
  }
`;

export default function Responsive({ children }) {
  return (
    <>
      <Resposive>{children}</Resposive>
      <NotResponsive>
        The Mobile Design is not still Responsive ! You can Check the App with
        Dekstop Mode 😁
      </NotResponsive>
    </>
  );
}
