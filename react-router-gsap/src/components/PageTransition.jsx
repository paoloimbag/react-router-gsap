import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power1.inOut',
    });
  }, []);

  return <div ref={containerRef}>{children}</div>;
};

export default PageTransition;
