import { useRef } from 'react'

const ButtonClickCount = () => {
    const countValue = useRef(0);
    const handleClick = () =>{
      countValue.current = countValue.current + 1 ;
      alert('The Count value is ' + countValue.current + ' Times');
    };

  return (
    <>
    <div>
        <p>The Count value is {countValue.current} times!</p>
        <button onClick={handleClick}>Button Click!</button>
    </div>
    </>
  )
}

export default ButtonClickCount