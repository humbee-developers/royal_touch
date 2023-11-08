import React from 'react'
import Image from "next/image";
import styles from "@/components/form/form2.module.css"
import Form from "@/components/form/page"
import form_image from "@/images/form-section.png";
const Page2 = () => {
  return (
    <>
    <div>
        <div className={styles.container}>
        <div className={styles.section1}>
            <Form />
        </div>
        <div  className={styles.section2}>
                <Image src={form_image} alt="none"   
                // Make the image display full width
                style={{
                  width: '100%',
                  height: '100%',
                  
                
                }}  className={styles.Image1}/>
        </div>
        </div>
    </div>
        </>
  )
}

export default Page2