import React from "react"
import Hammer from"@/images/aboutus_hammer1.png"
import Image from "next/image";
import styles from "@/components/aboutUs_hammer/hammer.module.css"
function Product1() {
    return (
        <div className={styles.hammer_wrapper}>

            <div className={styles.section}>
                <div className={styles.upper_left}>
                    <h3 className={styles.ply}>Plywood</h3>
                    <p className={styles.ply}>Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                        Lorem Ipsum</p>
                </div>
                <div className={styles.content}>
                    <p className={styles.content_1}><span>Royale Touché Marine Grade Plywood (IS:710)
                    </span> is a renowned product known for its superior quality and durability.  It is specially designed for applications that require resistance to moisture, water, and other environmental factors.
                    </p>
                    <p className={styles.content_2}>
                        Royale Touche Marine-grade plywood is a high-quality engineered wood product and it is conforming to
                        the IS:710 Indian Standard, indicating its compliance with stringent quality and performance requirements.
                    </p>
                </div>
            </div>
            <div className={styles.section}>

                <div className={styles.upper_right}>
                <h3 className={styles.ply1}>Blackboard</h3>
                    <p className={styles.ply1}>Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                        Lorem Ipsum</p>
                </div>
                <div className={styles.hammer_image_wrapper}>
                <Image src={Hammer} alt="Picture of the author"   className={styles.productimg} />
                
                </div>
            </div>

        </div>
    )
}
export default Product1;