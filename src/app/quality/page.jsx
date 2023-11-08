"use client";
import React from "react";
import { useEffect, useState } from "react";
import Explore from "@/components/explore/page";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import Product_overview from "@/components/product_overview/page"
import Quality_timeline from "@/common/quality_timeline/page"
import Quality_text from "@/components/quality_text/page"
import HeroSection from "@/components/heroSection/page";
import Quality_slider from "@/components/quality_slider/page"
import quality_image from "@/images/new_product.png";
const Page = () => {
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
          banner_image={quality_image}
          header_name="Quality"
          header_comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum"
        />
      </div>
<Product_overview/>
<Quality_text/>
<Quality_slider/>
      <Quality_timeline/>
      <Explore />
    </main>
  );
};

export default Page;
