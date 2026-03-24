import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './App.css'
import TopNavBar from './components/navbar/TopNavBar'

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  return (
    <>
    <TopNavBar />
    <div className="w-full h-10 p-5">
    <span class="rounded-full bg-teal-100 px-3.5 py-0.5 text-sm whitespace-nowrap text-purple-700 dark:bg-teal-500 dark:text-white">
      Live
    </span>

    <span class="rounded-full border border-teal-500 px-3.5 py-0.5 text-sm whitespace-nowrap text-purple-700 dark:text-white">
      Live
    </span>
    </div>
    </>
  )
}

export default App
