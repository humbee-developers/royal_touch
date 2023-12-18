import React from 'react'
import Image from 'next/image'
import styles from "@/common/inner_page_common_img/inner_page_common_img.module.css"
const Page = (props) => {
  return (
    <div>
      <div className={styles.common_img_outer}>
            <Image fill src={props.common_img} alt='image' className={styles.common_img}/>
            
<div className={styles.common_img_text}>
  <div className={styles.common_img_t}>{props.common_text}</div>
</div>

<div className={styles.inner_invo}>
  <div className={styles.inner_invo_text}>{props.invo}</div>
</div>

      </div>
    </div>
  )
}

export default Page