import styled from "styled-components";
import ContainerStyle from "../UI/Container";

export const Container = styled(ContainerStyle)`
  flex-direction: column;
  justify-content: center;

  @media (min-width: 980px) {
    flex-direction: row;
  }

`;
