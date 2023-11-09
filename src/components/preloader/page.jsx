import styles from "@/components/preloader/preloader.module.css";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from "@/components/preloader/anime";

const words = ["નમસ્તે", "hello", "Ciao", "Hallå", "नमस्ते", "Ola"];

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeoutId = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 150);
        return () => clearTimeout(timeoutId);
    }, [index]);

    useEffect(() => {
        let intervalId;
        if (percentage < 100) {
            intervalId = setInterval(() => {
                setPercentage((prevPercentage) => prevPercentage + 1);
            }, 18); // Set the interval time as needed
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, [percentage]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    };

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 &&
                <div className={styles.counterContainer}>
                    <motion.div className={styles.percentageCounter} variants={opacity} initial="initial" animate="enter">
                        {percentage}% 
                    </motion.div>
                    <motion.p className={styles.preloader_text} variants={opacity} initial="initial" animate="enter">
                        {words[index]}
                    </motion.p>
                    <svg>
                        <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                    </svg>
                </div>
            }
        </motion.div>
    );
}
