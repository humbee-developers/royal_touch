import React from 'react'
import { useRouter } from "next/navigation";
import Button from "@/common/button/Button";
import Navbar from "@/components/navbar/index";
import Image from "next/image";
import logo from "@/images/logo.png";
import styles from "@/common/inner_header/inner.module.css"
const page = (props) => {
  const router = useRouter();
  return (
    <div className={styles.s}>
    <div className={styles.inner_image_outer}>
    <Image fill alt="image" src={props.inner_header_image} className={styles.homepage_image}
          />
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

export default page