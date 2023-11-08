"use client"
import React from 'react'
import HeroSection from "@/components/heroSection/page"
import Carousal from "@/components/carousal/page"
import Timeline from "@/components/timeline/page"
import HomeStore from "@/components/homeStore/page"
import TextScroll from "@/common/textScroll/page"
import New_carousal from "@/common/new_carousal/page"
import Image from "next/image";
import homepage_image_second from "@/images/home_second_image.png";
import homepage_third_image from "@/images/home_cover_page.jpg";
import styles from "@/app/home/home.module.css"

const Page = () => {
  return (
    
   <div>
   <HeroSection video_bg="./video/k.mp4"     homepage_heading="Surfaces That Speak of Luxury, Whispers of Style"/>
   <HeroSection  banner_image={homepage_image_second}  homepage_heading="Elevate Your Space with Royale Touche: Where Luxury is a Lifestyle."/>
     <div className={styles.homepage_third_image_wrapper}>
   <Image src={homepage_third_image} alt="Picture of the author" fill  className={styles.homepage_second_image} />
   </div>
   
   <TextScroll/>
   <Timeline/>

<New_carousal/>
<HomeStore/>
  
   </div>
   
   
      
  )
}

export default Page