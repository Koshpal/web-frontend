import React from 'react';
import './Notify.css';

const Notify = () => {
  return React.createElement(
    'div',
    { className: 'notify-wrapper' },
    React.createElement(
      'section',
      { className: 'notify-box' },
      [
        // Left Side Content
        React.createElement(
          'div',
          { className: 'notify-left', key: 'left' },
          [
            React.createElement('img', {
              src: 'notify1.png',
              alt: 'Illustration',
              className: 'illustration'
            }),
            React.createElement(
              'h1',
              {},
              'Explore endless possibilities',
              React.createElement('br'),
              'with FinanceFlow'
            ),
            React.createElement(
              'p',
              {},
              'Explore what money clarity feels like with Koshpal',
              React.createElement('br'),
              'Manage bills, track shared expenses, and grow smarter with',
              React.createElement('br'),
              'tailored insights and advisory tools — built just for you.'
            ),
            React.createElement(
              'a',
              { href: '#getintouch' }, 
              
              React.createElement(
              'button',
              {},
              'Get notified'
            )
          )
          ]
        ),

        // Right Side Phone Mockup
        React.createElement(
          'div',
          { className: 'notify-right', key: 'right' },
          React.createElement('img', {
            src: 'notify2.png',
            alt: 'Phone Mockups',
            className: 'phones'
          })
        )
      ]
    )
  );
};

export default Notify;
