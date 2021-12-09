import styles from './App.module.css'
import Header from './components/Header'
import MainFeature from './components/MainFeature'
import SecondaryFeatures from './components/SecondaryFeatures'
import Footer from './components/Footer'

const COMPANY = 'Wilson\'s Bicycle Emporium'
const FEATURES = [0,1,2,3,4,].map((x) => ({ text: `Featured Item ${x}`}))
const mainFeature = FEATURES[0]
const secondaryFeatures = FEATURES.slice(1,5)

function App() {
  return (
    <div className={styles.app}>
      <Header company={COMPANY} />
      <MainFeature item={mainFeature} />
      <SecondaryFeatures items={secondaryFeatures} />
      <Footer company={COMPANY} />
    </div>
  )
}

export default App
