"use client"
import React from 'react'
import { useEffect, useState } from 'react';
import Explore from "@/components/explore/page"
import { AnimatePresence } from 'framer-motion';
import Preloader from "@/components/preloader/page"
import HeroSection from "@/components/heroSection/page"
import Real_Timeline from "@/common/real_timeline/page"
import Slider from "@/components/slider/page"
import Aboutus_hammer from "@/components/aboutUs_hammer/page"
import aboutUs_image from "@/images/new_about.png"
const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])


  setTimeout( () => {
    setIsLoading(false);
    document.body.style.cursor = 'default'
    window.scrollTo(0,0);
  }, 2000)
  
  return (
    <main>
    <AnimatePresence mode='wait'>
    {isLoading && <Preloader />}
  </AnimatePresence>
  
   <div>
   <HeroSection banner_image={aboutUs_image}   header_name="About Us" header_comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum"/>
   <Aboutus_hammer/>
<Real_Timeline/>
   <Slider/>
   <Explore/>
 
   
   </div>
   </main>
  
  )
}

export default page