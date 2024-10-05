"use client";
import { useRef, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  // Reference to the container element
  const containerRef = useRef(null);
  // Reference to the sticky mask element
  const stickyMaskRef = useRef(null);
  // Ref to store the eased scroll progress (mutable across renders)
  const easedScrollProgress = useRef(0);

  // Initial and target sizes for the mask animation
  const initialMaskSize = 20; // Start zoomed out
  const targetMaskSize = 0.3; // End at a smaller size (zoomed in)
  const easing = 0.15; // Easing factor for smooth transition

  useEffect(() => {
    let animationFrameId;

    // Animation function to update mask size based on scroll progress
    const animate = () => {
      // Ensure the refs are available before proceeding
      if (!containerRef.current || !stickyMaskRef.current) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      // Calculate the total scrollable height
      const containerHeight =
        containerRef.current.getBoundingClientRect().height;
      const scrollableHeight = containerHeight - window.innerHeight;

      // Get the current scroll position of the sticky mask
      const scrollPosition = stickyMaskRef.current.offsetTop;

      // Calculate scroll progress as a value between 0 and 1
      const scrollProgress = scrollPosition / scrollableHeight;

      // Apply easing to the scroll progress for smooth animation
      const delta = scrollProgress - easedScrollProgress.current;
      easedScrollProgress.current += delta * easing;

      // Calculate the current mask size based on eased scroll progress
      const maskSizeProgress =
        targetMaskSize +
        (initialMaskSize - targetMaskSize) * (1 - easedScrollProgress.current);

      // Update the CSS mask size property to create the zoom effect
      stickyMaskRef.current.style.webkitMaskSize = `${maskSizeProgress * 100}%`;

      // Continue the animation loop
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup function to cancel the animation frame on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className={styles.main}>
      {/* Container element for the content */}
      <div ref={containerRef} className={styles.container}>
        {/* Sticky mask element that applies the zoom effect */}
        <div ref={stickyMaskRef} className={styles.stickyMask}>
          {/* Video element that plays in the background */}
          <video autoPlay muted loop>
            <source src="/images/AdobeStock_342759371.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}