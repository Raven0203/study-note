import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import './homepage.css'
import ScrollTop from './ScrollTop'
import axios from 'axios'
import Skeleton from '@mui/material/Skeleton';
import { Typography } from '@mui/material'

export default function HomePage() {
    /*     let pic = '';
     */   /*  let res = null; */

    const [data, setData] = useState('')
    console.log({ data });
    async function getpic() {
        try {

            const res = await axios.get('https://api.unsplash.com/photos/random?client_id=k-qvIjBpFwU9A_1HhaVakxTJhwLbUEaksJU4XqM_zus', {
                //URL参數放在params屬性裏面
                params: {
                    query: 'travel'

                }
            })
            const pic = await res.data.urls.full
            console.log(pic);
            setData(pic)
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        // setTimeout(getpic, 5000)
        getpic();

    }, [])



    return (

        <main className='main'>

            <div style={{ backgroundColor: '#021E39' }}>
                {data === '' ? <Skeleton variant="rectangular" animation='pulse' width={1500} height={900} sx={{ bgcolor: 'gray' }}></Skeleton> :
                    <img className='mainImg' src={data} alt="randomimg" />
                }

                {/*   <h2 style={{margin:'50px 50px 50px 50px'}}>yoyoyoy</h2> */}
            </div>
            {/*  <div><Skeleton variant="rectangular" animation='pulse' width={1500} height={900}  sx={{ bgcolor: 'gray' }}/></div> */}
            {/* <Skeleton variant="rectangular" animation="wave" width={1200} height={900} /> */}
            <section className="sec-01">
                <div className="container">
                    <h2 className="main-title">最新消息</h2>
                    <div className="content">
                        <div className="image">
                            <a href=""><img src="./img/img1.jpg" alt="" /></a>
                        </div>
                        <div className="text-box">
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.</p>
                        </div>
                    </div>
                    <div className="media-icons">
                        <a href="#" className="icon"><i ></i></a>
                        <a href="#" className="icon"><i ></i></a>
                        <a href="#" className="icon"><i ></i></a>
                        <a href="#" className="icon"><i ></i></a>
                    </div>
                </div>
            </section>
            <section className="sec-02">
                <div className="container">
                    <h3 className="section-title">熱門景點</h3>
                    <div className="content">
                        <div className="image">
                            <img src="./img/img2.jpg" alt="" />
                        </div>
                        <div className="info">
                            <h4 className="info-title">101風景美不勝收</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec-03">
                <div className="container">
                    <h3 className="section-title">晚上也閒不下來嗎?</h3>
                    <div className="content">
                        <div className="media-info">

                            <div className="text-box">
                                <h3>西門町</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore iure expedita nulla, cupiditate error.</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore iure expedita nulla, cupiditate error.</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis inventore iure expedita nulla, cupiditate error.</p>

                            </div>

                            <li><a href="#"><i ></i> </a></li>
                            {/* <li><a href="#"><i ></i> Instagram</a></li>
                            <li><a href="#"><i ></i> Twitter</a></li>
                            <li><a href="#"><i ></i> Youtube</a></li>
                            <li><a href="#"><i ></i> Linkedin</a></li> */}
                        </div>
                        <div className="image">
                            <img src="./img/img3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>


        </main>

    )
}
