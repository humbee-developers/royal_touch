import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Button8 from '@/common/button/button8';
import { InView } from 'react-intersection-observer';
import Common_animation from "@/common/common_animation/animation";
import styles from '@/components/blockboard_main/blockboard_main.module.css';
import Blockboard_led from '@/images/block_light.png';
import Blockboard_desk from '@/images/blockboard_desk.png';

const Blockboard = () => {

  const text = [
    "Super", "Exclusive",
    "handcrafted",
    "luxury" ,"laminates",
    "that" ,"make",
    "a bold ","statement",
    "Always" ,"Classy",
    "Beautifully" ,"Luxurious",
    "ONE" ,"transcends", "trends",
    "to " ,"create", "timeless", "elegance."
  ];







  const controlsLed = useAnimation();
  const controlsDesk = useAnimation();
  const [refLed, inViewLed] = useInView({ triggerOnce: true, rootMargin: '0px 0px -100px 0px' });
  const [refDesk, inViewDesk] = useInView({ triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }, 
  };

  const startAnimations = async () => {
    if (inViewLed) {
      await controlsLed.start('visible');
      if (inViewDesk) {
        controlsDesk.start('visible');
      }
    }
  };

  setTimeout(() => {
    startAnimations();
  },900);

  return (
    <>
      <div className={styles.Blockboard}>
        <div>
          <Common_animation text="BLOCKWOOD" />
        </div>
        <div className={styles.Blockboard_details}>
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div ref={ref} className={styles.black_txt}>
              <span>
                {text.map((el, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{
                      duration: 1,
                      delay: inView ? i / 15 : 0,
                    }}
                    className={(el === "Super" || el === "Exclusive") ? styles.Blue_text3 : ""}
                  >
                    {el}{" "}
                  </motion.span>
                ))}
              </span>
            </div>
          )}
        </InView>
          <InView triggerOnce={true}>
              {({ inView: inViewButton, ref: refButton }) => (
                <motion.div
                  className="blockboard_button"
                  ref={refButton}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inViewButton ? { opacity: 1, y: 20 } : {}}
                  transition={{
                    duration: 1,
                    delay: 1
                  }}
                >
                  <Button8 btn_text={"Explore Collections"} />
                </motion.div>
              )}
            </InView>
        </div>
        <div className={styles.Blockboard_led} ref={refLed}>
          <motion.div
            initial="hidden"
            animate={controlsLed}
            variants={fadeInUp}
          >
            <Image src={Blockboard_led} />
          </motion.div>
        </div>
        <div className={styles.Blockboard_desk} ref={refDesk}>
          <motion.div
            initial="hidden"
            animate={controlsDesk}
            variants={fadeInDown}
          >
            <Image src={Blockboard_desk} />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Blockboard;
