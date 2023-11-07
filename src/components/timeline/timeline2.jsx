// import React from "react";
import styles from "@/components/timeline/time2.module.css"
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const home =()=> {

  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);
  const createAnimation = () => {
    gsap.to("#triggered-element", {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 0.2}`,
        pin: true,
        markers:true,
      },
      opacity: 1,
      color: "white",
      ease: "none",
      stagger: 0.9,
    });
  };
    return (
        <div>
      
        <div className={styles.section1}>
            <div className={styles.abc} >
                <div className={styles.timeline} id="trigger">
                    <div className={styles.line}></div>
                    <div className={styles.section}>
                        <div className={styles.bead}></div>
                        <div className={styles.content} id="triggered-element">
                            <p>01</p>
                            <h2 className={styles.twoo}>The Promise of Quality</h2>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.bead}></div>
                        <div className={styles.content } id="triggered-element">
                            <p>02</p>
                            <h2 className={styles.twoo}>The Promise of Quality</h2>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.bead}></div>
                        <div className={styles.content} id="triggered-element">
                            <p>03</p>
                            <h2 className={styles.twoo}>The Promise of Quality</h2>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.bead}></div>
                        <div className={styles.content} id="triggered-element">
                            <p>04</p>
                            <h2 className={styles.twoo}>The Promise of Quality</h2>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.bead}></div>
                        <div className={styles.content} id="triggered-element">
                            <p>05</p>
                            <h2 className={styles.twoo}>The Promise of Quality</h2>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.bead}></div>
                        <div className={styles.content} id="triggered-element">
                            <p>06</p>
                            <h2 className={styles.twoo}>The Promise of Quality</h2>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.bead}></div>
                        <div className={styles.content} id="triggered-element">
                            <p>07</p>
                            <h2 className={styles.twoo}>The Promise of Quality</h2>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.bead}></div>
                        <div className={styles.content} id="triggered-element">
                            <p>08</p>
                            <h2 className={styles.twoo}>The Promise of Quality</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};
 export default home;