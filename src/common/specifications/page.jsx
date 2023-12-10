import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import spec_img from '@/images/spec_img.png';
import styles from '@/common/specifications/specifications.module.css';
import LeftContent from '@/common/specifications/data';
import RightContent from '@/common/specifications/data2';
import Common_animation from '@/common/common_animation/animation';

const page = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  // Animation variant for entering from the bottom
  const animationVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Trigger animation when inView changes
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div>
      <div className={styles.specifications_section}>
        <div className={styles.specifications_title}>
          <Common_animation text="SPECIFICATIONS" />
        </div>
        <div className={styles.specifications_content}>
          <div className={styles.specifications_content_left}>
            {LeftContent.map((item, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.specifications_content_right}>
            {RightContent.map((item, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={animationVariant}
          className={styles.specifications_img}
        >
          <Image src={spec_img} className={styles.s} />
        </motion.div>
      </div>
    </div>
  );
};

export default page;
