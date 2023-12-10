import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, EffectFade } from "swiper/modules";
import styles from "@/components/plywood_carousal/plywood_carousal.module.css";
import "@/components/plywood_carousal/inx.css";
import Image from "next/image";
import image from "@/images/c1.png";
import image1 from "@/images/c2.png";
import image2 from "@/images/c3.png";
import image3 from "@/images/c4.png";
import image4 from "@/images/r1.png";
import image5 from "@/images/r2.png";
import image6 from "@/images/r3.png";
import image7 from "@/images/r4.png";

import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-fade";

export default function SampleSlider() {
  const [thumbs, setThumbs] = useState(null);
  return (
    <>
      <div className={styles.main_section_carousel_circle}>
        <Swiper
          centeredSlides={false}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          speed={1500}
          loop={true}
          modules={[Navigation, Thumbs, EffectFade]}
          thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
          navigation={false}
        >
          <div className={styles.swiper_main_section_circle}>
            <SwiperSlide>
              <div className={styles.swiper_content_section_circle}>
                <Image src={image} alt="" className={styles.img_main} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper_content_section_circle}>
                <Image src={image1} alt="" className={styles.img_main} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper_content_section_circle}>
                <Image src={image2} alt="" className={styles.img_main} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.swiper_content_section_circle}>
                <Image src={image3} alt="" className={styles.img_main} />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>

        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          loop={false}
          onSwiper={setThumbs}
        >
          <div className={styles.swiper_thumbnail}>
            <SwiperSlide>
              <div className={styles.swiper_thumbnail}>
                <div className={styles.image_ab_text}>KITCHEN</div>
                <Image src={image4} alt="" className={styles.img_thumbnail} />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.swiper_thumbnail}>
                <div className={styles.image_ab_text}>WALL</div>
                <Image src={image5} alt="" className={styles.img_thumbnail} />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.swiper_thumbnail}>
                <div className={styles.image_ab_text}>CABINET DOOR</div>
                <Image src={image6} alt="" className={styles.img_thumbnail} />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.swiper_thumbnail}>
                <div className={styles.image_ab_text}>TV CABINET</div>
                <Image src={image7} alt="" className={styles.img_thumbnail} />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}
