"use client"
import React from 'react'
import Image from "next/image";
import homepage_box from "@/images/india.svg"
import Button from"@/common/button/button2"
import styles from "@/components/homeStore/pageStore.module.css"
const page = () => {
  return (
      <>
          <div className={styles.responsive_section}>
              <div className={styles.content1}>
              <p   className={styles.heading}>Discover the Elegance of
                      <span> Royale Touché</span> Laminates</p>
                  <p   className={styles.content}>Looking to experience the luxury of
                  <span> Royale Touché</span> laminates up close?
                      You're just a click away from exploring our exquisite range of laminates and getting expert advice from our trusted partners.</p>
                  <div className={styles.common_button_outer3}>
                  <Button  btn_text="FIND A STORE NEAR ME"/>
                  </div>
              </div>
              <div className={styles.image_wrapper}>
                  <Image  src={homepage_box} alt="Your Image"  className={styles.image}/>
              </div>
          </div>
  </>
  )
}

export default page