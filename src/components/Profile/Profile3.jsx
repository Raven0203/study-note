import * as React from "react";
import "./profile3.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Profile3() {
  return (
    <div className="profile-container" style={{ fontSize: "1.5rem" }}>
      <form action="">
        <div className="row">
          <div className="img">
            <img className="avatarimg" src="./img/3.jpg" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="email">電子信箱：</label>
          </div>
          <div className="col-75">
            <input
              type="email"
              id="email"
              name="firstname"
              disabled="disabled"
              placeholder="Your email.."
              value={localStorage.getItem("email")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="nickname">暱稱：</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              className="text"
              id="nickname"
              name="nickname"
              placeholder="暱稱..."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="fname">姓名：</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              className="text"
              id="fname"
              name="firstname"
              placeholder="姓名..."
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label for="birthday">生日</label>
          </div>
          <div className="col-75">
            <input
              type="date"
              id="birthday"
              name="lastname"
              placeholder="Your last name.."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="constellations ">星座</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              className="text"
              id="constellations "
              name="constellations "
              placeholder="星座..."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label for="area">地區：</label>
          </div>
          <div className="col-75">
            <select id="area" name="country">
              <optgroup label="北">
                <option value="1">基隆</option>
                <option value="2">臺北</option>
                <option value="3">新北</option>

                <option value="4">桃園</option>
                <option value="5">新竹市</option>
                <option value="6">新竹縣</option>

                <option value="19">宜蘭</option>
              </optgroup>
              <optgroup label="中">
                <option value="7">苗栗縣</option>
                <option value="8">臺中</option>
                <option value="9">彰化縣</option>
                <option value="10">南投縣</option>
              </optgroup>
              <optgroup label="南">
                <option value="11">雲林</option>
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
        <div className="row">
          <div className="col-25">
            <label for="sign">個性簽名：</label>
          </div>
          <div className="col-75">
            <textarea
              id="sign"
              name="sign"
              placeholder="寫些特別的吧 ..."
              style={{ height: "200px" }}
            ></textarea>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div
          className="row"
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
