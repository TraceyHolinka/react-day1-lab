import styles from './FeaturedCard.module.css'

function FeatureCard({featured}) {
  return (
    <div className={styles.card}>
      {featured['text']}
    </div>
  )
}

export default FeatureCard