import styled from "styled-components";
import { size } from "../variables";
import { TCCard } from "./TCCard";

export const TCSummaryCard = styled(TCCard)`
  margin: 0 auto;
  padding: 1rem;
  border-radius: 25px;
  background-color: ${({ colour }) => colour};
  max-width: ${({ maxWidth }) => maxWidth};
  max-width: 15rem;
  @media (min-width: ${size.tablet}) and (max-width: ${size.desktop}) {
    margin-left: 1rem;
  }
`;
