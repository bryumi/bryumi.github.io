import styled from 'styled-components';
interface ContainerProps {
  currentPage: string;
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: ${({ currentPage }) =>
    currentPage === 'home' ? 'hidden' : 'auto'};
`;
