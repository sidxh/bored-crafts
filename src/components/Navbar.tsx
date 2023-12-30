import React from 'react';

interface NavbarProps {
  sticky?: boolean;
  align?: 'left' | 'center' | 'right';
  backgroundColor?: string;
  textColor?: string;
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ sticky, align, backgroundColor, textColor, children }) => {
  const navbarStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: backgroundColor || '#333',
    color: textColor || '#fff',
    position: sticky ? 'sticky' : 'relative',
    top: 0,
    zIndex: 1000,
  };

  return (
    <nav style={navbarStyle}>
      {children}
    </nav>
  );
};

export default Navbar;
