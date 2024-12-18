import React, { useState } from 'react'

const Sanple3 = () => {
  
  const number = [1,2,3,4,5,6,7,8,9,10]

  const [element, setElement] = useState('');
  for (let i = 0; i < number.length; i++) {
    setElement(number[i]);
    
  }

  return (
    <div>
        <h1>useMemo 연습</h1>
        <p>배열 {element}</p>
        
        <p>전체 합계 : </p>
        <p>짝수 합계 : </p>

    </div>
  )
}

export default Sanple3