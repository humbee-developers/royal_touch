
import {Navigation,EffectFade, A11y,} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import slider_image from "@/images/tst.png";
import slider_image2 from "@/images/tst.png"
import rightArrow from "@/images/arrow2.svg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade"
import styles from "@/components/slider/slider.module.css";
const Page = () => {
  return (
    <div className={styles.sliderCard_outer_first}>
      <div className={styles.sliderCard}>
        <Swiper
          effect="fade"
          speed={800}
          fadeEffect={{
            crossFade: true,
          }}
          modules={[Navigation, EffectFade, A11y]}
          spaceBetween={5}
          loop={true}
          slidesPerView={1}
          navigation={{
            nextEl: ".slider_image_swiper_button_next__Eddeo img",
            prevEl: ".slider_image_swiper_button_prev__tPH_z img",
          }} >

          <SwiperSlide>
            <div className={styles.slider_wrapper}>
              <div className={styles.slider_side_two}>
                <div className={styles.slider_image_outer}>
                  <Image
                    src={slider_image}
                    alt="Picture of the author"
                    className={styles.slider_image_test}
                  />
                </div>
              </div>
              <div className={styles.slider_side_one}>
              <div className={styles.side_one_wrapper}>
                <div className={styles.slider_header}>Lorem Ipsum is simply a text</div>
              
                <div className={styles.slider_text}>
                {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"}
                </div>
                
              </div>
            </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className={styles.slider_wrapper}>
          
            <div className={styles.slider_side_two}>
              
              <div className={styles.slider_image_outer}>
                <Image
                  src={slider_image2}
                  alt="Picture of the author"
                
                  className={styles.slider_image_test}
                />
              </div>
            </div>

            <div className={styles.slider_side_one}>
            <div className={styles.side_one_wrapper}>
              <div className={styles.slider_header}>Lorem Ipsum is simply footer</div>
            
              
              <div className={styles.slider_text}>
              {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived centuries, but also the leap"}
              </div>
              
            </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className={styles.slider_wrapper}>
            
              <div className={styles.slider_side_two}>
                
                <div className={styles.slider_image_outer}>
                  <Image
                    src={slider_image2}
                    alt="Picture of the author"
                  
                    className={styles.slider_image_test}
                  />
                </div>
              </div>

              <div className={styles.slider_side_one}>
              <div className={styles.side_one_wrapper}>
                <div className={styles.slider_header}>Lorem Ipsum </div>
              
                
                <div className={styles.slider_text}>
                {"Lorem Ipsum has been the industry's standard dummy text ever, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"}
                </div>
                
              </div>
            </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className={styles.slider_wrapper}>
          
            <div className={styles.slider_side_two}>
              
              <div className={styles.slider_image_outer}>
                <Image
                  src={slider_image}
                  alt="Picture of the author"
                
                  className={styles.slider_image_test}
                />
              </div>
            </div>

            <div className={styles.slider_side_one}>
            <div className={styles.side_one_wrapper}>
              <div className={styles.slider_header}>Lorem Ipsum is simply a text for test.</div>
            
              
              <div className={styles.slider_text}>
              {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap"}
              </div>
              
            </div>
          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className={styles.slider_wrapper}>
        
          <div className={styles.slider_side_two}>
            
            <div className={styles.slider_image_outer}>
              <Image
                src={slider_image2}
                alt="Picture of the author"
              
                className={styles.slider_image_test}
              />
            </div>
          </div>

          <div className={styles.slider_side_one}>
          <div className={styles.side_one_wrapper}>
            <div className={styles.slider_header}>Lorem Ipsum is simply</div>
            <div className={styles.slider_text}>
            {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap and study to product odd section."}
            </div>
            
          </div>
        </div>
        </div>
      </SwiperSlide>


        </Swiper>



        <div className={styles.customerCard_sideTwo}>
        <div className={styles.image_swiper_button_next}>
        <Image className={styles.navigation_arrow} src={rightArrow} alt="rightArrow" />
      </div>
      <div className={styles.image_swiper_button_prev}>
        <Image className={styles.navigation_arrow} src={rightArrow} alt="rightArrow" />
      </div>
        </div>
      </div>
    </div>
  );
};
export default Page