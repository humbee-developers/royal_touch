import React from "react";
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import Link from "next/link";
import Image from "next/image";
import innovation_flex_img1 from "@/images/innovation1.png";
import innovation_flex_img2 from "@/images/innovation2.png";
import innvotion_flex_img3 from "@/images/innvotion3.png";
import styles from "@/components/innovation_cards/innovation_cards.module.css";
const Page = () => {
  const text = " Lorem Ipsum is simply dummy text of the printing and typesetting industry.".split(" ");

  return (
    <div>
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <div ref={ref}>
            <div className={styles.innovation_cards_outer}>
              <div className={styles.innovation_cards_text}>
                {text.map((el, i) => (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
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
              <div className={styles.flex_border}></div>

              <div className={styles.innovation_cards_flex}>
                <InView triggerOnce={true}>
                  {({ inView: inViewImg1, ref: refImg1 }) => (
                    <motion.div
                      ref={refImg1}
                      initial={{ opacity: 0, y: 30 }}
                      animate={inViewImg1 ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 1,
                        delay: inViewImg1 ? 0.7 : 0,
                      }}
                    >
                      <div className={styles.innovation}>
                        <div className={styles.innovation_flex_card1}>
                          <Image
                            src={innovation_flex_img1}
                            alt="image"
                            className={styles.flex_img}
                          />
                        </div>
                        <div>
                          <p className={styles.flex_cards_name}>Cubord</p>
                          <Link className={styles.flex_cards_link} href="/">
                            Link to page 1
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </InView>

                <InView triggerOnce={true}>
                  {({ inView: inViewImg2, ref: refImg2 }) => (
                    <motion.div
                      ref={refImg2}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inViewImg2 ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        type: 'spring',
                    stiffness: 500,
                    damping: 30,
                        duration: 1,
                        delay: inViewImg2 ? 1 : 0,
                      }}
                    >
                      <div className={styles.innovation}>
                        <div className={styles.innovation_flex_card2}>
                          <Image
                            src={innovation_flex_img2}
                            alt="image"
                            className={styles.flex_img}
                          />
                        </div>
                        <div>
                          <p className={styles.flex_cards_name}>drower</p>
                          <Link className={styles.flex_cards_link} href="/">
                            Link to page 2
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </InView>

                <InView triggerOnce={true}>
                  {({ inView: inViewImg3, ref: refImg3 }) => (
                    <motion.div
                      ref={refImg3}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inViewImg3 ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 1,
                        delay: inViewImg3 ? 1.3 : 0,
                      }}
                    >
                      <div className={styles.innovation}>
                        <div className={styles.innovation_flex_card3}>
                          <Image
                            src={innvotion_flex_img3}
                            alt="image"
                            className={styles.flex_img}
                          />
                        </div>
                        <div>
                          <p className={styles.flex_cards_name}>Lamination</p>
                          <Link className={styles.flex_cards_link} href="/">
                            Link to page 2
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </InView>
              </div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
};

export default Page;