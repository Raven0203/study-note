import React, { useRef } from "react";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { database } from "../../Firebase/firebase-config";
import firebase from "firebase/compat/app";
function FirebaseTest1() {
  const emailref = useRef("");
  const dbRef = ref(getDatabase());
  const handleClick = (e) => {
    e.preventDefault();
    get(child(dbRef, "/admin"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <h1>FIREBASE_TEST</h1>
      <input type="text" name="" id="" ref={emailref} />
      <button onClick={handleClick}>送出</button>
    </div>
  );
}

export default FirebaseTest1;
