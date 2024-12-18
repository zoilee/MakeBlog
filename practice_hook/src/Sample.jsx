import React, {useMemo, useState} from 'react'

const bokHam = (number) =>{
  console.log("복잡한 함수 실행");
  for (let i=0; i< 99999999; i++){
    //함수를 막 계산하는 시간입니다.
  }
  return number + 100000;
}

const Sample = () => {
  const [num1, setNum1] = useState('1');
  const [num2, setNum2] = useState('1');
  const bokham = useMemo(()=>{
    return bokHam(num1);
  },[num1]); 
  return (
    <div>
      <input type="number" value={num1} onChange={(e)=>setNum1(parseInt(e.target.value))} />
      <div> 100000+{num1} ={bokham}</div>
      <input type="number" value={num2} onChange={(e)=>setNum2(parseInt(e.target.value))} />
      <div> 100000+{num1} ={bokham}</div>
    </div>
  )
}

export default Sample