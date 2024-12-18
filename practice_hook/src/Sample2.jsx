import React, {useState, useEffect} from 'react'

const Sample2 = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = isKorea ? '대한민국' : '다른나라';

  useEffect(()=>{
    console.log("Sample2가 리랜더링 되었습니다.")
  },[number])


  return (
    <div>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
        <br />
        <hr />
        <br />
        <h2>어느 나라에 있나요?</h2>
        <p>나라 : {location}</p>
        <button onClick={()=>setIsKorea(!isKorea)}>비행기 탑승</button>
    </div>
  )
}

export default Sample2