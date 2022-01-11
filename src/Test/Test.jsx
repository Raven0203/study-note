import React, { useRef } from 'react';
import axios from 'axios';

const Test = () => {
  const emailref = useRef("");
  const passwordref = useRef("");

  const handleClick = async () => {
    await axios.post("https://hexschool-tutorial.herokuapp.com/api/signup", {
      email: emailref.current.value,
      password: passwordref.current.value
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <input type="text" name="" id="" ref={emailref} />
      <br />
      <input type="text" name="" id="" ref={passwordref} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Test;
