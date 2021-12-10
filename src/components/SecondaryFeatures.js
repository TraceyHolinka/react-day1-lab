import FeatureCard from "./FeatureCard";
import styles from "./SecondaryFeatures.module.css";

function SecondaryFeatures({items}) {

  return (
      <div className={styles.container}>
        {items.map((item, index) => (
          <FeatureCard key={index} item={item} />
        ))}
    </div>
  )
}

export default SecondaryFeatures