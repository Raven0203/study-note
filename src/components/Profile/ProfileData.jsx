import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import axios from "axios";
import LoadingButton from '@mui/lab/LoadingButton';
export default function ProfileData({
  profilesend,
  setProfileSend,
  emailref,
  nicknameref,
  realnameref,
  genderref,
  birthdayref,
  profileURL,
  arearef,
  signref,
}) {
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  let email = emailref.current.value;
  let nickname = nicknameref.current.value;
  let birthday = birthdayref.current.value;
  let gender = genderref.current.value
  let area = parseInt(arearef.current.value);
  let sign = signref.current.value;
  let realname = realnameref.current.value;
  // realname, email, profileURL, nickname, birthday, area, sign
  let profiledata = {
    membername: realname,
    memberemail: email,
    membericon: profileURL,
    membernickname: nickname,
    memberbirth: birthday,
    membergender: "1",
    membercityid: area,
    memberintro: sign
  };



  // const handleClickOpen = () => {
  //   setOpen(true);
  //   setProfileSend(true);
  //   setAgree(false);
  // };

  const handleClose = () => {
    setProfileSend(false);
    setAgree(false);
  };

  const handleAgree = async (e) => {

    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      try {
        setLoading(true);
        const axiospost = await axios.post("http://localhost:8080/member/", profiledata);

        const axiosresult = await axiospost.data;


        console.log("successs", axiosresult);

        setProfileSend(false);
      } catch (error) {
        console.log(error);
      }
    }, (10000));



    // axios.post("url...",profiledata)
    // .then((res)=>console.log(res))
    // .catch((error)=>console.log(error));

    console.log(profiledata);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        開啟對話窗
      </Button> */}

      <Dialog
        open={profilesend}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onBackdropClick={() => setProfileSend(false)}
      >
        <DialogTitle id="alert-dialog-title"><h3>提示視窗</h3></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h5> 確定要把表單送出嗎?</h5>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {loading ? <LoadingButton loadingPosition='center' loading={loading} variant='outlined' disabled>等待中</LoadingButton>
            :
            <>
              <Button onClick={handleAgree} autoFocus>確認送出</Button>
              <Button onClick={handleClose}>再想想</Button>
            </>
          }


        </DialogActions>
      </Dialog>
    </div>
  );
}
