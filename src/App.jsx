
import { useState, useMemo } from 'react'
import './App.css'



const nums = new Array(30_000_00).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_00,
  }
})
function App() {

  const [count, setCount] = useState(0);
  const [numbers, setNum] = useState(nums);

  /*useMemo*/
  // const Magical=nums.find(item=>item.isMagical==true);//Expensive Computation

  const Magical = useMemo(() => numbers.find(item => item.isMagical === true), [numbers])

  return (
    <>

      <h1>Magical number is {Magical.index}</h1>
      <p>{count}</p>
      <button onClick={() => {
        setCount((count) => count + 1)
        if (count == 10) {
          setNum(new Array(10_000_00).fill(0).map((_, i) => {
            return {
              index: i,
              isMagical: i === 9_000_00,
            }
          }))
        }

      }}>Click Me</button>


    </>
  )
}

export default App
