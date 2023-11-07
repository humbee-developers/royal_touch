import React from "react";
import styles from "@/common/contact_map/contact_map.module.css"
function Map(){
    return(
            <div className={styles.iframe_outer}>
            <iframe className={styles.hellom} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14687.12984113929!2d72.4599995347463!3d23.03175831407262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b9e585cfc57%3A0x833b59aeb8ec9afe!2sCrown%20Decor%20Private%20Limited!5e0!3m2!1sen!2sin!4v1698659550023!5m2!1sen!2sin" width="100%" height="750" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    )
}
export default Map;