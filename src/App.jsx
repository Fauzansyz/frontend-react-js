import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './App.css'
import TopNavBar from './components/navbar/TopNavBar'
import HeroSection from './components/hero/HeroSection'
import PricingSection from './components/pricing/PricingSection'
import FeatureSection from './components/feature/FeatureSection'

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  const pricing = [
    {
    pricing: '$29',
    feature: [
      '20 users logins per month',
      'Unlimited projects',
      'Unlimited features',
      'Unlimited support',
      '1Gbps data transfer'
      ]
    },
    {
    pricing: '$49',
    feature: [
      '100 users logins per month',
      'Unlimited projects',
      'Unlimited features',
      'Unlimited support',
      '15Gbps data transfer'
      ]
    }
  ]

  return (
    <>
    <TopNavBar />
     <HeroSection />
      <FeatureSection />
    <PricingSection data={pricing} />
    </>
  )
}

export default App
