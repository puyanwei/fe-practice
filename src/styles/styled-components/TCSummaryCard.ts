import styled from "styled-components";
import { size } from "../variables";
interface TCSummaryCardProps {
  colour: string;
}

export const TCSummaryCard = styled.div<TCSummaryCardProps>`
  padding: 1rem;
  border-radius: 25px;
  background-color: ${({ colour }) => colour};
  @media (min-width: ${size.tablet}) and (max-width: ${size.desktop}) {
    padding-top: 1.5rem;
    height: 20rem;
    width: 50%;
    > span {
      display: block;
      height: 8.9rem;
    }
  }
`;
