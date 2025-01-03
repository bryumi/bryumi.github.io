import styled, { keyframes } from 'styled-components';
import { css } from 'styled-components';

export const NavbarContainer = styled.div`
  position: fixed;
  z-index: 99999;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;

  height: 97.5%;

  border-radius: 0px 10px 10px 0px;
  background: ${({ theme }) => theme.colors.background2};
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 8px;
  padding: 24px 12px;

  transition:
    opacity 0.8s ease,
    max-width 0.8s ease;
  user-select: none;
`;

export const NavbarHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

interface LogoProps {
  open: boolean;
}

const expandAnimationLogo = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const LogoText = styled.img<LogoProps>`
  width: 132.53px;
  max-width: ${({ open }) => (open ? '132.53px' : '0px')};
  height: 48px;

  object-fit: cover;

  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  animation: ${expandAnimationLogo} 1s;
`;

export const LogoIcon = styled.img<LogoProps>`
  width: 50px;
  max-width: ${({ open }) => (!open ? '40px' : '0px')};
  height: 50px;

  object-fit: cover;

  visibility: ${({ open }) => (!open ? 'visible' : 'hidden')};
  animation: ${expandAnimationLogo} 1s;
  border-radius: 46%;
`;

interface NavLinkProps {
  selected: boolean;
  profile?: boolean;
}

export const NavLink = styled.div<NavLinkProps>`
  height: 40px;
  width: 100%;

  padding: 0px 10px;

  display: flex;
  align-items: center;
  gap: 10px;

  border-radius: 0.5rem;
  background: transparent;
  text-decoration: none;

  @media (max-height: 675px) {
    height: 38px;
  }

  @media (max-height: 648px) {
    height: 35px;
  }

  @media (max-height: 607px) {
    height: 33px;
  }

  @media (max-height: 584px) {
    height: 31px;
  }

  svg {
    color: ${({ selected, theme }) =>
      selected ? theme.colors.primary : theme.colors.secondary};

    @media (max-height: 745px) {
      size: 12px;
    }
  }
  path {
    fill: ${({ selected, theme, profile }) =>
      selected && profile
        ? theme.colors.primary
        : profile
          ? theme.colors.secondary
          : 'none'};
  }
  transition: all 0.2s;

  &:focus,
  &:hover {
    background: #e9e9e9ff;
    color: ${({ theme }) => theme.colors.primary};

    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
    path {
      fill: ${({ theme, profile }) =>
        profile ? theme.colors.primary : 'none'};
    }
  }
`;

export const NavLinkText = styled.p<NavLinkProps>`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.secondary};
`;

interface NavProps {
  open: boolean;
}

const expandAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const NavIconsMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;
export const NavWrapper = styled.nav<NavProps>`
  width: fit-content;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-height: 745px) {
    gap: 0.15rem;
  }

  @media (max-height: 705px) {
    gap: 0rem;
  }

  margin-top: 1rem;

  ${({ open }: NavProps) =>
    open
      ? css`
          ${NavLinkText} {
            visibility: visible;
            animation: ${expandAnimation} 1s ease forwards;
          }
        `
      : css`
          ${NavLinkText} {
            visibility: hidden;
            max-width: 0;
            padding: 0;
          }
          ${NavLink} {
            gap: 0;
            justify-content: center;
          }
          ${LogoffButton} {
            gap: 0;
            justify-content: center;
          }
        `}
`;
export const LogoffButton = styled.div`
  height: 40px;
  width: 100%;

  padding: 0px 10px;

  display: flex;
  align-items: center;
  gap: 10px;

  border-radius: 0.5rem;
  background: transparent;
  text-decoration: none;
  border: none;

  transition: all 0.2s;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:focus,
  &:hover {
    background: #e9e9e9ff;
    color: ${({ theme }) => theme.colors.primary};

    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
