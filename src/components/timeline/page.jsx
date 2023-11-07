import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "@/components/timeline/time.module.css"
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
                  The Promise of Quality
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>02</p>
                <h2 className={styles.twoo}>
                  Exquisite Design Collection
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>03</p>
                <h2 className={styles.twoo}>
                  Cutting-Edge Technology
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>04</p>
                <h2 className={styles.twoo}>
                  Exceptional Craftsmanship
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>05</p>
                <h2 className={styles.twoo}>
                  Customization Options
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
                <p className={styles.timeline_number}>06</p>
                <h2 className={styles.twoo}>
                  Easy to Maintain
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>07</p>
                <h2 className={styles.twoo}>
                  Legacy Of Trust
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
            <div className={styles.section}>
            <div className={styles.bead}></div>
            <div className={`${styles.contentX} triggered-element`}>
              <p className={styles.timeline_number}>08</p>
                <h2 className={styles.twoo}>
                  Customer Satisfaction
                </h2>
                <p className={styles.timeline_sec_comment}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum odit numquam magnam nesciunt. Aliquid, excepturi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
