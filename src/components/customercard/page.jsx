"use client"
import { Navigation, Pagination, Scrollbar, EffectFade, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade"
import 'swiper/css/scrollbar';
import styles from "@/components/customercard/customerCard1.module.css"
import carousal_image from "@/images/customerCard_image.png"
import carousal_image2 from "@/images/aboutUs_carousal_image.png"
import rightArrow from "@/images/Arrow.svg"
const Page = () => {

 
  
  return (
    <div className={styles.customerCard_wrapper}>
    <div className={styles.customerCard_sideOne}>
    <Swiper
    effect="fade"
    speed={2000}
    fadeEffect={{
      crossFade:true,
    }}
    modules={[Navigation, Scrollbar, Pagination , EffectFade, A11y]}
    spaceBetween={1}
    slidesPerView={1}
    pagination={{
      clickable: true,
    }}
    
    navigation={{
      nextEl: ".slider_image_swiper_button_next__Eddeo img",
      prevEl: ".slider_image_swiper_button_prev__tPH_z img",
    }}

  >

    
      <SwiperSlide className={styles.carousal}>
      <Image src={carousal_image} alt="Picture of the author" fill  className={styles.carousal_image_outer} />
      <div className={styles.textOverlay}>
      <p data-scroll data-scroll-speed="0.1" className={styles.textOverlay_text}>Achievement</p>
      <h1 data-scroll data-scroll-speed="0.05" className={styles.textOverlay_text2}>40K+ Customers</h1>
    </div>
      
      </SwiperSlide>
      <SwiperSlide className={styles.carousal}>
      <Image src={carousal_image2} alt="Picture of the author" fill  className={styles.carousal_image_outer} />
      <div className={styles.textOverlay}>
      <p data-scroll data-scroll-speed="0.1" className={styles.textOverlay_text}>Achievement</p>
      <h1 data-scroll data-scroll-speed="0.05" className={styles.textOverlay_text2}>50K+ Customers</h1>
    </div>
      </SwiperSlide>
      <SwiperSlide className={styles.carousal}>
      <Image src={carousal_image} alt="Picture of the author" fill  className={styles.carousal_image_outer} />
      <div className={styles.textOverlay}>
      <p data-scroll data-scroll-speed="0.1" className={styles.textOverlay_text}>Achievement</p>
      <h1 data-scroll data-scroll-speed="0.05" className={styles.textOverlay_text2}>4iK+ Customers</h1>
    </div>
      </SwiperSlide>
      <SwiperSlide className={styles.carousal}>
      <Image src={carousal_image2} alt="Picture of the author" fill  className={styles.carousal_image_outer} />
      <div className={styles.textOverlay}>
      <p data-scroll data-scroll-speed="0.1" className={styles.textOverlay_text}>Achievement</p>
      <h1 data-scroll data-scroll-speed="0.05" className={styles.textOverlay_text2}>10K+ Customers</h1>
    </div>
      </SwiperSlide>
      <SwiperSlide className={styles.carousal}>
      <Image src={carousal_image} alt="Picture of the author" fill  className={styles.carousal_image_outer} />
      <div className={styles.textOverlay}>
      <p data-scroll data-scroll-speed="0.1" className={styles.textOverlay_text}>Achievement</p>
      <h1 data-scroll data-scroll-speed="0.05" className={styles.textOverlay_text2}>40K+ Customers</h1>
    </div>
      </SwiperSlide>
      <SwiperSlide className={styles.carousal}>
      <Image src={carousal_image2} alt="Picture of the author" fill  className={styles.carousal_image_outer} />
      <div className={styles.textOverlay}>
      <p data-scroll data-scroll-speed="0.1" className={styles.textOverlay_text}>Achievement</p>
      <h1 data-scroll data-scroll-speed="0.05" className={styles.textOverlay_text2}>40K+ Customers</h1>
    </div>
      </SwiperSlide>
      <SwiperSlide className={styles.carousal}>
      <Image src={carousal_image} alt="Picture of the author" fill  className={styles.carousal_image_outer} />
      <div className={styles.textOverlay}>
      <p data-scroll data-scroll-speed="0.1"  className={styles.textOverlay_text}>Achievement</p>
      <h1 data-scroll data-scroll-speed="0.05" className={styles.textOverlay_text2}>40K+ Customers</h1>
    </div>
      </SwiperSlide>
     

      
    </Swiper>

    </div>

    <div className={styles.customerCard_sideTwo}>
    <div className={styles.image_swiper_button_next}>
    <Image className={styles.navigation_arrow} src={rightArrow} alt="rightArrow" />
  </div>
  <div className={styles.image_swiper_button_prev}>
    <Image className={styles.navigation_arrow} src={rightArrow} alt="rightArrow" />
  </div>
    </div>
    </div>
  );
};

export default Page;
