import * as React from "react";
import { useRef, useState } from "react";
import "./profile3.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Avatar, Divider } from "@mui/material";

import ProfileData from "./ProfileData";

export default function Profile3() {
  //用戶資訊
  const emailref = useRef("");
  const nicknameref = useRef("");
  const realnameref = useRef("");
  const birthdayref = useRef("");
  const genderref = useRef("");
  const arearef = useRef("");
  const signref = useRef("");
  //用戶照片URL
  let profileURL = localStorage.getItem("profileURL");

  const [profilesend, setProfileSend] = useState(false);

  const submitClick = async (e) => {
    e.preventDefault();
    await setProfileSend(!profilesend);
  };

  if (profileURL == null) {
    console.log("true");
  } else {
    console.log(profileURL);
  }



  return (
    <div style={{padding:'350px 300px 200px 440px',display:"flex",backgroundImage:'url("/images/683602d049d4e3854580d5180cbbdaba.png")',backgroundSize:'100% 100%'}}>
        <div className="profile-container" style={{ fontSize: "1.3rem" }}>
          {profilesend ? (
            <ProfileData
              profilesend={profilesend}
              setProfileSend={setProfileSend}
              emailref={emailref}
              nicknameref={nicknameref}
              realnameref={realnameref}
              genderref={genderref}
              birthdayref={birthdayref}
              arearef={arearef}
              signref={signref}
              profileURL={profileURL}

            />
          ) : (
            ""
          )}

          <form action="">
            <div className="row">
              <div className="background">
                <img className="profile3-backgroundimg" src="./img/1.jpg" alt="" />
              </div>
              
              <div className="profile3-img">

                <img className="avatarimg" src={profileURL === null ? "" : profileURL} alt="" />
              </div>
            </div>
            <div className="profile3-row">
              <div className="col-25">
                <label className="profile-label" htmlFor="email">電子信箱：</label>
              </div>
              <div className="col-75">
                <input
                  type="email"
                  id="email"
                  className="email"
                  name="firstname"
                  disabled="disabled"
                  placeholder="Your email.."
                  value={localStorage.getItem("email")}
                  ref={emailref}
                />
              </div>
            </div>
            <div className="profile3-row">
              <div className="col-25">
                <label className="profile-label" htmlFor="nickname">暱稱：</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  required
                  ref={nicknameref}
                  className="text"
                  id="nickname"
                  name="nickname"
                  placeholder="暱稱..."
                  style={{backgroundColor:'#faf7cf'}}
                />
              </div>
            </div>
            <div className="profile3-row">
              <div className="col-25">
                <label className="profile-label" htmlFor="fname">姓名：</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  ref={realnameref}
                  className="text"
                  id="fname"
                  name="firstname"
                  placeholder="姓名..."
                  style={{backgroundColor:'#faf7cf'}}
                />
              </div>
            </div>

            <div className="profile3-row">
              <div className="col-25">
                <label className="profile-label" htmlFor="birthday">生日：</label>
              </div>
              <div className="col-75">
                <input
                  className="profile-date"
                  type="date"
                  ref={birthdayref}
                  id="birthday"
                  name="lastname"
                  placeholder="Your last name.."
                  style={{backgroundColor:'#faf7cf'}}
                />
              </div>
            </div>
            <div>
              <div >
                <label >性別：</label>
              </div>
              <div style={{marginLeft:'230px',marginTop:'-40px'}}>
                <input type="radio" id="r1" name="rr" />
                <label for="r1"><span></span>男生</label>
                <input type="radio" id="r2" name="rr" style={{marginLeft:'80px'}} />
                <label for="r2"><span></span>女生</label>
              </div>
            </div>
            <div className="profile3-row">
              <div className="col-25">
                <label className="profile-label" htmlFor="constellations ">星座：</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  className="text"
                  id="constellations "
                  name="constellations "
                  placeholder="星座..."
                  style={{backgroundColor:'#faf7cf'}}
                />
              </div>
            </div>
            <div className="profile3-row">
              <div className="col-25">
                <label className="profile-label" htmlFor="area">地區：</label>
              </div>
              <div className="col-75">
                <select id="area" name="country" ref={arearef} style={{backgroundColor:'#faf7cf'}}>
                  <optgroup label="北">
                    <option value="1">基隆市</option>
                    <option value="2">臺北市</option>
                    <option value="3">新北市</option>

                    <option value="4">桃園市</option>
                    <option value="5">新竹市</option>
                    <option value="6">新竹縣</option>

                    <option value="19">宜蘭縣</option>
                  </optgroup>
                  <optgroup label="中">
                    <option value="7">苗栗縣</option>
                    <option value="8">臺中市</option>
                    <option value="9">彰化縣</option>
                    <option value="10">南投縣</option>
                  </optgroup>
                  <optgroup label="南">
                    <option value="11">雲林縣</option>
                    <option value="12">嘉義市</option>
                    <option value="13">嘉義縣</option>
                    <option value="14">台南市</option>
                    <option value="15">高雄市</option>
                    <option value="16">屏東縣</option>
                  </optgroup>
                  <optgroup label="東">
                    <option value="17">台東縣</option>

                    <option value="18">花蓮縣</option>
                  </optgroup>
                  <optgroup label="離島">
                    <option value="20">澎湖縣</option>
                    <option value="21">金門縣</option>
                    <option value="22">連江縣</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div className="profile3-row">
              <div className="col-25">
                <label className="profile-label" htmlFor="sign">個性簽名：</label>
              </div>
              <div className="col-75">
                <textarea
                  id="sign"
                  ref={signref}
                  name="sign"
                  placeholder="寫些特別的吧 ..."
                  style={{ height: "200px",backgroundColor:'#faf7cf'}}
                ></textarea>
              </div>
            </div>
            <br />
            <br />
            <br />

            <div
              className="profile3-row"
              style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <input type="submit" value="Submit" onClick={submitClick} />
            </div>
          </form>
          <Divider sx={{ color: "black" }} />
        </div>
        
        
       
    </div>
    
  );
}
