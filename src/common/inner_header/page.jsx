import React from 'react'
import { useRouter } from "next/navigation";
import Button from "@/common/button/Button";
import Navbar from "@/components/navbar/index";
import Image from "next/image";
import logo from "@/images/logo.png";
import styles from "@/common/inner_header/inner.module.css"
const Page = (props) => {
  const router = useRouter();
  return (
    <div className={styles.s}>
    <div className={styles.inner_image_outer}>
    <Image fill alt="image" src={props.inner_header_image} className={styles.homepage_image}
          />
          <div className={styles.inner_header_text}>
          <div className={styles.inner_header_t1}>{props.heading}</div>
          <div className={styles.inner_header_t2}>{props.heading2}</div>

          </div>
    </div>
      <div className={styles.home_nav_setting}>
        <div className={styles.nav_menu_names}>
          <Image  onClick={()=> router.push("/")} src={logo} alt="image" className={styles.logo} />
        </div>
        <div className={styles.btn_outer}>
          <Button onClick={()=> router.push("/")} btn_text="New Arrivals" />
        </div>

        <div className={styles.nav_ham_button}>
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default Page