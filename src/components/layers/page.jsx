import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "@/components/layers/layer.module.css";

gsap.registerPlugin(ScrollTrigger);

const Airpods = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
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

    const timeline = gsap.timeline({
      onUpdate: () => {
        const progress = (timeline.progress() * 100).toFixed(0); 
        setScrollPercentage(progress);
        render();
      },
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1.5,
        end: "+=500%",
      },
    });

    timeline.to(airpodsRef.current, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: 1,
    });

    imagesRef.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        imagesRef.current[airpodsRef.current.frame],
        0,
        0,
        canvas.width,
        canvas.height
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const handleScrollDirection = () => {
      let lastScrollTop = 0;
      window.addEventListener("scroll", () => {
        const currentScrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
          // Scrolling down
          setScrollPercentage(0); // Hide the counter when scrolling down
        } else {
          // Scrolling up
          // The counter will be updated by the GSAP timeline onUpdate
        }
        lastScrollTop = currentScrollTop;
      });
    };

    handleScrollDirection();

    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
    };
  }, []);

  return (
    <div className={styles.counter_relm}>
      <section ref={sectionRef}>
        <div className={styles.percentage_counter_outer}>
        <div className={styles.percentageCounter}>{scrollPercentage}%</div>
        <span className={styles.counter_text}>Royale Touche</span>
        </div>
        <canvas ref={canvasRef}></canvas>
      </section>
    </div>
  );
};

export default Airpods;
