// TechnicalSpecifications.js
import React, { useState } from 'react';
import styles from "@/components/technical/technical.module.css" // Ensure the path is correct

const TechnicalSpecifications = () => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore); // Toggle the state to show/hide additional data
  };

  return (
   <div>
   
   <div className={styles.container}>
   <h2 className={styles.title}>{"TECHNICAL SPECIFICATIONS:"}</h2>
   <div className={styles.specification}>
     <div className={styles.label}>{"GRADE:"}</div>
     <div className={styles.value}>{"BWP Grade, Marine Grade"}</div>
   </div>
   <div className={styles.specification}>
     <div className={styles.label}>{"SPECIES USED:"}</div>
     <div className={styles.value}>{"Diptocarpus spp. & Selected Hardwood Timber"}</div>
   </div>
   <div className={styles.specification}>
     <div className={styles.label}>{"FACE VENEER:"}</div>
     <div className={styles.value}>{"Both Side Garjan (Diptocarpus spp.)"}</div>
   </div>
   {showMore && (
     <div>
       
     <div className={styles.specification}>
     <div className={styles.label}>{"GRADE:"}</div>
     <div className={styles.value}>{"BWP Grade, Marine Grade"}</div>
   </div>
   <div className={styles.specification}>
     <div className={styles.label}>{"SPECIES USED:"}</div>
     <div className={styles.value}>{"Diptocarpus spp. & Selected Hardwood Timber"}</div>
   </div>
   <div className={styles.specification}>
     <div className={styles.label}>{"FACE VENEER:"}</div>
     <div className={styles.value}>{"Both Side Garjan (Diptocarpus spp.)"}</div>
   </div>
     </div>
   )}
   <button className={styles.button} onClick={handleClick}>
     See more
   </button>
 </div>
   
   </div>
  );
};

export default TechnicalSpecifications;
