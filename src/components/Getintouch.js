import React from 'react';
import './Getintouch.css';


const GetInTouch = () => {
  return React.createElement(
    'div',
    { className: 'contact-wrapper', id: 'getintouch' },
    React.createElement(
      'section',
      { className: 'contact-grid' },
      [
        // Left Side: Contact Form
        React.createElement(
          'div',
          { className: 'contact-form', key: 'form' },
          [
            React.createElement('h1', { key: 'title' }, 'Get in Touch'),
            React.createElement(
              'form',
              { onSubmit: (e) => e.preventDefault(), key: 'form-fields' },
              [
                React.createElement(
                  'div',
                  { className: 'input-row', key: 'inputs' },
                  [
                    React.createElement('input', {
                      type: 'text',
                      placeholder: 'First Name',
                      required: true,
                      key: 'fname'
                    }),
                    React.createElement('input', {
                      type: 'text',
                      placeholder: 'Last Name',
                      required: true,
                      key: 'lname'
                    })
                  ]
                ),
                React.createElement('input', {
                  type: 'email',
                  placeholder: 'Email Address',
                  required: true,
                  key: 'email'
                }),
                React.createElement('input', {
                  type: 'text',
                  placeholder: 'Subject Line',
                  required: true,
                  key: 'subject'
                }),
                React.createElement('textarea', {
                  placeholder: 'Drop Your Message...',
                  required: true,
                  key: 'message'
                }),
                React.createElement(
                  'div',
                  { className: 'checkbox-container', key: 'checkbox' },
                  [
                    React.createElement('input', {
                      type: 'checkbox',
                      id: 'agree',
                      required: true,
                      key: 'checkbox-input'
                    }),
                    React.createElement(
                      'label',
                      { htmlFor: 'agree', key: 'checkbox-label' },
                      [
                        "I've read and agree with ",
                        React.createElement('a', { href: '#', key: 'terms' }, 'terms'),
                        ' & ',
                        React.createElement('a', { href: '#', key: 'privacy' }, 'privacy policy'),
                        '.'
                      ]
                    )
                  ]
                ),
                React.createElement(
                  'button',
                  {
                    type: 'submit',
                    className: 'submit-btn',
                    key: 'submit'
                  },
                  'Send'
                )
              ]
            )
          ]
        ),

        // Right Side: Contact Info
        React.createElement(
          'div',
          { className: 'contact-info', key: 'info' },
          [
            // Phone
            React.createElement(
              'div',
              { className: 'info-item', key: 'phone' },
              [
                React.createElement('img', {
                  src: 'git1.png',
                  alt: 'Phone',
                  key: 'phone-icon'
                }),
                React.createElement('span', { key: 'phone-text' }, '+91-9983444740')
              ]
            ),

            // Email
            React.createElement(
              'div',
              { className: 'info-item', key: 'email' },
              [
                React.createElement('img', {
                  src: 'git2.png',
                  alt: 'Email',
                  key: 'email-icon'
                }),
                React.createElement('span', { key: 'email-text' }, 'koshpal.official@gmail.com')
              ]
            ),

            // Social Media (LinkedIn with icon + text)
            React.createElement(
              'div',
              { className: 'socials', key: 'socials' },
              [
                React.createElement(
                  'a',
                  {
                    href: 'https://www.linkedin.com/company/koshpal',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    'aria-label': 'LinkedIn',
                    className: 'social-link',
                    key: 'linkedin-link'
                  },
                  [
                    React.createElement('img', {
                      src: 'linkedin.png',
                      alt: 'LinkedIn',
                      key: 'linkedin-icon'
                    }),
                    React.createElement('span', { key: 'linkedin-text' }, 'LinkedIn')
                  ]
                )
              ]
            ),

            // Illustration
            React.createElement(
              'div',
              { className: 'contact-illustration', key: 'illustration' },
              React.createElement('img', {
                src: 'git3.png',
                alt: 'Illustration',
                key: 'illustration-img'
              })
            )
          ]
        )
      ]
    )
  );
};

export default GetInTouch;
