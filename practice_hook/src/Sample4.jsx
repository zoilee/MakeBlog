import React, {useState, useRef} from 'react'

const Sample4 = () => {

    const [count, setCount] = useState(0);
    const inputRef = useRef(null);
    const countRef = useRef(0);
    console.log(countRef);
    console.log("♥")
    const increateCountState = () =>{
        setCount(count + 1);
    }
    const increateCountRef = () => {
        countRef.current = countRef.current + 1;
    }

    const handleFocus = () => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }


  return (
    <div>
        <p>State : {count}</p>
        <p>Ref : {countRef.current}</p>
        <button onClick={increateCountState}>State 증가</button>
        <button onClick={increateCountRef}>Ref 증가</button>

        <input ref={inputRef} type="text" placeholder='focus'/>
        <button onClick={handleFocus}>input에 포커스</button>
    </div>
  )
}

export default Sample4