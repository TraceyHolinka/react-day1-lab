import FeatureCard from "./FeatureCard";
import styles from "./SecondaryFeatures.module.css";

function SecondaryFeatures({item}) {
  return (
      <div className={styles.container}>
        <FeatureCard featured={item} />
        <FeatureCard featured={item} />
        <FeatureCard featured={item} />
        <FeatureCard featured={item} />
    </div>
  )
}

export default SecondaryFeatures