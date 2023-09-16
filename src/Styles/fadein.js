import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
export const Containerfadein = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards; /* Adjust the duration as needed */

`;

