"use client";
import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import pic1 from "@/images/ply.png"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './blockwood_Slider.css';
const Carousel1 = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const images = [
    {
      pic: pic1,
      heading: 'Energy',
      para: 'lorem',
    },
    {
      pic: pic1,
      heading: 'Energy',
      para: 'lorem',
    },
    {
      pic: pic1,
      heading: 'Energy',
      para: 'lorem',
    },
    {
      pic: pic1,
      heading: 'Energy',
      para: 'lorem',
    },
    {
      pic: pic1,
      heading: 'Energy',
      para: 'lorem',
    },
    {
      pic: pic1,
      heading: 'Energy',
      para: 'lorem',
    },
  ];
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '280px',
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    beforeChange: (current, next) => setImgIndex(next),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '60px',
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '60px',
          centerMode: true,
        },
      },
      {
        breakpoint: 476,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0px',
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div className="test_slider">
      <div className="test_slider_wrapper">
        <Slider {...settings}>
          {images.map((item, idx) => (
            <div
              key={idx}
              className={idx === imgIndex ? 'slide activeSlide' : 'slide'}
            >
              <div className="card_content">
                <Image src={item.pic} alt={item.heading} width={300} height={200} />
              </div>
              <div className="titles">
                <h3>{item.heading}</h3>
                <p>
                  {item.para} {idx}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Carousel1;