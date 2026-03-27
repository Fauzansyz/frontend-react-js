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
import TestimoniSection from './components/testimonial/TestimoniSection'

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  const userTestimonial = [
    {
      name: 'John Doe',
      profileImage: 'https://images.unsplash.com/photo-1614644147724-2d4785d69962?auto=format&fit=crop&q=80&w=1160',
      category: 'CEO',
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.',
    },
    {
      name: 'AsepSurasep',
      profileImage: 'https://images.unsplash.com/photo-1614644147724-2d4785d69962?auto=format&fit=crop&q=80&w=1160',
      category: 'Founder',
      testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.',
    }
  ]

  const pricing = [
    {
    name: 'Child',
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
    name:"Pioneer",
    pricing: '$49',
    feature: [
      '100 users logins per month',
      'Unlimited projects',
      'Unlimited features',
      'Unlimited support',
      '15Gbps data transfer'
      ]
    },
    {
    name:"Explorer",
    pricing: '$99',
    feature: [
      'Unlimited users logins per month',
      'Unlimited projects',
      'Unlimited features',
      'Unlimited support',
      'Unlimited data transfer'
      ]
    },
     {
    name:"Buisness",
    pricing: '$199',
    feature: [
      'Unlimited users logins per month',
      'Unlimited projects',
      'Unlimited features',
      'Unlimited support',
      'Unlimited data transfer',
      'Early access to new features'
      ]
     }
  ]

  return (
    <>
    <TopNavBar />
     <HeroSection />
      <FeatureSection />
     <PricingSection data={pricing} />
    <TestimoniSection data={userTestimonial} />
    </>
  )
}

export default App
