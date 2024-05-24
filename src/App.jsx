import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> Utsho is a Gay </h1>

        <button onClick={() => setCount(count + 1)}> Count + {count}</button>
      </div>
    </>
  )
}

export default App
