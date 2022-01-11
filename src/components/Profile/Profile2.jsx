import React, { useState } from "react";

export default function Profile2() {
  const [birthday,setBirthday]= useState('')
  
  
  
    const style = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    marginTop:'10px',
    justifyContent: "spaceAround",
    alignItems: "center",
  };
 

  const handleClick = (e) => {
    e.preventDefault();  
    if(birthday!==""){
       return console.log(typeof birthday,birthday);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img style={{width:'300px',height:'300px',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}} src="./img/bear.jpg" alt="" />
      <input type="file" id="file-uploader" data-target="file-uploader" accept="image/*" multiple="multiple"/>

      <form action="" style={style}>
        <div>
          <label  htmlFor="name">Name:</label>
          <input type="text" name="" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="" id="email" />
        </div>
        <div>
          <label htmlFor="birthday">生日:</label>
          <input type='date' name="" id="birthday" onChange={(e)=>{setBirthday(e.target.value)}}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="" id="email" />
        </div>


        <button onClick={handleClick}>送出</button>
      </form>
    </div>
  );
}
