// ProductOverviewItem.jsx
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from '@/components/product_overview/product_overview.module.css';

// Animation variants for the content
const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ProductOverviewItem = ({
  heading,
  image,
  title,
  content,
  secondContent,
}) => {
  const controlsFirstContent = useAnimation();
  const controlsSecondContent = useAnimation();
  const [refFirstContent, inViewFirstContent] = useInView({ triggerOnce: true, rootMargin: '-100px 0px' });
  const [refSecondContent, inViewSecondContent] = useInView({ triggerOnce: true, rootMargin: '-100px 0px' });

  useEffect(() => {
    if (inViewFirstContent) {
      controlsFirstContent.start('visible').then(() => {
        // Start the second content animation with a slight delay after the first content animation
        setTimeout(() => {
          controlsSecondContent.start('visible');
        }, 0.2 * 1000); // 0.2 seconds delay
      });
    }
  }, [controlsFirstContent, inViewFirstContent, controlsSecondContent]);

  useEffect(() => {
    if (inViewSecondContent && !inViewFirstContent) {
      controlsSecondContent.start('visible');
    }
  }, [controlsSecondContent, inViewSecondContent, inViewFirstContent]);

  return (
    <div className={styles.productOverviewCard}>
      <div className={styles.productOverviewCard_wrapper}>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.image}>
          <Image src={image} alt={title} width={500} height={300} />
        </div>
        <div className={styles.contentSec}>
          <div className={styles.title}>{title}</div>
          <motion.div
            ref={refFirstContent}
            variants={contentVariants}
            initial="hidden"
            animate={controlsFirstContent}
            className={styles.content}
          >
            {content}
          </motion.div>
          <motion.div
            ref={refSecondContent}
            variants={contentVariants}
            initial="hidden"
            animate={controlsSecondContent}
            className={styles.secondConetnt}
          >
            {secondContent}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverviewItem;
