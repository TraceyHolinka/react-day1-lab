import FeatureCard from "./FeatureCard"
import styles from './MainFeature.module.css'


function MainFeature({item}) {
  return (
      <div className={styles.container}>
        <FeatureCard featured={item} />
        <div className={styles.info}>
          <p>Best Selection in Town</p>
          <button className={styles.button}>Shop Now</button>
        </div>
      </div>
  )
}

export default MainFeature