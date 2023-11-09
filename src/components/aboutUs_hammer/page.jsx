import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hammer from "@/images/aboutus_hammer1.png";
import Image from "next/image";
import styles from "@/components/aboutUs_hammer/hammer.module.css";

function Product1() {
    // Controls for content_1 and content_2 animations
    const controlsContent1 = useAnimation();
    const controlsContent2 = useAnimation();

    // Intersection observers for content_1 and content_2
    const [refContent1, inViewContent1] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });
    const [refContent2, inViewContent2] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    
    React.useEffect(() => {
        if (inViewContent1) {
            controlsContent1.start('visible');
        }
        if (inViewContent2) {
            controlsContent2.start('visible');
        }
    }, [controlsContent1, inViewContent1, controlsContent2, inViewContent2]);

    
    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: 'easeOut' },
        },
    };

    return (
        <div className={styles.hammer_wrapper}>
            <div className={styles.section}>
                <div className={styles.upper_left}>
                    <h3 className={styles.ply}>Plywood</h3>
                    <p className={styles.ply}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
                <div className={styles.content}>
                    <motion.p
                        ref={refContent1}
                        initial="hidden"
                        animate={controlsContent1}
                        variants={textVariants}
                        transition={{ delay: 1 }}
                        className={styles.content_1}
                    >
                        <span>Royale Touché Marine Grade Plywood (IS:710)</span> is a renowned product known for its superior quality and durability. It is specially designed for applications that require resistance to moisture, water, and other environmental factors.
                    </motion.p>
                    <motion.p
                        ref={refContent2}
                        initial="hidden"
                        animate={controlsContent2}
                        variants={textVariants}
                        transition={{ delay: 3.5 }}
                        className={styles.content_2}
                    >
                        Royale Touche Marine-grade plywood is a high-quality engineered wood product and it is conforming to the IS:710 Indian Standard, indicating its compliance with stringent quality and performance requirements.
                    </motion.p>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.upper_right}>
                    <h3 className={styles.ply1}>Blackboard</h3>
                    <p className={styles.ply1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                </div>
                <div className={styles.hammer_image_wrapper}>
                    <Image src={Hammer} alt="Hammer" className={styles.productimg} />
                </div>
            </div>
        </div>
    );
}

export default Product1;
