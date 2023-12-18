"use client"
import React from "react";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import styles from "@/components/innovation_circles/circle.module.css";

const page = () => {
  const text = " About Plywood who accept nothing less than the finest. Super Exclusive, handcrafted luxury laminates that make  a bold statement.  Always Classy, Beautifully Luxurious.  ONE transcends trends to create timeless elegance.".split(" ");



  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    let animationFrameId;
  
    const mouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    };
  
    window.addEventListener("mousemove", mouseMove);
  
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      zIndex:999,
      // mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");


  return (
    <div>
    <motion.div
        className={styles.cursor}
        variants={variants}
        animate={cursorVariant}
      />
      <div className={styles.circles_outer_spacing}>
      
        <div className={styles.circles_outer}>
          <div   className={styles.circles_circle}>
            <div onMouseEnter={textEnter} onMouseLeave={textLeave}  className={styles.circle_one}>
              <div className={styles.overlay}></div>
              <div className={styles.circles_inner_circle_outer}>
                {/* <div className={styles.circles_inner_circle}></div> */}
                <div className={styles.circles_inner_text}>Functionality</div>
              </div>
            </div>
          </div>

          <div  className={styles.circles_circle}>
            <div onMouseEnter={textEnter} onMouseLeave={textLeave}  className={styles.circle_two}>
              <div className={styles.overlay}></div>
              <div className={styles.overlay}></div>
              <div className={styles.circles_inner_circle_outer}>
                {/* <div className={styles.circles_inner_circle}></div> */}
                <div className={styles.circles_inner_text}>Innovation</div>
              </div>
            </div>
          </div>

          <div  className={styles.circles_circle}>
            <div onMouseEnter={textEnter} onMouseLeave={textLeave}  className={styles.circle_three}>
              <div className={styles.overlay}></div>
              <div className={styles.circles_inner_circle_outer}>
                {/* <div className={styles.circles_inner_circle}></div> */}
                <div className={styles.circles_inner_text}>Design</div>
              </div>
            </div>
          </div>
        </div>




        
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div ref={ref}>
            <div className={styles.circles_paragraph}>
              {text.map((el, i) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{
                    duration: 1,
                    delay: inView ? i / 15 : 0,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </div>
           
          </div>
        )}
      </InView>
      </div>

    </div>
  );
};

export default page;
