"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";
import { useRouter } from "next/navigation";
import Button from "@/common/button/Button";

import styles from "@/components/heroSection/heroSection.module.css";
import { useEffect, ref } from "react";
import gsap from "gsap";
import splitType from "split-type";
import { useReducer } from "react";
import "./heroSection_textAnimation.css"
const Page = (props) => {
  const router = useRouter();
  const heading_ref = useRef("");
  let refs = useRef([]);
  useEffect(() => {
    setTimeout(() => {
      const ourText = new splitType(heading_ref.current, { types: "chars" });
      const chars = ourText.chars;
      gsap.fromTo(
        chars,
        {
          y: 100,
          opacity: 0,
          rotate: "45deg",
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 2,
          rotate: "0deg",
          ease: "power4.out",
        }
      );
    }, 2300);
  }, []);
  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p key={word + "_" + i} className="hero_text_animation_wrapper">
          {letters}
        </p>
      );
    });
    return body;
  };
  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };
  return (
    <div>
      <div className={styles.home_nav_setting}>
        <div className={styles.nav_menu_names}>
          <Image
            onClick={() => router.push("/")}
            src={logo}
            alt="image"
            className={styles.logo}
          />
        </div>
        <div className={styles.btn_outer}>
          <Button onClick={() => router.push("/")} btn_text="New Arrivals" />
        </div>
     
      </div>
      <div className={styles.homepage_image_wrapper}>
        {props.video_bg && (
          <div className={styles.video_outer}>
            <video autoPlay loop muted className={styles.videoBackground}>
              <source
                className={styles.video_bg}
                src={props.video_bg}
                type="video/mp4"
              />
            </video>
          </div>
        )}
        {props.banner_image && (
          <Image
            alt="image"
            src={props.banner_image}
            fill
            className={styles.homepage_image}
          />
        )}
        <div className={styles.header_text_wrapper}>
          <div
            data-scroll
            data-scroll-speed="0.3"
            className={styles.header_text}
            ref={heading_ref}
          >
            {props.homepage_heading && splitWords(props.homepage_heading)}
          </div>
          <div
            data-scroll
            data-scroll-speed="0.3"
            className={styles.header_text2}
          >
            {props.homepage_heading2}
          </div>
          <div
            data-scroll
            data-scroll-speed="0.2"
            className={styles.header_name}
          >
            {props.header_name}
          </div>
          <div
            data-scroll
            data-scroll-speed="0.2"
            className={styles.header_comment}
          >
            {props.header_comment}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;