import React from 'react'
import Footer from '../Footer/Footer'
import './homepage.css'
import ScrollTop from './ScrollTop'
export default function HomePage() {
    return (

        <main className='main'>

            <div style={{ backgroundColor: '#021E39' }}>
                <img className='mainImg' src="./img/3.jpg" alt="" />
            </div>

            <section class="sec-01">
                <div class="container">
                    <h2 class="main-title">最新消息</h2>
                    <div class="content">
                        <div class="image">
                            <a href=""><img src="./img/img1.jpg" alt="" /></a>
                        </div>
                        <div class="text-box">
                            <h3>Lorem Ipsum</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                                labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.</p>
                        </div>
                    </div>
                    <div class="media-icons">
                        <a href="#" class="icon"><i ></i></a>
                        <a href="#" class="icon"><i ></i></a>
                        <a href="#" class="icon"><i ></i></a>
                        <a href="#" class="icon"><i ></i></a>
                    </div>
                </div>
            </section>
            <section class="sec-02">
                <div class="container">
                    <h3 class="section-title">熱門景點</h3>
                    <div class="content">
                        <div class="image">
                            <img src="./img/img2.jpg" alt="" />
                        </div>
                        <div class="info">
                            <h4 class="info-title">101風景美不勝收</h4>
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
            <section class="sec-03">
                <div class="container">
                    <h3 class="section-title">晚上也閒不下來嗎?</h3>
                    <div class="content">
                        <div class="media-info">

                            <div class="text-box">
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
                        <div class="image">
                            <img src="./img/img3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>


        </main>

    )
}
