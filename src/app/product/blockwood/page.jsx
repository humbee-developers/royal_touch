"use client";
import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page"
import Inner_header from "@/common/inner_header/page";
import Blockboard_main from "@/components/blockboard_main/page"
import innovation_image  from "@/images/blockwood_header_img.png"
import Inner_page_common_img from "@/common/inner_page_common_img/page"
import common_img from "@/images/inner_page_common_img.png"
import Specifications from "@/common/specifications/page"
import Inner_page_slider2 from "@/common/inner_page_slider2/page"
import Footer from "@/components/footer/page"
import Form from "@/components/form/page2"
const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

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
      <Inner_header inner_header_image={innovation_image} />
      <Blockboard_main/>
      
      
      
      <Inner_page_common_img common_img={common_img}/>
    <Specifications/>
    <Inner_page_slider2/>
    <Form/>
<Footer/>
    </main>
  )
}

export default page