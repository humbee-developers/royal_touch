import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import loading from "@/images/loading.png"
import styles from "@/common/quality_timeline/quality_timeline.module.css"
const Home = () => {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(".triggered-element", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 90%",
        end: "bottom 80%",
      },
      opacity: 1,
      color: "white",
      ease: "none",
      stagger: 0.9,
    });
  };

  return (
    <div>
    <div>
    <Image src={loading} alt="Picture"  className={styles.loading_image} />
    </div>
    <div className={styles.quality_timeline_usps}>
    <h1 className={styles.quality_usps}>Usps:</h1>
    </div>
      <div className={styles.first_timeline_outer}>
        <div className={styles.first_timeline_inner}>
          <div
            className={styles.timeline}
            ref={container}>
            <div className={styles.line}></div>
            <div className={styles.section}>
              <div className={styles.bead}></div>
              <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>01</p>
                <h2 className={styles.twoo}>
                100% preservative treatment of Veneer through vacuum pressure Technology
                </h2>
                
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>02</p>
                <h2 className={styles.twoo}>
                Gurjan species used in the face veneer.
                </h2>
               
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>03</p>
                <h2 className={styles.twoo}>
                12 Chambers mechanized Jet dryer used for the uniform drying of veneer.
                </h2>
                
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>04</p>
                <h2 className={styles.twoo}>
                12 Chambers mechanized Jet dryer used for the uniform drying of veneer.
                </h2>
                
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>05</p>
                <h2 className={styles.twoo}>
                12 Chambers mechanized Jet dryer used for the uniform drying of veneer.
                </h2>
                
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>06</p>
                <h2 className={styles.twoo}>
                  Easy to Maintain
                </h2>
                
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>07</p>
                <h2 className={styles.twoo}>
                12 Chambers mechanized Jet dryer used for the uniform drying of veneer.
                </h2>
                
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>08</p>
                <h2 className={styles.twoo}>
                12 Chambers mechanized Jet dryer used for the uniform drying of veneer.
                </h2>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
