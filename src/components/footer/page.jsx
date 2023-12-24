"use client"
import React from "react";
import Image from "next/image";
import footer_logo from "@/images/footer_logo.png";
import Button from "@/common/button/button4"
import Title from "@/components/footer/test"
import styles from "@/components/footer/footer.module.css";
const Page = () => {
 
  return (
    <div>
  <div className={styles.footer_upper_heading_wrapper}>
  <h1 className={styles.footer_upper_heading}>{"Become an early adopter"}</h1>
  <Button btn_text="Book Demo"/>
 
  </div>
  <Title/>
      <div className={styles.footer_wrapper}>
    
        <div className={styles.footer_firstSide}>
          <Image
            src={footer_logo}
            alt="Footer-logo"
            className={styles.footer_logo_image}
          />
        </div>
        <div className={styles.footer_secondSide}>
          <div className={styles.footer_titles}>{"INFORMATION"}</div>
          <ul className={styles.footer_headers}>
            <li className={styles.footer_item_list}>{"About us"}</li>
            <li className={styles.footer_item_list}>{"Careers"}</li>
            <li className={styles.footer_item_list}>{"Find Nearest Store"}</li>
            <li className={styles.footer_item_list}>{"Quality"}</li>
            <li className={styles.footer_item_list}>{"Our Catalogues"}</li>
          </ul>
        </div>

        <div className={styles.footer_third_Side}>
          <div className={styles.footer_titles}>{"HELP"}</div>
          <ul className={styles.footer_headers}>
            <li className={styles.footer_item_list}>{"Privacy policy"}</li>
            <li className={styles.footer_item_list}>{"Toll free number"}</li>
            <li className={styles.footer_item_list}>{"Return policy"}</li>
            <li className={styles.footer_item_list}>{"Contact us"}</li>
            <li className={styles.footer_item_list}>{"FAQ's"}</li>
          </ul>
        </div>

        <div className={styles.footer_forthSide}>
          <div className={styles.footer_titles}>{"PRODUCT GUIDE"}</div>
          <ul className={styles.footer_headers}>
            <li className={styles.footer_item_list}>{"Laminates"}</li>
            <li className={styles.footer_item_list}>{"Wooden Floor"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
