import styled from 'styled-components';

export const FormationContainer = styled.div`
  padding: 2rem 2rem 2rem 8rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 769px) {
    padding: 1rem 1rem 1rem 7rem;
  }
`;
export const FormationHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;
interface FormationTitleProps {
  color: string;
  fontSize?: string;
}
export const FormationTitle = styled.h2<FormationTitleProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '2.5rem')};
  color: ${({ theme, color }) => theme.colors[color]};
  text-align: left;
  @media screen and (max-width: 769px) {
    width: 80%;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.5rem')};
  }
  @media screen and (max-width: 420px) {
    width: 80%;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};
  }
`;
export const FormationSubTitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  @media screen and (max-width: 769px) {
    width: 90%;
    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.5;
      text-align: justify;
    }
  }
`;
export const FormationContent = styled.div`
  width: 50%;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.background2};
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    text-align: justify;
  }
  @media screen and (max-width: 769px) {
    width: 90%;
    p {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.5;
      text-align: justify;
    }
  }
`;
