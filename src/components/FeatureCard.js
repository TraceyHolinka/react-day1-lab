import styles from './FeaturedCard.module.css'

function FeatureCard({item}) {
  return (
    <div className={styles.card}>
      {item['text']}
    </div>
  )
}

export default FeatureCard