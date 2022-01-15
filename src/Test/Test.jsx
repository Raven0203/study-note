import React, { useRef } from 'react';
import axios from 'axios';
import { async } from '@firebase/util';

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
  var params = new URLSearchParams();
  params.append('id', '5');
  params.append('title', "你好很高興認識你");
  const handledbjson = async () => {
    await axios.get("http://localhost:3000/items")
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error))



    // await axios.post(" http://localhost:3000/items", {
    //   "id": 2,
    //   "title": "發呆一整天",
    //   "isCompleted": false
    // }).then((res) => console.log(res))
    //   .catch((error) => {
    //     console.log(error);
    //   })
  }

  const handleProxy = () => {

    axios.get("/maps/api/place/textsearch/json?key=AIzaSyA1A_ajOEo-A7Mpuhm000U4zK-sGAvlTQc&language=zh-TW&query=台中百貨公司",{
      baseURL:"https://maps.googleapis.com"
    })
    .then((res)=>console.log(res.data))
    .catch((error)=>console.log(error));
  }



  return (
    <div>

      <input type="text" name="" id="" ref={emailref} />
      <br />
      <input type="text" name="" id="" ref={passwordref} />
      {/* <button onClick={handledbjson}>Click</button> */}
<button onClick={handleProxy}>Proxy</button>
    </div>
  );
}

export default Test;
