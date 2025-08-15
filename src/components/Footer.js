import React from 'react';
import './Footer.css';

const Footer = () => {
  return React.createElement(
    'div',
    { className: 'footer' },

    // Left Content
    React.createElement(
      'div',
      { className: 'left-content' },
      [
        React.createElement(
          'h3',
          { key: 'footer-heading' },
          React.createElement('span', null, 'Break free from'),
          React.createElement('br'),
          'manual time-tracking.'
        ),
        React.createElement('img', {
          key: 'logo',
          src: 'footer1.png',
          alt: 'KOSHPAL Logo',
          className: 'brand-logo'
        })
      ]
    ),

    // Right Content
    React.createElement(
      'div',
      { className: 'right-content' },
      [

        // Top-right social + nav
        React.createElement(
          'div',
          { className: 'top-right', key: 'top-right' },
          [
            React.createElement(
              'div',
              { className: 'social' },
              [
                React.createElement('a', { href: '#', key: 'linkedin' },
                  React.createElement('img', { src: 'linkedin black.png', alt: 'LinkedIn' })
                ),
                /*React.createElement('a', { href: '#', key: 'facebook' },
                  React.createElement('img', { src: 'facebook black.png', alt: 'Facebook' })
                ),
                React.createElement('a', { href: '#', key: 'instagram' },
                  React.createElement('img', { src: 'instagram black.png', alt: 'Instagram' })
                )*/
              ]
            ),
            React.createElement(
              'div',
              { className: 'nav' },
              React.createElement(
                'ul',
                null,
                [
                  React.createElement('li', { key: 'about' }, React.createElement('a', { href: '#about-us' }, 'About Us')),
                  React.createElement('li', { key: 'blog' }, React.createElement('a', { href: '#articles-link' }, 'Article')),
                  React.createElement('li', { key: 'careers' }, React.createElement('a', { href: '#statistics' }, 'Services')),
                  React.createElement('li', { key: 'contact' }, React.createElement('a', { href: '#getintouch' }, 'Contact Us'))
                ]
              )
            )
          ]
        ),

        // Illustration
        React.createElement('img', {
          key: 'illustration',
          src: 'footer2.png',
          alt: 'Footer Illustration',
          className: 'footer-illustration'
        }),

        // Footer Links
        React.createElement(
          'div',
          { className: 'footer-links', key: 'footer-links' },
          [
            React.createElement('a', { href: '#', key: 'privacy' }, 'Privacy'),
            React.createElement('a', { href: '#', key: 'terms' }, 'Site Terms'),
            React.createElement('a', { href: '#', key: 'tos' }, 'Terms of Service')
          ]
        )
      ]
    )
  );
};

export default Footer;
