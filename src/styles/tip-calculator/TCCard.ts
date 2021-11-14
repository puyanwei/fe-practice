import styled from 'styled-components/macro';
import { size } from 'styles/tip-calculator/tip-calculator-variables';

interface CardProps {
  colour: string;
}

export const TCCard = styled.div<CardProps>`
  margin: 0 auto;
  padding: 1rem;
  border-radius: 25px;
  background-color: ${({ colour }) => colour};

  @media (min-width: ${size.tablet}) and (max-width: ${size.desktop}) {
    max-width: 35rem;
    max-height: 19rem;
    display: flex;
    justify-content: space-around;
    padding: 1.2rem 1rem 1rem 1rem;
  }
`;
