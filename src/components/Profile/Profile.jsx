import React, { useRef, useState } from "react";
import "./profile.css";

const Profile = ({ user }) => {
  const [name, setName] = useState("");

  const { inputref, textref } = useRef(null);

  const handleClick = (e) => {
    console.log(inputref);
    console.log(textref);
    // inputref.current.value = "";
    // textref.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefautl();
  };

  return (
    <div className="card-box">
      <div className="card">
        <div className="card-image">
          <img src="./img/1.jpg" alt="" />
        </div>
        <div className="profile-image">
          <img src="./img/bear.jpg" alt="" />
        </div>
        <div className="card-content">
          {/* {user ? <h3>用戶名稱：{localStorage.getItem("email")}</h3> : ""}
        <h4>個性簽名：</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p> */}
        </div>
        {/* <form
       
        style={{ display: "static", justifyItems: "center" }}
      >
        <label>暱稱:</label>
        <input
          type="text"
          name=""
          id=""
          ref={inputref}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onClick={handleClick}>更改暱稱</button>
        <h2>{name}</h2>
        <br />
        <br />
        <label>Email:</label>
        <input type="email" name="" id="" ref={textref} />
        <br />
        <br />
        <label>星座:</label>
        <input type="text" name="" id="" />
      </form> */}
        <div className="icons">
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-youtube"></a>
          <a href="#" className="fab fa-instagram"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-whatsapp"></a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
