import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(69);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <h1>Counter = {count}</h1>
      <div className='card'>Count is {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)} style={{ margin: "0 5px" }}>Increase</button>
        <button onClick={() => setCount((count) => Math.max(count - 1, 0))} style={{ margin: "0 5px" }}>Decrease</button>
        <button onClick={() => { setCount(0) }} style={{ margin: "0 5px" }}>Reset</button>
      </div>
      <div style={{ margin: "30px 0" }}>
        <input type="text" value={count2} onChange={(e) => { setCount2(Number(e.target.value)) }}
          style={{
            width: "100px",
            marginLeft: "20px",
            border: "1px solid white",
            padding: "0.6em 1.2em"
          }} />
        <button onClick={() => { setCount2(69) }} style={{ margin: "0 5px" }}>Set to 69</button>
      </div>
    </>
  )
}

export default App
