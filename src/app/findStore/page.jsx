"use client"
import React from 'react'
import { useEffect } from 'react';
import FindStore_search from "@/components/findStore_search/page"
import styles from "@/app/page.module.css"
import findStore_image from "@/images/findStore_banner_image.png"
import HeroSection from "@/components/heroSection/page"
const page = () => {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])


  return (
    <div>
    <HeroSection banner_image={findStore_image}   header_name="Partners" header_comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum"/>
    <FindStore_search/>
    </div>
   
  )
}

export default page