import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
font-size: 2rem;
font-weight: 600;
background-color: yellow;
`;

const StyledApp = styled.div`
background-color: red;
padding: 20px;
`;


export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>

        <Input type="number" placeholder="number of guests" />
      </StyledApp>
    </>
  )
}
