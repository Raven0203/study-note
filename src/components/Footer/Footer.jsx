import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {


    const handleClick = () =>{
    window.scrollTo(0,0);
}
    
    return (
        <div>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>網站地圖</h4>
                            <ul>
                                <li><Link to="/" onClick={handleClick}><a>首頁</a></Link></li>
                                <li><Link to="/blog" onClick={handleClick}><a >部落格</a></Link></li>
                                <li><Link to="/journeyplanhome" onClick={handleClick}><a >行程規劃</a></Link></li>
                                <li><Link to="/qa" onClick={handleClick}><a>常見問題</a></Link></li>
                                <li><Link to="/about" onClick={handleClick}><a >關於我們</a></Link></li>
                            </ul>
                        </div>
                        {/*
                        <div className="footer-col">
                            <h4>需要幫助嗎？</h4>
                            <ul>
                                <li><a href="#">常見問題</a></li>
                                {/* <li><a href="#"><i className="fas fa-angle-down"></i></a></li>
                                <li><a href="#"><i className="fas fa-angle-down"></i></a></li>  
                            </ul>
                        </div>  */}

                        <div className="footer-col">
                            <h4>聯絡我們</h4>
                            <ul>
                                <li><a href="#"><i className="fas fa-envelope">&nbsp;&nbsp;eeit36@travel.com</i></a></li>
                                <li><a href="#"><i className="fas fa-phone">&nbsp;&nbsp;04-1239487</i></a></li>
                                <li><a href="#"><i className="fas fa-building">&nbsp;&nbsp;台中市南屯區公益路二段51號18樓</i></a></li>
                                {/*<li><a href="#"><i className="fas fa-angle-down"></i></a></li>*/}
                            </ul>
                        </div>


                        <div className="footer-col">
                            <h4>追蹤最新消息</h4>
                            <div className="social-links">
                                <a target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                <a target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-line"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
