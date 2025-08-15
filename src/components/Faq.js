import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const questions = [
    'What is Koshpal?',
    'Do I need to link my bank account to use Koshpal?',
    'Is Koshpal safe to use?',
    'Do I need to provide any personal information to use Koshpal?',
    'Can I track payments from multiple UPI accounts?',
    'Will Koshpal remind me if I am about to overspend?',
    ' Will Koshpal sync with my bank or payment apps?'
  ];

  const answers = [
    'Koshpal is a personal finance app that helps you track your UPI and cash payments, set budgets, get real time alerts, and understand your spending through easy-to-read visual insights. ',
    'No. Koshpal works without linking your bank account. We use privacy first methods like SMS  parsing to track transactions securely. ',
    'Yes! Koshpal prioritises your privacy and security. We never store any personal details or sensitive financial information. The app only processes UPI notifications to give you insights into your transaction history.',
    'No, Koshpal doesn’t require any personal information. It only needs access to your UPI notification history to track and display your payment details.',
    'Yes! Koshpal supports tracking payments across all your UPI accounts in one place, making it easy to manage and view transactions from different sources.',
    'Yes. Koshpal sends smart alerts when you are close to or exceed your set budgets, helping you stay in control of your spending.',
    'Koshpal does not sync with your bank or payment apps. It only reads UPI notifications that you receive on your phone, ensuring that your financial data remains secure'
  ];

  const [selectedIndex, setSelectedIndex] = useState(0); // default to answer 1


  return React.createElement(
    'div',
    { className: 'container' },
    [
      // Left: FAQ Questions
      React.createElement(
        'div',
        { className: 'faq-section', key: 'faq' },
        [
          React.createElement('h2', {}, 'FAQs'),
          React.createElement(
            'div',
            { className: 'faq-list' },
            questions.map((question, index) =>
              React.createElement(
                'div',
                {
                  key: index,
                  className:
                    'faq-item' + (selectedIndex === index ? ' active' : ''),
                  onClick: () => setSelectedIndex(index),
                  'data-index': index
                },
                question
              )
            )
          )
        ]
      ),

      // Right: Answer Section
      React.createElement(
        'div',
        { className: 'answer-section', key: 'answer' },
        [
          React.createElement('h2', {}, 'Answer'),
          React.createElement(
            'div',
            {
              id: 'answerBox',
              className:
                'answer-box' + (selectedIndex === null ? ' hidden' : '')
            },
            [
              React.createElement('img', {
                src: 'FAQIMG.png',
                alt: 'icon',
                className: 'icon'
              }),
              React.createElement(
                'div',
                { id: 'answerText' },
                selectedIndex !== null
                  ? answers[selectedIndex]
                  : 'Click a question to see the answer.'
              )
            ]
          )
        ]
      )
    ]
  );
};

export default Faq;
