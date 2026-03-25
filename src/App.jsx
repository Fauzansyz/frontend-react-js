import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './App.css'
import TopNavBar from './components/navbar/TopNavBar'
import HeroSection from './components/hero/HeroSection'
import FeatureSection from './components/feature/FeatureSection'

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  return (
    <>
    <TopNavBar />
      <HeroSection />
    <FeatureSection />
    </>
  )
}

export default App
