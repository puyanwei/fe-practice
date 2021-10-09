import styled from "styled-components";
import { size } from "../variables";

interface CardProps {
  colour: string;
}

export const TCCard = styled.div<CardProps>`
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background-color: ${({ colour }) => colour};

  @media (min-width: ${size.tablet}) and (max-width: ${size.desktop}) {
    padding-top: 2.6rem;
    display: flex;
    justify-content: space-around;
    padding: 1rem;
  }
`;
