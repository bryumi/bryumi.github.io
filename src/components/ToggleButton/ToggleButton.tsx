// src/components/ToggleButton.tsx
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from './../../components/ThemeProviderToggle/ThemeProviderToggle';
import { ToggleContainer } from './styles';
import { MoonStars, Sun } from 'phosphor-react';

const Button = styled.button`
  margin-left: 6rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background 0.3s,
    color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const ToggleButton: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null; // Garantir que o contexto exista
  }

  const { toggleTheme, theme } = themeContext;

  return (
    // <Button onClick={toggleTheme}>
    //   {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    // </Button>
    <ToggleContainer>
      <input type="checkbox" id="toggle" onChange={toggleTheme} />
      <div className="label-container">
        <span className="inactive-text">
          <Sun size={20} />
        </span>
        <span className="active-text">
          <MoonStars size={20} />
        </span>
      </div>
    </ToggleContainer>
  );
};

export default ToggleButton;
