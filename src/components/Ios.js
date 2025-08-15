import React from 'react';
import './Ios.css';

const Ios = () => {
  return React.createElement(
    'section',
    { className: 'clarity-section' },
    [
      React.createElement('h1', { key: 'heading' }, 'Build Your Financial Clarity'),
      React.createElement(
        'p',
        { className: 'subtitle', key: 'subtitle' },
        'Simplify how you track, plan, and grow your money — all in one app.\nYour money deserves better control. Let’s start today.'
      ),
      React.createElement(
        'div',
        { className: 'clarity-grid', key: 'grid' },
        [
          // Left Column
          React.createElement(
            'div',
            { className: 'left-column', key: 'left' },
            [
              React.createElement(
                'div',
                { className: 'card', key: 'track-card' },
                [
                  React.createElement('img', {
                    src: 'ios1.png',
                    alt: 'Finance Icon',
                  }),
                  React.createElement('h3', {}, 'TRACK YOUR FINANCES'),
                  React.createElement(
                    'p',
                    {},
                    'We auto-capture UPI transaction SMS so you never miss a payment log. Just tag the category — no typing needed.'
                  )
                ]
              ),
              React.createElement(
                'div',
                { className: 'card', key: 'wallet-card' },
                [
                  React.createElement('img', {
                    src: 'ios2.png',
                    alt: 'Wallet Icon',
                  }),
                  React.createElement('h3', {}, '100% SECURE WALLET'),
                  React.createElement(
                    'p',
                    {},
                    'Your data, your control\nKoshpal doesn’t link your bank account or store your data without permission. Privacy-first by design.'
                  )
                ]
              )
            ]
          ),

          // Center Column
          React.createElement(
            'div',
            { className: 'center-column', key: 'center' },
            React.createElement(
              'div',
              { className: 'center-card' },
              [
                React.createElement('h3', {}, 'IOS & ANDROID APP'),
                React.createElement(
                  'p',
                  {},
                  'We are gearing up to launch a seamless experience that simplifies how you track, budget, and understand your money — all in one powerful app.'
                ),
                React.createElement('img', {
                  src: 'ios3.png',
                  alt: 'App Mockup',
                })
              ]
            )
          ),

          // Right Column
          React.createElement(
            'div',
            { className: 'right-column', key: 'right' },
            [
              React.createElement(
                'div',
                { className: 'card', key: 'insights-card' },
                [
                  React.createElement('img', {
                    src: 'ios4.png',
                    alt: 'Insights Icon',
                  }),
                  React.createElement('h3', {}, 'VISUAL INSIGHTS'),
                  React.createElement(
                    'p',
                    {},
                    'See your money, clearly\nWe turn your spending into beautiful charts and smart summaries'
                  )
                ]
              ),
              React.createElement(
                'div',
                { className: 'card', key: 'notify-card' },
                [
                  React.createElement('img', {
                    src: 'ios5.png',
                    alt: 'Notify Icon',
                  }),
                  React.createElement(
                    'p',
                    { className: 'notify' },
                    '+\nStay on track — instantly Koshpal notifies you in real time, so your goals stay intact.'
                  )
                ]
              )
            ]
          )
        ]
      )
    ]
  );
};

export default Ios;
