"use client"
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "@/components/layers/layer.module.css"

gsap.registerPlugin(ScrollTrigger);

const AirpodsAnimation = () => {

  const [count, setCount] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [innerCircleSize, setInnerCircleSize] = useState(10);
  const [outerCircleSize, setOuterCircleSize] = useState(10);



  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const maxScrollDistance = document.documentElement.scrollHeight - window.innerHeight;
      setMaxScroll(maxScrollDistance);
      if (currentScroll >= maxScrollDistance) {
        setCount(100);
      } else if (currentScroll === 0) {
        setCount(0);
      } else {
        const scrollPercentage = (currentScroll / maxScrollDistance) * 100;
        setCount(scrollPercentage);
        setInnerCircleSize(100 + (scrollPercentage * 13)); // Adjust inner circle size based on scrollPercentage
        setOuterCircleSize(160 + (scrollPercentage * 19)); // Adjust outer circle size based on scrollPercentage
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });
  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const text = textRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;
    // Set a fixed size for the canvas (adjust as needed)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const frameCount = 231;
    const currentFrame = (index) =>
      `https://iraoverseas.com/wp-content/uploads/2023/12/${(index + 5)
        .toString()
        .padStart(4, "0")}-scaled.jpg`;

    for (let i = 0; i < frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      imagesRef.current.push(img);
    } 

    gsap
      .timeline({
        onUpdate: render,
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.5,
          end: "+=200%",
        },
      })
      .to(airpodsRef.current, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 1,
      })
     

    imagesRef.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      // Draw the image without scaling
      context.drawImage(imagesRef.current[airpodsRef.current.frame], 0, 0, canvas.width, canvas.height);
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
   <div>

<section ref={sectionRef}>
      <canvas ref={canvasRef}></canvas>
    </section>


    {/* <div className='numscroll_section'>
      <div className={styles.numscroll}>
        <div
          className={styles.innerCircle}
          style={{
            width: `${innerCircleSize}px`,
            height: `${innerCircleSize}px`,
          }}
        >
          <div
            className={styles.outerCircle}
            style={{
              width: `${outerCircleSize}px`,
              height: `${outerCircleSize}px`,
            }}
          />
          <h1 className={styles.percentage_tag}>{Math.floor(count)}%</h1>
        </div>
      </div>
    </div> */}




   </div>
  );
};

export default AirpodsAnimation;



