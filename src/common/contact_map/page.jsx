import React from "react";
import styles from "@/common/contact_map/contact_map.module.css"
function Map(){
    return(
            <div className={styles.iframe_outer}>

            <iframe className={styles.hellom} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.425164494458!2d72.5118402758819!3d23.044869315494672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b51fe5be8d9%3A0x1c4999478aa4081a!2sRoyale%20Touche%20Laminates%20and%20Wooden%20Floors%20-%20Ahmedabad!5e0!3m2!1sen!2sin!4v1699507206577!5m2!1sen!2sin" width="100%" height="750"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    )
}
export default Map;