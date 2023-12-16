import React from "react";
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import Button7 from "@/common/button/button7";
import styles from "@/components/innovation_circles/circle.module.css";

const page = () => {
  const text = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet eveniet repellat ipsum tenetur eius ad, dolor, repellendus expedita repudiandae consectetur. Odit nesciunt deserunt veritatis officiis. Blanditiis".split(" ");

  return (
    <div>
      <div className={styles.circles_heading_outer}>
        <div className={styles.circles_heading1}><span>&#10102;</span> Our Story</div>
        <div className={styles.circles_heading2}><span>&#10103;</span> Humble beginning</div>
        <div className={styles.circles_heading3}><span>&#10104;</span> Work with us</div>
      </div>
      <div className={styles.circles_outer_spacing}>
        <div className={styles.circles_outer}>
          <div className={styles.circles_circle}>
            <div className={styles.circle_one}>
              <div className={styles.overlay}></div>
              <div className={styles.circles_inner_circle_outer}>
                {/* <div className={styles.circles_inner_circle}></div> */}
                <div className={styles.circles_inner_text}>Functionality</div>
              </div>
            </div>
          </div>

          <div className={styles.circles_circle}>
            <div className={styles.circle_two}>
              <div className={styles.overlay}></div>
              <div className={styles.overlay}></div>
              <div className={styles.circles_inner_circle_outer}>
                {/* <div className={styles.circles_inner_circle}></div> */}
                <div className={styles.circles_inner_text}>Innovation</div>
              </div>
            </div>
          </div>

          <div className={styles.circles_circle}>
            <div className={styles.circle_three}>
              <div className={styles.overlay}></div>
              <div className={styles.circles_inner_circle_outer}>
                {/* <div className={styles.circles_inner_circle}></div> */}
                <div className={styles.circles_inner_text}>Design</div>
              </div>
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
            <InView triggerOnce={true}>
              {({ inView: inViewButton, ref: refButton }) => (
                <motion.div
                  ref={refButton}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inViewButton ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1,
                    delay: inViewButton ? text.length / 20 : 0,
                  }}
                >
                  <Button7 btn_text={"learn more"} />
                </motion.div>
              )}
            </InView>
          </div>
        )}
      </InView>
    </div>
  );
};

export default page;
