import * as React from 'react';
import './profile3.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Profile3() {
  
  
  
  
    return (
    <div className="profile-container" style={{fontSize:'1.5rem'}}>
  <form action="">
  <div className="row">
      <div className="img">
        <img className='avatarimg' src="./img/3.jpg" alt="" />
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
        value={localStorage.getItem("email")}/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="nickname" >暱稱：</label>
      </div>
      <div className="col-75">
        <input type="text" id="nickname" name="nickname" placeholder="暱稱..." />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="fname">姓名：</label>
      </div>
      <div className="col-75">
        <input type="text" id="fname" name="firstname" placeholder="姓名..." />
      </div>
    </div>
    
    <div className="row">
      <div className="col-25">
        <label for="birthday">生日</label>
      </div>
      <div className="col-75">
        <input type="date" id="birthday" name="lastname" placeholder="Your last name.." />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="constellations ">星座</label>
      </div>
      <div className="col-75">
        <input type="text" id="constellations " name="constellations " placeholder="星座..." />
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="area">地區：</label>
      </div>
      <div className="col-75">
        <select id="area" name="country">
          <option value="taichung">台中</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label for="sign">個性簽名：</label>
      </div>
      <div className="col-75">
        <textarea id="sign" name="sign" placeholder="寫些特別的吧 ..." style={{height:'200px'}}></textarea>
      </div>
    </div>
    <br />
    <br />
    <br />

    <div className="row" style={{display:'flex',textAlign:'center',justifyContent:'center'}}>
      <input type="submit" value="Submit"/>
    </div>
  </form>
</div>
  );
}