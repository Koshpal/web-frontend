import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import "./Articalpointer.css";

function ArticlePointer(props) {
  const { children, title, className } = props;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef(null);
  const [isInside, setIsInside] = useState(false);
  const [rect, setRect] = useState(null);

  useEffect(function () {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = function (e) {
    if (!rect) return;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    x.set(e.clientX - rect.left + scrollX);
    y.set(e.clientY - rect.top + scrollY);
  };

  return React.createElement(
    "div",
    {
      ref: ref,
      className: "article-container " + (className || ""),
      onMouseEnter: function () {
        setIsInside(true);
      },
      onMouseLeave: function () {
        setIsInside(false);
      },
      onMouseMove: handleMouseMove,
    },
    React.createElement(
      AnimatePresence,
      null,
      isInside &&
        React.createElement(PointerFollower, {
          x: x,
          y: y,
          title: title,
        })
    ),
    children
  );
}

function PointerFollower(props) {
  const { x, y, title } = props;
  const colors = [
    "#0ea5e9",
    "#737373",
    "#14b8a6",
    "#22c55e",
    "#3b82f6",
    "#ef4444",
    "#eab308",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return React.createElement(
    motion.div,
    {
      className: "pointer-wrapper",
      style: { top: y, left: x },
      initial: { scale: 1, opacity: 1 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0, opacity: 0 },
    },
    React.createElement(
      "svg",
      {
        className: "pointer-icon",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
      },
      React.createElement("path", {
        d: "M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z",
      })
    ),
    React.createElement(
      motion.div,
      {
        className: "pointer-label",
        style: { backgroundColor: randomColor },
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.5, opacity: 0 },
      },
      title || "William Shakespeare"
    )
  );
}

export default ArticlePointer;
