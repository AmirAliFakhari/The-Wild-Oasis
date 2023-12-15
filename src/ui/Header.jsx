import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  border-bottom: solid 2px var(--color-grey-100);
  padding: 1.2rem 4.8rem;
`;

export default function Header() {
  return <StyledHeader>Header</StyledHeader>;
}
