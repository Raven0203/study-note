import React from 'react'
import { useRef } from 'react'
import Ptable2 from '../JourneyPlanning/DragnDrop/DragPlanTable';


function DashBoardLogin() {
    const accountref = useRef("");
    const passwordref = useRef("");
    var innerHeight = window.innerHeight;

    const condition = (e) => {
        e.preventDefault();

        if (accountref.current.value === "admin" && passwordref.current.value === "admin") {
            return window.location.href = "/dashboard";

        }



    }


    return (
        <>


            <h1 style={{ textAlign: 'center' }}>登入頁面</h1>
            <div style={{ width: '100%', height: { innerHeight }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <div>
                    <form action=''>
                        <label htmlFor="accout">帳號:</label>
                        <input type="text" name="" id="accout" ref={accountref} />
                        <label htmlFor="password">密碼：</label>
                        <input type="text" name="" id="password" ref={passwordref} />
                        <br />
                        <button onClick={condition} style={{ alignItems: 'center' }}>登入</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default DashBoardLogin
