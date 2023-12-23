import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "@/components/layers/layer.module.css";

gsap.registerPlugin(ScrollTrigger);

const Airpods = () => {
  const [count, setCount] = useState(0);
  const [innerCircleSize, setInnerCircleSize] = useState(10);
  const [outerCircleSize, setOuterCircleSize] = useState(10);

  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const airpodsRef = useRef({ frame: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;

      if (sectionTop >= 0 && sectionTop <= window.innerHeight) {
        const scrollPercentage = (sectionTop / window.innerHeight) * 100;
        setCount(scrollPercentage);
        setInnerCircleSize(100 + scrollPercentage * 13);
        setOuterCircleSize(160 + scrollPercentage * 19);
      } else {
        setCount(0);
      }
    };

    const section = sectionRef.current;

    gsap.to(section, {
      scrollTrigger: {
        // pin: true,
        scrub:true,
        end: "+=500%", // change this to fit your needs
        onToggle: (self) => {
          if (self.isActive) {
            window.addEventListener("scroll", handleScroll);
          } else {
            window.removeEventListener("scroll", handleScroll);
          }
        },
      },
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);










// cute













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

    gsap
      .timeline({
        onUpdate: render,
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.5,
          end: "+=500%",
        },
      })
      .to(airpodsRef.current, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 1,
      });

    imagesRef.current[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(imagesRef.current[airpodsRef.current.frame], 0, 0, canvas.width, canvas.height);
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
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
          // Scrolling down
          setCount(0); // Hide the counter when scrolling down
        } else {
          // Scrolling up
          handleScroll(); // Show the counter when scrolling up
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
    <div>
      <section ref={sectionRef}>
        <canvas ref={canvasRef}></canvas>
      </section>
      {/* <div className="numscroll_section">
        <div className={styles.numscroll}>
          <div
            className={styles.innerCircle}
            style={{
              width: `${innerCircleSize}px`,
              height: `${innerCircleSize}px`,
              visibility: count > 0 ? "visible" : "hidden",
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

export default Airpods;
