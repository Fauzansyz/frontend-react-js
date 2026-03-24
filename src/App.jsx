import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
    ref={ref}
          className="counter"
          onClick={() => {
            setCount((count) => {
              return count + 1
            })


  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      {
        x: 0,
        y:0,
      },
      {
        x: 0,
        y:10,
        duration: 1,
        yoyo: true,
      },
    )
  }, [ref])

          }}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>
    </>
  )
}

export default App
