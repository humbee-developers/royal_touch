"use client";
import React from "react";
import { useEffect, useState } from "react";
import Inner_header from "@/common/inner_header/page";
import Innovation_circles from "@/components/innovation_circles/page"
import Innovation_cards from "@/components/innovation_cards/page"
import Innovation_flex from "@/components/innovation_flex/page"
import Timeline from "@/components/timeline/page"
import Footer from "@/components/footer/page";
import Form from "@/components/form/page2";
import innovation_image from "@/images/innovation_header.png";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";

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

      <div>
        <Inner_header inner_header_image={innovation_image} />
        <Innovation_circles/>
        <Innovation_cards/>
        <Innovation_flex/>
        <Timeline/>
      </div>

      <Form />
      <Footer />
    </main>
  );
};

export default page;
