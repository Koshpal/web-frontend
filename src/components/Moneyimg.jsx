import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Moneyimg.css';

const MoneyImg = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'center center'] // start fading in when top of image enters, finish when centered
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const brightnessValue = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const filter = useTransform(brightnessValue, b => `brightness(${b})`);

  return (
    <section className="money" ref={targetRef}>
      <motion.img
        src="moneyimg.png"
        alt="Know Your Grow Your Money Section"
        style={{
          scale,
          opacity,
          filter,
        }}
      />
    </section>
  );
};

export default MoneyImg;
