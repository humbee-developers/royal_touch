import React from 'react'
import Image from 'next/image'
import timeline_bg from "@/images/timeline_bg.png"
import img1 from "@/images/img1.png"
import img2 from "@/images/img2.png" 
import img3 from "@/images/img3.png"
import img4 from "@/images/img4.png"
import img5 from "@/images/img5.png"
import img6 from "@/images/img6.png"
import img7 from "@/images/img7.png"
import img8 from "@/images/img8.png"
import img9 from "@/images/img9.png"
import img10 from "@/images/img10.png"

import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import styles from "@/common/real_timeline/real_timeline.module.css"
const page = () => {
      const container = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      create();
    }, []);


    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      createBoll();
    }, []);

  const createAnimation = () => {
    gsap.to(".triggered-element", {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        start: "top 100%",
        end: "bottom 10%",
      },
      opacity: 1, 
      color: "black",
      ease: "out",
      duration:1.5,
        ease: "slow(0.7,0.7,false)",
      scale: 1.25,
      stagger: 0.9,
    });
  };



  const create = () => {
      gsap.to(".triggered-section", {
        scrollTrigger: {
          trigger: container.current,
          scrub: 1,
          start: "top 100%",
          end: "bottom 20%",
        },
        opacity: 1,
        color: "black", 
        ease: "out",
        scale: 2,
        duration:1.5,
        ease: "slow(0.7,0.7,false)",
        stagger: 0.9,
       
      });
    };


    const createBoll = () => {
      gsap.to(".triggered-bead", {
        scrollTrigger: {
          trigger: container.current,
          scrub: 1,
          start: "top 100%",
          end: "bottom 20%",
        },
        opacity: 1,
        backgroundColor: "#C3A464", 
        duration:1.5,
        ease: "slow(0.7,0.7,false)",
        scale: 2.2,
        stagger: 0.9,
       
      });
    };

  return (
    <div>
    <div className={styles.timeline_outer}>
    <div className={styles.timeline_wrapper}>
    <h2 className={styles.timeline_heading}>Our Story</h2>
    <div className={styles.timeline_main_outer}>
    <div className={styles.timeline_width}>
      <div className={styles.timeline} ref={container} >
        <div className={styles.line}></div>


        <div className={styles.section}>
        <div className={`${styles.timeline_year} triggered-section`}>1978</div>
        <div className={styles.bead_outer}>
        <div className={`${styles.bead} triggered-bead`}></div>
        </div>
          <div className={`${styles.content} triggered-element`}>
            <p className={styles.timeline_comment}>First Laminate Factory was established at Surendranagar.</p>
            <Image  src={img1} alt="Your Image"  className={styles.timeline_image}/>
          </div>
          
        </div>


        <div className={styles.section}> 
        <div className={`${styles.timeline_year} triggered-section`}>1999</div>
        <div className={styles.bead_outer}>
        <div className={`${styles.bead} triggered-bead`}></div>
        </div>
        <div className={`${styles.content} triggered-element`}>
          <p className={styles.timeline_comment}>Second Laminate Factory was established in Ahmedabad.</p>
          <Image  src={img2} alt="Your Image"  className={styles.timeline_image}/>
         
        
          </div>
        </div>




        <div className={styles.section}>
        <div className={`${styles.timeline_year} triggered-section`}>2002</div>
        <div className={styles.bead_outer}>
        <div className={`${styles.bead} triggered-bead`}></div>
        </div>
        <div className={`${styles.content} triggered-element`}>
          <p className={styles.timeline_comment}>Modular Furniture Factory was established in Rajkot.</p>
          <Image  src={img3} alt="Your Image"  className={styles.timeline_image}/>
          
          </div>
        </div>



        <div className={styles.section}>
        <div className={`${styles.timeline_year} triggered-section`}>2005</div>
        <div className={styles.bead_outer}>
        <div className={`${styles.bead} triggered-bead`}></div>
        </div>
        <div  className={`${styles.content} triggered-element`}>
          <p className={styles.timeline_comment}>An Aluminium extrusion unit with 3 top of the line presses started in Ahmedabad</p>
          <Image  src={img4} alt="Your Image"  className={styles.timeline_image}/>
          
          </div>
        </div>


        <div className={styles.section}>
        <div className={`${styles.timeline_year} triggered-section`}>2006</div>
        <div className={styles.bead_outer}>
        <div className={`${styles.bead} triggered-bead`}></div>
        </div>
        <div className={`${styles.content} triggered-element`} >
          <p className={styles.timeline_comment}>Pre-laminated Board Plant was set up in Ahmedabad. Adhesives Plant also began operations in Ahmedabad.</p>
          <Image  src={img5} alt="Your Image"  className={styles.timeline_image}/>
          
          </div>
        </div>



        <div className={styles.section}>
        <div className={`${styles.timeline_year} triggered-section`}>2010</div>
        <div className={styles.bead_outer}>
        <div className={`${styles.bead} triggered-bead`}></div>
        </div>
        <div className={`${styles.content} triggered-element`}>
          <p className={styles.timeline_comment}>Vitrified tiles was started at Morbi.</p>
          <Image  src={img6} alt="Your Image"  className={styles.timeline_image}/>
          
          </div>
        </div>



        <div className={styles.section}>
        <div className={`${styles.timeline_year} triggered-section`}>2012</div>
        <div className={styles.bead_outer}>
        <div className={`${styles.bead} triggered-bead`}></div>
        </div>
        <div  className={`${styles.content} triggered-element`}>
          <p className={styles.timeline_comment}>Another laminate factory was established for compact & exterior laminates in Ahmedabad.</p>
          <Image  src={img7} alt="Your Image"  className={styles.timeline_image}/>
          
          </div>
        </div>


        <div className={styles.section}>
        <div className={`${styles.timeline_year} triggered-section`}>2017</div>
        <div className={styles.bead_outer}>
        <div className={`${styles.bead} triggered-bead`}></div>
        </div>
        <div className={`${styles.content} triggered-element`}>
          <p className={styles.timeline_comment}>Expanded the production capacity of the unit by 35%</p>
          <Image  src={img8} alt="Your Image"  className={styles.timeline_image}/>
          
          </div>
        </div>

        <div className={styles.section}>
        <div className={`${styles.timeline_year} triggered-section`}>2018</div>
        <div className={styles.bead_outer}>
        <div className={`${styles.bead} triggered-bead`}></div>
        </div>
        <div className={`${styles.content} triggered-element`}>
          <p className={styles.timeline_comment}>Launched Pavimento Wooden Flooring across India.</p>
          <Image  src={img9} alt="Your Image"  className={styles.timeline_image}/>
          
          </div>
        </div>

        <div className={styles.section}>
        <div className={`${styles.timeline_year} triggered-section`}>2020</div>
        <div className={styles.bead_outer}>
        <div className={`${styles.bead} triggered-bead`}></div>
        </div>
        <div className={`${styles.content} triggered-element`}>
          <p className={styles.timeline_comment}>Installed a new press with a further 30% increase in production capacity</p>
          <Image  src={img10} alt="Your Image"  className={styles.timeline_image}/>
          
          </div>
        </div>



      </div>
    </div>
  </div>



    </div>
    
    </div>
    
    </div>
  )
}

export default page