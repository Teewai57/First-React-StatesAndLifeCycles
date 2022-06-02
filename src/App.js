import React, { useState } from 'react'
// import Child from './Child'

const StateAndCycle = () => {
      const [Start, setStart] = useState(10)
      console.log(useState(Start));

      const increment = () => {
        setStart((Start) => {return Start + 1})
      }
    return (
        <div>
            <h1>{Start}</h1>
            <button className='btn btn-primary alert' onClick={increment}>Click Me</button>
        </div>
    )
  }

  export default StateAndCycle