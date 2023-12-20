"use client"
import React from 'react'
import { useEffect, useState } from "react";
import FindStore_search from "@/components/findStore_search/page"
import Footer from "@/components/footer/page"
import Form from "@/components/form/page2"
import Navbar from "@/components/navbar/index";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import findStore_image from "@/images/new_channel.png"
import HeroSection from "@/components/heroSection/page"
const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])


  setTimeout(() => {
    setIsLoading(false);
    document.body.style.cursor = "default";
    window.scrollTo(0, 0);
  }, 2000);


  return (


    <main>
    <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div >
          <Navbar />
        </div>
      
      <div>
      <HeroSection banner_image={findStore_image}   header_name="Partners" header_comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum"/>
      <FindStore_search/>
      </div>
      <Form/>
      <Footer/>
    </main>
    
  )
}

export default Page