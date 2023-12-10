"use client";
import React from "react";
import HeroSection from "@/components/heroSection/page";
import Timeline from "@/components/timeline/page";
import Footer from "@/components/footer/page";
import Form from "@/components/form/page2";
import HomeStore from "@/components/homeStore/page";
import TextScroll from "@/common/textScroll/page";
import New_carousal from "@/common/new_carousal/page";

const Page = () => {
  return (
    <div>
      <HeroSection
        video_bg="./video/final_k.mp4"
        homepage_heading="Surfaces That Speak of Luxury, Whispers of Style"
      />
      {/*<HeroSection  banner_image={homepage_image_second}  homepage_heading2="Elevate Your Space with Royale Touche: Where Luxury is a Lifestyle."/> */}

      <TextScroll />
      <Timeline />
      <New_carousal />
      <HomeStore />
      <Form />
      <Footer />
    </div>
  );
};

export default Page;
