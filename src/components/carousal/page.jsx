import React from 'react'
import Image from "next/image";
import image3 from "@/images/quality_banner_image.png"
import image5 from "@/images/ProductPage_banner_image.png"
import styles from "@/components//carousal/page.module.css"
const Page = () => {
  return (
    <div>
    <div className={styles.container}>
    <div className={styles.gallery}>
    <div className={styles.img_box}>
    <Image src={image3} alt="Picture of the author"   className={styles.homepage} />
   <div style={{position:"relative"}}>
   <p className={styles.carousal_card_text}>Achievement</p>
   <h4 className={styles.carousal_card_heading}>40K+ Customers</h4>
   </div>
    </div>

    <div className={styles.img_box}>
    <Image src={image3} alt="Picture of the author"   className={styles.homepage} />
    <div style={{position:"relative"}}>
    <p className={styles.carousal_card_text}>Achievement</p>
    <h4 className={styles.carousal_card_heading}>40K+ Customers</h4>
    </div>
    </div>

    <div className={styles.img_box}>
    <Image src={image3} alt="Picture of the author"  className={styles.homepage} />
    <div style={{position:"relative"}}>
    <p className={styles.carousal_card_text}>Achievement</p>
    <h4 className={styles.carousal_card_heading}>40K+ Customers</h4>
    </div>
    </div>

    <div className={styles.img_box}>
    <Image src={image3} alt="Picture of the author"   className={styles.homepage} />
    <div style={{position:"relative"}}>
    <p className={styles.carousal_card_text}>Achievement</p>
    <h4 className={styles.carousal_card_heading}>40K+ Customers</h4>
    </div>
    </div>

    <div className={styles.img_box}>
    <Image src={image5} alt="Picture of the author"  className={styles.homepage} />
    <div style={{position:"relative"}}>
   <p className={styles.carousal_card_text}>Achievement</p>
   <h4 className={styles.carousal_card_heading}>40K+ Customers</h4>
   </div>
    
    </div>

    </div>
    
    </div>
    
    
    </div>
  )
}

export default Page