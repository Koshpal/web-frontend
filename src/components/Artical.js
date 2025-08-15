import React from 'react';
import './Artical.css';

const Article = () => {
  const articles = [
    {
      id: 1,
      image: 'article1.png', 
      badge: 'PhonePe',
      title: 'Digital Payments in India: A US$10 Trillion Opportunity',
      link: 'https://www.phonepe.com/pulse-static-api/v1/static/docs/PhonePe_Pulse_BCG_report.pdf' // 👈 your route or external link here
    },
    {
      id: 2,
      image: 'article2.png',
      badge: 'Bharat UPI',
      title: 'How the Gig Economy Is Leveraging UPI Payments',
      link: 'https://www.bharatupi.com/how-the-gig-economy-is-leveraging-upi-payments/'
    },
    {
      id: 3,
      image: 'article3.png',
      badge: 'Inspiration',
      title: 'UPI: Revolutionizing Digital Payments in India',
      link: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2079544'
    }
  ];

  return React.createElement(
    React.Fragment,
    null,
    [
      React.createElement('h2', { className: 'headline', key: 'headline' }, 'Recent Articles'),
      React.createElement(
        'section',
        { className: 'artical-container', id: 'articles-link', key: 'articles' },
        articles.map((article) =>
          React.createElement(
            'div',
            { className: 'artical', key: article.id },
            [
              React.createElement('img', {
                src: article.image,
                alt: 'ulmo app',
                className: 'artical-image'
              }),
              React.createElement(
                'div',
                { className: 'artical-content' },
                [
                  React.createElement('span', { className: 'badge' }, article.badge),
                  React.createElement('h3', null, article.title),
                  React.createElement(
                    'a',
                    {
                      className: 'read-more',
                      href: article.link,
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    },
                    'Read more'
                  )
                ]
              )
            ]
          )
        )
      )
    ]
  );
};

export default Article;
