import React, { Component } from 'react';
import './about.css'

class About extends Component {
 render() {
  return (
      
    <div>
        <section class="animation active" style={{backgroundColor:'white'}}>
            <div class="container3">
                <div class="heading1"style={{paddingBottom:'50px'}}>
                        <h1 class="heading__title">關於我們<i class="fa fa-commenting" aria-hidden="true" style={{marginLeft:'10px'}}></i></h1>
                </div>
                    <div class="content">
                        <div class="image-1">
                            <img src="./images/AnyConv.com__FDvbbL5agAESgxk-p-2000.jpeg" alt="" />
                        </div>
                        <div class="about-text-1">
                            <h3>XXXXXX</h3>
                            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        </div>
                    </div>                      
            </div>
        </section>
                    <div class="icon-item"style={{paddingTop:'100px',paddingBottom:'100px',display:'flex',backgroundColor:'rgba(5, 5, 5, 0.5)',backdropFilter: 'blur(20px)'}}>  
                                     
                            <div class="value-box"style={{width:'200px',paddingLeft:'225px'}}>
								<img src="https://image.kkday.com/image/get/s1.kkday.com/campaign_327/20190103093247_20mCO/png" alt=""/>
								<div class="value-box-title">									
									<h4>眾多景點</h4>
								</div>
							</div>						
							<div class="value-box"style={{width:'200px',paddingLeft:'400px'}}>
								<img src="https://image.kkday.com/image/get/s1.kkday.com/campaign_327/20190103093247_TRFKX/png" alt=""/>
								<div class="value-box-title">									
									<h4>每個城市</h4>
								</div>
							</div>						
							<div class="value-box"style={{width:'200px',paddingLeft:'425px'}}>
								<img src="https://image.kkday.com/image/get/s1.kkday.com/campaign_327/20190103093247_se64z/png" alt=""/>
								<div class="value-box-title">									
									<h4>由你計畫行程</h4>
								</div>
							</div>
                    </div>
        <section class="about-1" style=
        {{backgroundColor:'white',paddingBottom:'200px',backgroundSize: 'cover'}}>
            <div class="about-container" >
                {/* <h3 class="about-title-1">關於我們</h3>
                <div class="content">
                    <div class="image-1">
                        <img src="./images/AnyConv.com__FDvbbL5agAESgxk-p-2000.jpeg" alt="" />
                    </div>
                    <div class="about-text-1">
                        <h3>XXXXXX</h3>
                        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                    </div>
                </div>    */}
                <h3 class="about-title-2"  >團隊成員</h3>
                        
                            <div class="member">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src="\img\ProfilePictureMaker.png"/>
                                    </div>
                                    <div class="contentBx">
                                        <h2>陳宇勛</h2>
                                        <div class="size">
                                            <h3>?? :</h3>
                                            <span>???????</span>                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member1">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src="\img\ProfilePictureMaker (1).png"/>
                                    </div>
                                    <div class="contentBx">
                                        <h2>沈宗成</h2>
                                        <div class="size">
                                            <h3>?? :</h3>
                                            <span>???????</span>                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src="\img\ProfilePictureMaker (2).png"/>
                                    </div>
                                    <div class="contentBx">
                                        <h2>呂泊諺</h2>
                                        <div class="size">
                                            <h3>?? :</h3>
                                            <span>???????</span>                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member1">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src="\img\ProfilePictureMaker (3).png"/>
                                    </div>
                                    <div class="contentBx">
                                        <h2>陳柏甫</h2>
                                        <div class="size">
                                            <h3>?? :</h3>
                                            <span>???????</span>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="member">
                                <div class="card">
                                    <div class="imgBx">
                                        <img src="\img\ProfilePictureMaker (4).png"/>
                                    </div>
                                    <div class="contentBx">
                                        <h2>洪廷宥</h2>
                                        <div class="size">
                                            <h3>?? :</h3>
                                            <span>???????</span>                                          
                                        </div>
                                    </div>
                                </div>
                            </div>                  
            </div>
        </section>
           
    </div>
  );
 }
}

export default About;