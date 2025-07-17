import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Statistics.css';
import img1 from '../assets/Statistics1.png';
import img2 from '../assets/Statistics2.png';
import img3 from '../assets/Statistics3.png';


const Statistics = () => {
  const [scrollDir, setScrollDir] = useState('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rows = [
    {
      key: 'block1',
      heading: 'We track your money so you don’t have to',
      subheading: 'Set it and Own it',
      paragraph:
        'Your dashboard updates daily with a completed billable time report. We use AI to match your work to relevant client matters, harmonize multi-tasking activity and generate narrative descriptions.',
      linkText: 'Request a demo →',
      imageSrc: 'img1.png',
      imageAlt: 'Income & Expenses',
      reverse: false,
    },
    {
      key: 'block2',
      heading: 'Track what matters, ignore what doesn’t.',
      subheading: 'Your money, your rules',
      paragraph:
        'The more you use Billables AI, the better it works for you. Over time, your dashboard will evolve to help you bill the way you (and your clients) prefer.',
      linkText: 'Get yours →',
      imageSrc: 'img2.png',
      imageAlt: 'Billing Block',
      reverse: true,
    },
    {
      key: 'block3',
      heading: 'Koshpal learns your habits and adjusts in real time.',
      subheading: 'Your personalized money tracker',
      paragraph:
        'With Billables AI, the only person who can see and manage your time reports is you. You can edit or delete any of your billable records before they are exported or shared with others.',
      linkText: 'See it in action →',
      imageSrc: 'img3.png',
      imageAlt: 'Assign Unbilled Time',
      reverse: false,
    },
  ];

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const inView1 = useInView(ref1, { once: false });
  const inView2 = useInView(ref2, { once: false });
  const inView3 = useInView(ref3, { once: false });

  const refs = [ref1, ref2, ref3];
  const inViews = [inView1, inView2, inView3];

  return (
    <section className="feature-section" id= 'statistics' >
      {rows.map((row, index) => {
        const inView = inViews[index];
        const key = row.key;

        // ✅ Define animation direction block-by-block
        let animationX = 0;
        if (key === 'block1' || key === 'block3') {
          animationX = scrollDir === 'down' ? 100 : -100;
        } else if (key === 'block2') {
          animationX = scrollDir === 'down' ? -100 : 100;
        }

        // ✅ Delay: Block 1 (more), Block 3 (less)
        let delay = 0.5;
        if (key === 'block1') delay = 0.7;
        if (key === 'block3') delay = 0.2;

        return (
          <motion.div
            ref={refs[index]}
            key={key}
            className={
              row.reverse
                ? 'row second reverse'
                : key === 'block2'
                ? 'row second'
                : 'row'
            }
            initial={{ opacity: 0, x: animationX }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: animationX }}
            transition={{ duration: 1, delay }}
          >
            <div className="text">
              <h4 className="subheading">{row.subheading}</h4>
              <h2 className="heading">{row.heading}</h2>
              <p>{row.paragraph}</p>
              <a href="#" className="link">{row.linkText}</a>
            </div>
            <div className="image">
              <img src={row.imageSrc} alt={row.imageAlt} />
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Statistics;
