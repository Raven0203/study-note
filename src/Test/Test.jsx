import React, { useEffect, useState } from 'react';

const Test = () => {
  const [open,setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }
  
useEffect(()=>{
console.log(`${open}`);
},[open])

  return (
    <div>
      <button onClick={handleClick}>Click</button>

      {open?(<h1>HI ni hao</h1>):("")}
    </div>
  );
}

export default Test;
