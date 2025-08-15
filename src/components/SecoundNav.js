import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import './SecoundNav.css';

// Navbar Container
export function Navbar({ children, className }) {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', latest => {
    setVisible(latest > 100);
  });

  return React.createElement(
    motion.div,
    { ref, className: `navbar-container ${className || ''}` },
    React.Children.map(children, child =>
      React.isValidElement(child) ? React.cloneElement(child, { visible }) : child
    )
  );
}

// Nav Body (Desktop)
export function NavBody({ children, className, visible }) {
  const finalClass = `nav-body${visible ? ' visible' : ''}${className ? ` ${className}` : ''}`;
  return React.createElement(
    motion.div,
    {
      className: finalClass,
      transition: { type: 'spring', stiffness: 200, damping: 50 }
    },
    children
  );
}

// Nav Items
export function NavItems({ items, className, onItemClick }) {
  const [hovered, setHovered] = useState(null);

  return React.createElement(
    motion.div,
    {
      className: `nav-items ${className || ''}`,
      onMouseLeave: () => setHovered(null)
    },
    items.map((item, idx) =>
      React.createElement(
        'a',
        {
          key: `link-${idx}`,
          href: item.link,
          onMouseEnter: () => setHovered(idx),
          onClick: onItemClick
        },
        hovered === idx &&
          React.createElement('div', {
            className: 'hover-bg'
          }),
        React.createElement('span', { className: 'nav-text' }, item.name)
      )
    )
  );
}

// Mobile Nav Wrapper
export function MobileNav({ children, className, visible }) {
  const cls = `mobile-nav${visible ? ' visible' : ''}${className ? ` ${className}` : ''}`;
  return React.createElement(
    motion.div,
    {
      className: cls,
      transition: { type: 'spring', stiffness: 200, damping: 50 }
    },
    children
  );
}

// Mobile Nav Header
export function MobileNavHeader({ children, className }) {
  return React.createElement('div', { className: `mobile-nav-header ${className || ''}` }, children);
}

// Mobile Nav Menu
export function MobileNavMenu({ children, className, isOpen }) {
  return React.createElement(
    AnimatePresence,
    null,
    isOpen &&
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: `mobile-nav-menu ${className || ''}`
        },
        children
      )
  );
}

// Mobile Nav Toggle
export function MobileNavToggle({ isOpen, onClick }) {
  return React.createElement(
    'button',
    {
      className: 'mobile-nav-toggle',
      onClick
    },
    isOpen ? '✕' : '☰'
  );
}

// Navbar Logo
export function NavbarLogo() {
  return React.createElement(
    'a',
    { href: '#', className: 'navbar-logo' },
    React.createElement('img', {
      src: 'https://assets.aceternity.com/logo-dark.png',
      alt: 'logo',
      width: 30,
      height: 30
    }),
    React.createElement('span', { className: 'navbar-title' }, 'Startup')
  );
}

// Navbar Button
export function NavbarButton({ href, children, className, variant = 'primary', ...props }) {
  const baseClass = 'navbar-button';
  const variantClass = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    dark: 'btn-dark',
    gradient: 'btn-gradient'
  }[variant];

  return React.createElement(
    'a',
    {
      href,
      className: `${baseClass} ${variantClass} ${className || ''}`,
      ...props
    },
    children
  );
}
