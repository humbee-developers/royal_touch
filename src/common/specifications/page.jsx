import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import spec_img from '@/images/spec_img.png';
import styles from '@/common/specifications/specifications.module.css';
import LeftContent from '@/common/specifications/data';
import RightContent from '@/common/specifications/data2';
import Common_animation from '@/common/common_animation/animation';
const Page = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
    // Animation variant for entering from the bottom
    const animationVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };
    const staggerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };
    const leftVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
    };
    const rightVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut"  } }
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
                        <motion.div
                            variants={staggerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {LeftContent.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className='item'
                                    variants={leftVariants}
                                    style={{ marginBottom: '20px' }}
                                >
                                    <motion.span variants={leftVariants}>{item.title}</motion.span>
                                    <motion.p variants={leftVariants}>{item.text}</motion.p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    <div className={styles.specifications_content_right}>
                        <motion.div
                            variants={staggerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {RightContent.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className='item'
                                    variants={rightVariants}
                                    style={{ marginBottom: '20px' }}
                                >
                                    <motion.span variants={rightVariants}>{item.title}</motion.span>
                                    <motion.p variants={rightVariants}>{item.text}</motion.p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={animationVariant}
                    className={styles.specifications_img}
                >
                    <Image src={spec_img} alt='image' className={styles.s} />
                </motion.div>
            </div>
        </div>
    );
};
export default Page;