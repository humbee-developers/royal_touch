import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';
import styles from "@/components/innovation_circles/circle.module.css"
const YourComponent = () => {



  const text = " About Plywood who accept nothing less than the finest. Super Exclusive, handcrafted luxury laminates that make  a bold statement.  Always Classy, Beautifully Luxurious.  ONE transcends trends to create timeless elegance.".split(" ");

  const magicRef = useRef(null);
  const sceneRef = useRef(null);

  const magicRef1 = useRef(null);
  const sceneRef1 = useRef(null);
  
  const magicRef2 = useRef(null);
  const sceneRef2 = useRef(null);

  useEffect(() => {
    const magic = magicRef.current;
    const scene = sceneRef.current;

    const magic1 = magicRef1.current;
    const scene1 = sceneRef1.current;
    
    const magic2 = magicRef2.current;
    const scene2 = sceneRef2.current;

    const magicWHalf = magic.offsetWidth / 2;
    const magicWHalf1 = magic1.offsetWidth / 2;
    const magicWHalf2 = magic2.offsetWidth / 2;

    const handleMouseMove = (e) => {
      const x = e.pageX - scene.offsetLeft;
      const y = e.pageY - scene.offsetTop;
      magic.style.left = `${x - magicWHalf}px`;
      magic.style.top = `${y - magicWHalf}px`;
    };

    const handleMouseMove1 = (e) => {
      const x = e.pageX - scene1.offsetLeft;
      const y = e.pageY - scene1.offsetTop;
      magic1.style.left = `${x - magicWHalf1}px`;
      magic1.style.top = `${y - magicWHalf1}px`;
    };

    const handleMouseMove2 = (e) => {
      const x = e.pageX - scene2.offsetLeft;
      const y = e.pageY - scene2.offsetTop;
      magic2.style.left = `${x - magicWHalf2}px`;
      magic2.style.top = `${y - magicWHalf2}px`;
    };

    scene.addEventListener('mousemove', handleMouseMove);
    scene1.addEventListener('mousemove', handleMouseMove1);
    scene2.addEventListener('mousemove', handleMouseMove2);

    return () => {
      // Cleanup the event listener when the component unmounts
      scene.removeEventListener('mousemove', handleMouseMove);
      scene1.removeEventListener('mousemove', handleMouseMove1);
      scene2.removeEventListener('mousemove', handleMouseMove2);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
   <div>

<div className={styles.circles_outer_spacing}>

  
<div className={styles.circles_gap}>
     
     <div>


     <div className={styles.scene} ref={sceneRef}>
     <div className={styles.magic} ref={magicRef}>
       
       </div>
     </div>
     <div className={styles.circles_text}>Functionally</div>



     </div>

     <div>
     <div className={styles.scene1} ref={sceneRef1}>
     <div className={styles.magic1} ref={magicRef1}>
       </div>
     </div>
    <div className={styles.circles_text}>Innovation</div>
     </div>

     <div>

     <div className={styles.scene2} ref={sceneRef2}>
     <div className={styles.magic2} ref={magicRef2}>
       
       </div>
     </div>
     <div className={styles.circles_text}>Design</div>
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

export default YourComponent;
