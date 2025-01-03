import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 2rem 2rem 2rem 8rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;
export const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;
interface ContactTitleProps {
  color: string;
  fontSize?: string;
}
export const ContactTitle = styled.h2<ContactTitleProps>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '2.5rem')};
  color: ${({ theme, color }) => theme.colors[color]};
  text-align: left;
`;
export const ContactSubTitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;
export const ContactContent = styled.div`
  width: 50%;
  height: 60%;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.background2};
  box-shadow: 10px 10px 15px -3px rgba(0, 0, 0, 0.1);
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    text-align: justify;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
