import styles from "@/components/product_overview/product_overview.module.css"
import Image from "next/image"
const ProductOverviewItem = ({
  heading,
  image,
  title,
  content,
  secondContent,
}) => {
  return (
    <div className={styles.productOverviewCard}>
      <div className={styles.productOverviewCard_wrapper}>
        <h2>{heading}</h2>
        <div className={styles.image}>
        <Image  src={image} alt="Your Image"  />
        </div>
        <div className={styles.contentSec}>
          <div className={styles.title}>{title}</div>
          <div className={styles.content}>{content}</div>
          <div className={styles.secondConetnt}>{secondContent}</div>
        </div>
      </div>
    </div>
  );
};
export default ProductOverviewItem;







