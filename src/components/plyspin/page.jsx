import React from 'react'
import styles from "@/components/plyspin/plyspin.module.css"
const Page = () => {
  return (
    <div>
      <div>
            <video autoPlay loop muted  className={styles.ply_spin_outer}  >
            <source
               className={styles.ply_spin}
                src="./video/plyspin.mp4"
                type="video/mp4"
              />
            </video>
      </div>
    </div>
  )
}

export default Page