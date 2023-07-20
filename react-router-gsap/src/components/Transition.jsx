import React, { useEffect, useRef } from "react";
import { Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";

const PageTransition = ({ children }) => {
	const location = useLocation();
	const transitionRef = useRef(null);
  
	useEffect(() => {
	  const element = transitionRef.current;
  
	  // Ensure the element exists before applying the animation
	  if (!element) return;
  
	  // Initial state (hidden)
	  gsap.set(element, { opacity: 0 });
  
	  // Enter transition
	  gsap.to(element, {
		opacity: 1,
		duration: 1,
		ease: "power2.inOut",
	  });
	}, [location]);
  
	return (
	  <Transition
		in={true}
		appear={true}
		timeout={{
		  appear: 0,
		  enter: 1000, // This should match the duration of the GSAP animation
		  exit: 0,
		}}
	  >
		{(status) => (
		  <div ref={transitionRef} className={`page-transition ${status}`}>
			{children}
		  </div>
		)}
	  </Transition>
	);
  };
  
  export default PageTransition;
  