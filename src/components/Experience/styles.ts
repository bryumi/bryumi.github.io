import styled from 'styled-components';

export const ExperienceContainer = styled.div`
  padding: 2rem 2rem 2rem 8rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;
export const ExperienceHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;
interface ExperienceTitleProps {
  color: string;
  fontSize?: string;
}
export const ExperienceTitle = styled.h2<ExperienceTitleProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '2.5rem')};
  color: ${({ theme, color }) => theme.colors[color]};
  text-align: left;
`;
export const ExperienceSubTitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;
export const Header = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr 1fr;
  grid-column-gap: 1rem;
`;
export const ExperienceContent = styled.div<TextProps>`
  width: 50%;
  height: ${({ showText, index, selectedIndex }) =>
    showText && selectedIndex === index ? 'auto' : '65px'};
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.background2};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
interface TextProps {
  showText: boolean;
  index: number;
  selectedIndex: number;
}
export const TextContainer = styled.div<TextProps>`
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    text-align: justify;
  }
  overflow: hidden; /* Garante que o conteúdo escondido não será visível */
  max-height: ${({ showText, selectedIndex, index }) =>
    showText && selectedIndex === index ? '1000px' : '0px'};
  opacity: ${({ showText, selectedIndex, index }) =>
    showText && selectedIndex === index ? 1 : 0};
  transition:
    max-height 0.6s ease-in-out,
    opacity 0.6s ease-in-out;
`;
