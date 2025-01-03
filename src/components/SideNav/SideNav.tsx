import { useEffect, useRef, useState } from 'react';

import navLinks from './navLinks';

import {
  LogoffButton,
  LogoIcon,
  LogoText,
  NavbarContainer,
  NavbarHeader,
  NavIconsMenu,
  NavLink,
  NavLinkText,
  NavWrapper,
} from './styles';

interface SideNavProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}
const SideNav = ({ currentPage, onPageChange }: SideNavProps) => {
  const [expanded, setExpanded] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <NavbarContainer ref={navbarRef}>
        <NavbarHeader>
          {expanded ? (
            <LogoText
              src="/images/logo-sem-fundo.png"
              alt="logo"
              open={expanded}
              onClick={() => setExpanded(false)}
            />
          ) : (
            <LogoIcon
              src="/images/logo2.png"
              alt="logo"
              open={expanded}
              onClick={() => setExpanded(true)}
            />
          )}
        </NavbarHeader>

        <NavWrapper open={expanded}>
          <NavIconsMenu>
            {navLinks.map(({ href, icon, text }) => (
              <NavLink
                key={href}
                selected={currentPage === text}
                onClick={() => onPageChange(text)}
              >
                {icon}
                <NavLinkText selected={false}>{text}</NavLinkText>
              </NavLink>
            ))}
          </NavIconsMenu>
        </NavWrapper>
      </NavbarContainer>
    </>
  );
};

export default SideNav;
