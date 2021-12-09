import styles from './App.module.css'
import Header from './components/Header'
import MainFeature from './components/MainFeature'
import SecondaryFeatures from './components/SecondaryFeatures'
import Footer from './components/Footer'

const COMPANY = 'Wilson\'s Bicycle Emporium'
const FEATURES = [0,1,2,3,4,].map((x) => ({ text: `Featured Item ${x}`}))
const mainFeature = FEATURES[0]
const secondaryFeatures = FEATURES.slice(1,5)
console.log(secondaryFeatures)
function App() {
  return (
    <div className={styles.app}>
      <Header company={COMPANY} />
      <MainFeature item={mainFeature} />
      {/*How do I do v-for and why am I getting an error when I pass in secondaryFeatures */}
      <SecondaryFeatures item={mainFeature} />
      <Footer company={COMPANY} />
    </div>
  )
}

export default App
