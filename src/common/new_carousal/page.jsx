import { Navigation, EffectFade, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import slider_image from "@/images/new_contact.png";
import slider_image3 from "@/images/new_product.png";
import slider_image4 from "@/images/new_product1.png"
import rightArrow from "@/images/Arrow.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import styles from "@/common/new_carousal/new_carousal.module.css";
const Page = ()=> {
  
  return (
    
    <div className={styles.sliderCard_outer_first}>
      <div className={styles.sliderCard}>
        <Swiper
          effect="fade"
          speed={500}
          fadeEffect={{
            crossFade: true,
          }}
          
          modules={[Navigation, EffectFade, A11y , Autoplay]}
          
          spaceBetween={5}
          slidesPerView={1}
          
          loop={true}
          autoplay={
            {delay: 2000}
          }
          navigation={{
            nextEl: ".new_carousal_image_swiper_button_next__S2lHF img",
            prevEl: ".new_carousal_image_swiper_button_prev__1cMQG img",
          }}>
          <SwiperSlide>
            <div className={styles.slider_wrapper}>
              <div className={styles.slider_side_one}>
                <div className={styles.side_one_wrapper}>
                  <div className={styles.photo_gallery}>Photo Gallery</div>
                  <div className={styles.slider_header}>
                  {"5000+ Laminate Designs"}
                  </div>

                  <div className={styles.slider_text}>
                  {"Royale Touche offers a staggering variety of over 5000+ laminate designs, allowing you to pick the perfect style for your space."}
                  </div>
                </div>
              </div>

              <div className={styles.slider_side_two}>
                <div className={styles.slider_image_outer}>
                  <Image
                    src={slider_image3}
                    alt="Picture of the author"
                    className={styles.slider_image_test}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slider_wrapper}>
              <div className={styles.slider_side_one}>
                <div className={styles.side_one_wrapper}>
                  <div className={styles.photo_gallery}>Photo Gallery</div>
                  <div className={styles.slider_header}>
                  {"10-15 years of Durability"}
                  </div>

                  <div className={styles.slider_text}>
                  {"Our laminates are built to last, with an average lifespan of 10-15 years, making them a long-term investment in your home's aesthetics."}
                  </div>
                </div>
              </div>

              <div className={styles.slider_side_two}>
                <div className={styles.slider_image_outer}>
                  <Image
                    src={slider_image}
                    alt="Picture of the author"
                    className={styles.slider_image_test}
                  />

                  
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slider_wrapper}>
              <div className={styles.slider_side_one}>
                <div className={styles.side_one_wrapper}>
                  <div className={styles.photo_gallery}>Photo Gallery</div>
                  <div className={styles.slider_header}>
                  {"95% Happy Customers"}
                  </div>

                  <div className={styles.slider_text}>
                  {"Over 95% of our customers report being highly satisfied with our products and service, showcasing our commitment to excellence."}
                  </div>
                </div>
              </div>

              <div className={styles.slider_side_two}>
                <div className={styles.slider_image_outer}>
                  <Image
                    src={slider_image3}
                    alt="Picture of the author"
                    className={styles.slider_image_test}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.slider_wrapper}>
              <div className={styles.slider_side_one}>
                <div className={styles.side_one_wrapper}>
                  <div className={styles.photo_gallery}>Photo Gallery</div>
                  <div className={styles.slider_header}>
                 {" 80% Of laminates are eco-friendly"}
                  </div>
                  <div className={styles.slider_text}>
                  {"Royale Touche is proud to have reduced its environmental impact by using sustainable materials and practices. More than 80% of our laminates are eco-friendly."}
                  </div>
                </div>
              </div>

              <div className={styles.slider_side_two}>
                <div className={styles.slider_image_outer}>
                  <Image
                    src={slider_image4}
                    alt="Picture of the author"
                    className={styles.slider_image_test}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>


          <div className={styles.customerCard_sideTwo}>
                  <div className={styles.image_swiper_button_next}>
                    <Image
                      className={styles.navigation_arrow}
                      src={rightArrow}
                      alt="rightArrow"
                    />
                  </div>
                  <div className={styles.image_swiper_button_prev}>
                    <Image
                      className={styles.navigation_arrow}
                      src={rightArrow}
                      alt="rightArrow"
                    />
                  </div>
                </div>
        </Swiper>

        
      </div>
    </div>
  );
};
export default Page;