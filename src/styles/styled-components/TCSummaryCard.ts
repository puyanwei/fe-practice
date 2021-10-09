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
    width: 50%;
    height: 16.7rem;
    margin-left: 0.5rem;
    padding-top: 1.5rem;
    > span {
      display: block;
      height: 5.6rem;
    }
  }
`;
