import styled from "styled-components";
import { size } from "../variables";

interface CardProps {
  colour: string;
  maxWidth: string;
}

export const TCCard = styled.div<CardProps>`
  margin: 0 auto;
  padding: 1rem;
  border-radius: 25px;
  background-color: ${({ colour }) => colour};
  max-width: ${({ maxWidth }) => maxWidth};
  @media (min-width: ${size.tablet}) and (max-width: ${size.desktop}) {
    display: flex;
    flex-wrap: wrap;
    max-width: 50rem;
  }
`;
