import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "@/components/quality_slider/quality_slider.css"
import sliderArrow from "@/images/Arrow.svg"
import { useRef } from "react";
const KeyFeatures = () => {
  const arrowRef1 = useRef(null);
  const arrowRef2 = useRef(null);
  return (
    <div className={"keyFeatures"}>
      <div className={"wrapper"}>
        <div className={"heading"}>
          <h2> Key Features:</h2>
        </div>
        <div className={"keyFeatures_slider"}>
          <Swiper
            grabCursor={true}
            centeredSlides={false}
            loop={true}
            speed={1000}
            slidesPerView={4}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".sliderArrow_next",
              prevEl: ".sliderArrow_prev",
              disabledClass: "swiper-button-disabled",
            }}
            breakpoints={{
              1199: {
                // width: 576,
                slidesPerView: 4,
              },
              991: {
                // width: 768,
                slidesPerView: 3,
              },
              767: {
                // width: 768,
                slidesPerView: 2,
              },
              0: {
                // width: 768,
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div className={"slider_wrapper"}>
                <div className={"title"}>{"Raw Material:"}</div>
                <p>
                  {"Made from carefully selected hardwood timber to ensure high strength and durability."}
                </p>
                <p>{"Gurjan species used in the face veneers."}</p>
                <p>
                  {"Made from all composed full sheet veneers in all layers,ensuring a robust and well-structured plywood."}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={"slider_wrapper"}>
                <div className={"title"}>
                  {"High Solid Polymer used adhesives:"}
                </div>
                <p>
                 {" Use of 100% BWP grade, High solid Phenolic polymer ensures better bonding strength and excellent boiling waterproof properties."}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={"slider_wrapper"}>
                <div className={"title"}>
                  {"Strength and durability by balanced construction:"}
                </div>
                <p>
                  {"The plywood is constructed using an advanced cross-bonding technology, which enhances its strength and durability. The veneers are sourced from select hardwood species to ensure the plywood's stability and stand in the boiling water testing."}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={"slider_wrapper"}>
                <div className={"title"}>
                 {" Weather Durability by longer conditioning system of raw material and pressed material:"}
                </div>
                <p>
                  {"High durability against all weather conditions, ensuring longevity and warp-free performance. This maintains the ideal moisture balance, preventing warping or delamination."}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={"slider_wrapper"}>
                <div className={"title"}>{"Raw Material:"}</div>
                <p>
                  {"Made from carefully selected hardwood timber to ensure high strength and durability."}
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={"slider_wrapper"}>
                <div className={"title"}>{"Raw Material:"}</div>
                <p>
                  {"Made from carefully selected hardwood timber to ensure high strength and durability."}
                </p>
                <p>{"Gurjan species used in the face veneers."}</p>
                <p>
                  {"Made from all composed full sheet veneers in all layers,ensuring a robust and well-structured plywood."}
                </p>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className={"slider_wrapper"}>
                <div className={"title"}>{"Raw Material:"}</div>
                <p>
                  {"Made from carefully selected hardwood timber to ensure high strength and durability."}
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={"slider_wrapper"}>
                <div className={"title"}>
                  {"Strength and durability by balanced construction:"}
                </div>
                <p>
                  {"The plywood is constructed using an advanced cross-bonding technology, which enhances its strength and durability. The veneers are sourced from select hardwood species to ensure the plywood's stability and stand in the boiling water testing."}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={"slider_wrapper"}>
                <div className={"title"}>
                 {" Weather Durability by longer conditioning system of raw material and pressed material:"}
                </div>
                <p>
                  {"High durability against all weather conditions, ensuring longevity and warp-free performance. This maintains the ideal moisture balance, preventing warping or delamination."}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={"slider_wrapper"}>
                <div className={"title"}>{"Raw Material:"}</div>
                <p>
                  {"Made from carefully selected hardwood timber to ensure high strength and durability."}
                </p>
              </div>
            </SwiperSlide>
           
          </Swiper>
          <div className={"sliderArrow"}>
            <div className={"sliderArrow_next"} ref={arrowRef1}>
            <Image
            src={sliderArrow}
            alt="arrow-btn"
            
          
          />
            </div>
            <div className={"sliderArrow_prev"} ref={arrowRef2}>
            <Image
            src={sliderArrow}
            alt="arrow-button"
            
           
          />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KeyFeatures;