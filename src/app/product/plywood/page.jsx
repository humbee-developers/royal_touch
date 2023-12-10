"use client";
import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page"
import innovation_image  from "@/images/plywood_header.png"
import Plywood_main from "@/components/plywood_main/page"
import Plywood_lights from "@/components/plywood_lights/page"
import Inner_page_common_img from "@/common/inner_page_common_img/page"
import Plywood_carousal from "@/components/plywood_carousal/page"
import common_img from "@/images/inner_page_common_img.png"
import Inner_header from "@/common/inner_header/page";
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
    <Plywood_main/>
    <Plywood_lights/>
    <Inner_page_common_img common_img={common_img}/>
    <Plywood_carousal/>
    <Specifications/>
    <Inner_page_slider2/>
    
    
    <Form/>
    <Footer/>
    </main>
  )
}

export default page