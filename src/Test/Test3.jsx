import React, { useEffect, useState } from "react";
import axios from "axios";
function Test3() {
  const [data, setData] = useState();
  const [address, setAddress] = useState([]);

  useEffect(() => {
    // const axiosdata = async () => {
    //   const result = await axios.get(
    //     "https://api.github.com/users/hadley/orgs"
    //   );

    //   const resdata = await result.data[0].id;
    //   setData(resdata);
    // };



    // const handleProxy = async () => {
    //   const axiosgoogledata = await axios.get("/maps/api/place/textsearch/json?key=AIzaSyA1A_ajOEo-A7Mpuhm000U4zK-sGAvlTQc&language=zh-TW&query=台中百貨公司");

    //   const axiosgoogleresult = await axiosgoogledata.data.results;

    //   const googleaddress = await axiosgoogleresult.map((item) => item.formatted_address)

    //   setAddress(googleaddress)



    // }
    // axiosdata();
    // handleProxy();



  }, []);



  return (

    <div style={{ height: '100vh' }}>
      <h1>AXIOS</h1>


      {/* 請使用map()渲染出你要的畫面 */}




    </div>

  );
}

export default Test3;
