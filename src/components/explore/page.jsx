"use client"
import React from "react";
import Image from "next/image";
import styles from "@/components/explore/explore.module.css";
import explore from "@/images/explore_image.png";
import Button from"@/common/button/button5"

const ExploreUs = () => {
  return (
    <div className={styles.explore_outer}>
      <div className={styles.explore_wrapper}>

        <div className={styles.explore_side_one_wrapper}>
          <h1 className={styles.explore_heading}>Explore <br /> All Products</h1>
          <p className={styles.explore_text}>Lorem ipsum dolor sit amet consectetuxr, adipisicing elit. Ipsa quis autem inventore, hic ut consequuntur.</p>
          <div className={styles.explore_button_wrapper}>
          
          <Button  btn_text="Explore us"/>
      
         
          </div>
        </div>
        <div className={styles.explore_side_two_wrapper}>
        <Image  src={explore} alt="Your Image"  className={styles.explore_image}/>
        </div>




      </div>
    </div>
  );
};
export default ExploreUs;
