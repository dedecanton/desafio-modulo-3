import styled from "styled-components";

type Props = {
    height ?: string;
    addStyle ?: string 
}
export const ContainerElement = styled.div<Props>`
  margin: 0 auto;
  width: 100%;
  display: flex;
  margin: 0%;
  height: ${props => props.height || 'auto'};

  ${props => props.addStyle || ''}
`;
