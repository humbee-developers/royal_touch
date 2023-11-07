"use client";
import React from "react";
import { useEffect, useState } from "react";
import contactUs_image from "@/images/contactUs_banner_image.png";
import Form from "@/components/form/page2";
import Contact_Map from "@/common/contact_map/page";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import HeroSection from "@/components/heroSection/page";

const contactUs = () => {
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
        <HeroSection
          banner_image={contactUs_image}
          header_name="Contact Us"
          header_comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum"
        />
        <Contact_Map />
      </div>
    </main>
  );
};

export default contactUs;
