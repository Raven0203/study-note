import React, { useEffect, useState } from "react";
import axios from "axios";
function Test3() {
  const [data, setData] = useState();

  useEffect(() => {
    const axiosdata = async () => {
      const result = await axios.get(
        "https://api.github.com/users/hadley/orgs"
      );

      const resdata = await result.data[0].id;
      setData(resdata);
    };
   
    
    axiosdata();
  }, []);
console.log(data);
  

  return (
    <div>
      <h1>AXIOS</h1>
      <h2>{JSON.stringify(data)}</h2>
    </div>
  );
}

export default Test3;
