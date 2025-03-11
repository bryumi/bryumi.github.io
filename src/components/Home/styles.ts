import styled, { keyframes } from 'styled-components';

const FadeInAnimation = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`;
export const HomeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow-y: hidden;

  @media screen and (max-width: 769px) {
    flex-direction: column;
    overflow: auto;
  }
`;
export const Image = styled.img`
  width: 50%;
  height: 100vh;

  object-fit: cover;
  border-radius: 15px;
  animation: ${FadeInAnimation} 300ms linear;

  box-shadow: 10px 10px 34px -3px rgba(0, 0, 0, 0.1);

  position: absolute;
  left: -10px;
  top: 0;
  z-index: -1;
  @media screen and (max-width: 769px) {
    height: 50%;
    width: 100%;
    left: 0;
    object-fit: cover;
  }
`;
export const RightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  left: 3rem;
  @media screen and (max-width: 769px) {
    height: 50%;
    width: 100%;
    top: -2rem;
  }
`;
export const TextContainer = styled.h1`
  width: 80%;
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  @media screen and (max-width: 769px) {
    width: 80%;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 769px) {
    width: 80%;
    font-size: 1rem;
  }
`;

export const ButtonContent = styled.button`
  width: 50%;
  background-image: url('/images/background-button.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 500;

  padding: 1rem;
  border: none;
  border-radius: 10px;
  box-shadow: 18px 16px 19px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
