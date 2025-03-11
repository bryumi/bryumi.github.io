import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #CBD5E1;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: #ec78b8;
      border-radius: 10px;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  html {
    @media (max-width: 1440px) {
      font-size: 93.75%;
    }
  }
  input, button, textarea {
    font-family: 'Inter', sans-serif;
  }
  body {
    font-family: 'Inter', sans-serif;
    text-rendering: optimizeLegibility;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif; /* Fonte secundária */
  }
  button {
    cursor: pointer;
  }
`;
