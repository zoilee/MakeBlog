import React, { useState,useMemo } from 'react'

const Sample3 = () => {
  
  const [input, setInput] = useState('');
  const [numbers, setNumbers] = useState([]);

  //전체배열의 합
  const totalNum = numbers.reduce((sum, num)=> sum + num, 0);

  //짝수 합 useMem(()=>{ return 함수결과}, 인자) 와 같은 방식
  const evenNum = useMemo(()=>{
    return numbers.filter((num)=> num %2 == 0).reduce((sum, num)=> sum+num, 0);
  },[numbers]); //numbers 가 변경 될때만 재계산
  


  const handleInputChange = (e) =>{
    setInput(e.target.value);
    //쉼표를 구분해서 자른다.
    const nums = e.target.value.split(",")
                               .map((num)=>parseInt(num.trim(), 10))
                               .filter((num)=>!isNaN(num)); //숫자가 아닌것은 제외
    setNumbers(nums);
  }
   


  return (
    <div>
        <h1>UseMemo 연습</h1>
        <input type="text" value={input} onChange={handleInputChange} />
        
        <p>전체 합계 : {totalNum}</p>
        <p>짝수 합계 : {evenNum}</p>

    </div>
  )
}

export default Sample3