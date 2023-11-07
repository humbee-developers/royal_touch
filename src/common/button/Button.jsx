import React from "react";
import styles from"@/common/button/button.module.css"
function Button(props) {
    return (
      
<button className={styles.button1} role="button"><span className={styles.text1}>{props.btn_text}</span><span className={styles.text1}>{props.btn_text}</span></button>


    )
}
export default Button;