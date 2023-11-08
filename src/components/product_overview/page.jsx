import ProductOverviewItem from "@/components/product_overview/index"
import styles from '@/components/product_overview/product_overview.module.css'
import Image from "next/image"
import propImage from "@/images/quality1.png"
import propMaxImage from "@/images/quality2.png"
const productOverviewData = [
  {
    heading: "Pro",
    image: propImage,
    title: "Product Overview:",
    cotnent:
      "Royale Touche Plywood is a premium-grade Structural Plywood made from carefully selected hardwood timber, offering exceptional strength, high load-bearing capacity, durability against all weather conditions, fire retardant properties, and protection against termites and borer. Utilizing an advanced vacuum pressure treatment system with nano-molecule chemicals ensures top-notch performance and longevity of the plywood.",
    secondContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    heading: "Pro Max",
    image: propMaxImage,
    title: "Product Overview:",
    cotnent:
      "Royale Touche Plywood is a premium-grade Structural Plywood made from carefully selected hardwood timber, offering exceptional strength, high load-bearing capacity, durability against all weather conditions, fire retardant properties, and protection against termites and borer. Utilizing an advanced vacuum pressure treatment system with nano-molecule chemicals ensures top-notch performance and longevity of the plywood.",
    secondContent:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
];
const ProductOverview = () => {
  return (
    <div className={styles.productOverview}>
      <div className={styles.wrapper}>
        {productOverviewData.map((item, index) => (
          <ProductOverviewItem
            key={index}
            heading={item.heading}
            image={item.image}
            title={item.title}
            content={item.cotnent}
            secondContent={item.secondContent}
          />
        ))}
      </div>
    </div>
  );
};
export default ProductOverview;