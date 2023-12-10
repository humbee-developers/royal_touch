import React from 'react'
import Image from 'next/image'
import styles from "@/common/inner_page_common_img/inner_page_common_img.module.css"
const Page = (props) => {
  return (
    <div>
      <div className={styles.common_img_outer}>
            <Image fill src={props.common_img} alt='image' className={styles.common_img}/>
      </div>
    </div>
  )
}

export default Page