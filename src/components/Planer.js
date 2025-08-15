import React from 'react';
import './Planer.css';

const Planer = () => {
  return React.createElement(
    'section',
    { className: 'smart-finance-section', id: 'about-us' },
    [
      React.createElement(
        'div',
        { className: 'cta-button', key: 'cta' },
        '✨ How do we make your money smarter?'
      ),
      React.createElement(
        'h1',
        { className: 'main-heading', key: 'heading' },
        ['We turn your spending into ', React.createElement('br'), 'smarter financial decisions.']
      ),
      React.createElement(
        'p',
        { className: 'subtext', key: 'subtext' },
        'Koshpal helps you track, budget, and grow your money with real-time insights and a privacy-first approach'
      ),
      React.createElement(
        'div',
        { className: 'info-cards', key: 'cards' },
        [
          // Individuals Card
          React.createElement(
            'div',
            { className: 'box-card green', key: 'green' },
            [
              React.createElement('h3', {}, 'Individuals'),
              React.createElement('h4', {}, 'Track your money your way'),
              React.createElement('p', {}, 'Effortless UPI expense tracking with complete privacy — no bank linking, just simple, smart summaries.')
            ]
          ),
          // Savers Card
          React.createElement(
            'div',
            { className: 'box-card pink', key: 'pink' },
            [
              React.createElement('h3', {}, 'Savers'),
              React.createElement('h4', {}, 'Smarter budgets that adapt to you'),
              React.createElement('p', {}, 'Set your budget—Koshpal keeps you aligned with real-time alerts and smart insights.')
            ]
          ),
          // Planners Card
          React.createElement(
            'div',
            { className: 'box-card orange', key: 'orange' },
            [
              React.createElement('img', {
                src: 'planer1.png',
                className: 'planner-img',
                alt: 'Planners Image',
                key: 'planner-img'
              }),
              React.createElement(
                'div',
                { className: 'planner-text', key: 'planner-text' },
                [
                  React.createElement('h3', {}, 'Planners'),
                  React.createElement('h4', {}, 'Built for modern personal finance'),
                  React.createElement('p', {}, 'Track shared expenses, gain clear visual insights, and get personalized guidance to grow your money smarter.')
                ]
              )
            ]
          ),
          // Vision Card
          React.createElement(
            'div',
            { className: 'box-card blue vision', key: 'blue' },
            [
              React.createElement(
                'div',
                { key: 'vision-text' },
                [
                  React.createElement('h3', {}, 'Koshpal Vision'),
                  React.createElement('h4', {}, 'Built for what real users need'),
                  React.createElement(
                    'ul',
                    {},
                    [
                      React.createElement('li', { key: 'li1' }, '72% struggle to track daily UPI spends'),
                      React.createElement('li', { key: 'li2' }, '60% have never followed a budget'),
                      React.createElement('li', { key: 'li3' }, '80% want privacy-first money apps'),
                      React.createElement('li', { key: 'li4' }, '65% prefer quick transaction categorization')
                    ]
                  )
                ]
              ),
              React.createElement('img', {
                src: 'planer2.png',
                alt: 'Vision',
                className: 'vision-img',
                key: 'vision-img'
              })
            ]
          )
        ]
      )
    ]
  );
};

export default Planer;
