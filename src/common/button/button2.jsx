'use client'
 
import { useRouter } from 'next/navigation'
import React from "react";
import styles from"@/common/button/button.module.css"
function Button(props) {
    const router = useRouter()
    return (
      
<button onClick={()=>router.push("/findStore")} className={styles.button2} role="button"><span className={styles.text2}>{props.btn_text}</span><span className={styles.text2}>{props.btn_text}</span></button>


    )
}
export default Button;