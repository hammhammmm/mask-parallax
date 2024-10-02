'use client'
import { useRef, useEffect,useState } from 'react';
import styles from './page.module.css'

export default function Home() {

  const container = useRef(null);
  const stickyMask = useRef(null);

  // Start with a smaller size and zoom in
  const initialMaskSize = 20;  // Start zoomed out
  const targetMaskSize = 0.3;  // End at a smaller size (zoomed in)
  const easing = 0.15;
  let easedScrollProgress = 0;

  const [scrollY, setScrollY] = useState(0)
  const [innerHeight, setInnerHeight] = useState(0)
  useEffect(() => {
      const handleScroll = () => {
          setScrollY(window.scrollY)
      }

      // Attach the scroll event listener
      window.addEventListener("scroll", handleScroll)

      // Clean up the event listener on component unmount
      return () => {
          window.removeEventListener("scroll", handleScroll)
      }
  }, [])

  useEffect( () => {
    requestAnimationFrame(animate)
    if(window.innerHeight){
      setInnerHeight(innerHeight)
    }
  }, [])

  const animate = () => {
    const maskSizeProgress = targetMaskSize + (initialMaskSize - targetMaskSize) * (1 - getScrollProgress());
    stickyMask.current.style.webkitMaskSize = maskSizeProgress * 100 + "%";
    requestAnimationFrame(animate)
  }

  const getScrollProgress = () => {
    const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  }

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
       <p className={styles.ss}>{scrollY}</p>
        
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop
          style={
            {
              transition: "0.5s ease-out",
              opacity: `${scrollY < innerHeight ? 1 : 0} `,
              animation: `${scrollY < innerHeight ? "fadeIn .5s ease-out" : "fadeOut 0.5s ease-in"} `,
    
            }}>
            {/* <source src="https://storage.googleapis.com/aristreet.com/videos/Hero_30sec%20vdo%20(1).mp4" type="video/mp4"/> */}
            <source src="/medias/video.mp4" type="video/mp4"/>
          </video>

        <div 
         style={{
          transition: "0.5s ease-out",
          opacity: `${scrollY >= innerHeight ? 1 : 0} `,
          animation: `${scrollY >= innerHeight ? "fadeIn .5s ease-in" : "fadeOut 0.5s ease-out"} `,

          background: "#432c99",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          zIndex: "0",
          backgroundSize: "cover",
      }}></div>

        </div>

      </div>
    </main>
  )
}
