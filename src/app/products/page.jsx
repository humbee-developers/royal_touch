"use client";
import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader/page";
import Timeline from "@/components/timeline/page"
import Footer from "@/components/footer/page"
import Form from "@/components/form/page2"
import styles from "@/app/products/product.module.css"
import products_image from "@/images/new_product1.png";
import HeroSection from "@/components/heroSection/page";
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
          banner_image={products_image}
          header_name="Products"
          header_comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum"
        />
      </div>
      <div className={styles.Quality_timeline_wrapper}>
      <h1 className={styles.Quality_timeline_text}> Quality</h1>
      
      </div>
      <Timeline/>

      <Form/>
<Footer/>
    </main>
  );
};

export default Page;
