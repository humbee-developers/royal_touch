"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";
import { useRouter } from "next/navigation";
import Button from "@/common/button/Button";
import Navbar from "@/components/navbar/index";
import styles from "@/components/heroSection/heroSection.module.css";
const Page = (props) => {
  const router = useRouter();
  return (
    <div>
      <div className={styles.home_nav_setting}>
        <div className={styles.nav_menu_names}>
          <Image  onClick={()=> router.push("/")} src={logo} alt="image" className={styles.logo} />
        </div>
        <div className={styles.btn_outer}>
          <Button onClick={()=> router.push("/")} btn_text="New Arrivals" />
        </div>

        <div className={styles.nav_ham_button}>
          <Navbar />
        </div>
      </div>
     
    
        <div className={styles.homepage_image_wrapper}>
        {props.video_bg  && (
          <div className={styles.video_outer}>
              <video autoPlay loop muted className={styles.videoBackground}>
                <source
                  className={styles.video_bg}
                  src={props.video_bg}
                  type="video/mp4"
                />
              </video>
              </div>
              )}
        {props.banner_image && (
          <Image
          alt="image"
            src={props.banner_image}
            fill
            className={styles.homepage_image}
          />
        )}
        <div className={styles.header_text_wrapper}>
          <div
            data-scroll
            data-scroll-speed="0.3"
            className={styles.header_text}
          >
            {props.homepage_heading}
          </div>
          
          <div
          data-scroll
          data-scroll-speed="0.3"
          className={styles.header_text2}
        >
          {props.homepage_heading2}
        </div>
          <div
            data-scroll
            data-scroll-speed="0.2"
            className={styles.header_name}
          >
            {props.header_name}
          </div>
          <div
            data-scroll
            data-scroll-speed="0.2"
            className={styles.header_comment}
          >
            {props.header_comment}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
