import React, { useState } from 'react';
import './Navbar.css';

// Navbar Wrapper
export function Navbar() {
  return React.createElement(
    'div',
    { className: 'navbar-wrapper' },
    React.createElement(NavbarLogo),
    React.createElement(NavbarCenter),
    React.createElement(NavbarButton, {
      href: '#getintouch',
      children: 'Contact Us',
      className: 'navbar-button-container'
    })
  );
}

// Navbar Logo
export function NavbarLogo() {
  return React.createElement(
    'a',
    { href: '#', className: 'navbar-logo' },
    React.createElement('img', {
      src: 'logo.png',
      alt: 'logo',
      width: 30,
      height: 30
    }),
    React.createElement('span', { className: 'navbar-title' }, '')
  );
}

// Center Navigation
export function NavbarCenter() {
  return React.createElement(
    'div',
    { className: 'navbar-center-wrapper' },
    React.createElement(NavItems, {
      items: [
        { name: 'Home', link: './Hero.js' },
        { name: 'About us', link: '#about-us' },
        { name: 'Services', link: '#statistics' }
      ]
    })
  );
}

// Nav Items
export function NavItems({ items, className, onItemClick }) {
  const [hovered, setHovered] = useState(null);

  return React.createElement(
    'div',
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
          onClick: onItemClick,
          className: hovered === idx ? 'active' : ''
        },
        React.createElement('span', { className: 'nav-text' }, item.name)
      )
    )
  );
}

// Navbar Button
export function NavbarButton({ href, children, className = '' }) {
  return React.createElement(
    'a',
    {
      href,
      className: `${className}`
    },
    children
  );
}
