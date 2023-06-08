import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Exercise from './components/Header/Exercise/Exercise'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header></Header>
        <h3>Today's Training Activities:</h3>
        <Exercise></Exercise>
      </div>
    </>
  )
}

export default App
