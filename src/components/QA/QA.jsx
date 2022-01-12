import React, { Component } from 'react';
import './qa.css'

class QA extends Component {
 render() {
  return (
        <div style={{backgroundImage: 'url("/img/275F99A6-8432-4DDB-B936-0D619CC4E238.jpeg")',backgroundSize:'100% 100%'}}>
            
            <div class="qa-container" >
                
                <div class="qacard" style={{float:'left',marginRight:'20px'}}>
                    <div class="slide slide1">
                        <div class="qa-text">
                            <div class="icon">
                                <h3 ><h2><i class="fa fa-pencil-square" aria-hidden="true"></i> Q:     我可以把喜歡的地點收藏起來嗎？</h2> </h3>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                        <div class="content">
                            <h3>
                                A:  當然！您可以將任何喜歡的地方收藏起來，到收藏頁面即可查看！
                            </h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="qacard" style={{float:'left',marginRight:'20px'}}>
                    <div class="slide slide1">
                        <div class="qa-text">
                            <div class="icon">
                                <h3 ><h2><i class="fa fa-pencil-square" aria-hidden="true"></i> Q:     如何註冊帳戶？？</h2> </h3>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                        <div class="content">
                            <h3>
                                A:  創建帳號完全免費，您可透過 『社交平台帳戶登入』！
                            </h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="qacard" style={{float:'left',marginRight:'20px'}}>
                    <div class="slide slide1">
                        <div class="qa-text">
                            <div class="icon">
                                <h3 ><h2><i class="fa fa-pencil-square" aria-hidden="true"></i> Q:     如何更改個人資料？？</h2> </h3>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                        <div class="content">
                            <h3>
                                A:  您可以登入會員後，在『帳戶資訊』中修改任何所需更改的資料！
                            </h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="qacard" style={{float:'left',marginRight:'20px'}}>
                    <div class="slide slide1">
                        <div class="qa-text">
                            <div class="icon">
                                <h3 ><h2><i class="fa fa-pencil-square" aria-hidden="true"></i> Q:     如何使用我的收藏清單？</h2> </h3>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                        <div class="content">
                            <h3>
                                A:  請利用我們收藏功能，您隨時可進入『個人收藏』查看！
                            </h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="qacard" style={{float:'left',marginRight:'20px'}}>
                    <div class="slide slide1">
                        <div class="qa-text">
                            <div class="icon">
                                <h3 ><h2><i class="fa fa-pencil-square" aria-hidden="true"></i> Q:     如何搜索行程？</h2> </h3>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                        <div class="content">
                            <h3>
                                A:  登入會員後即可使用行程規劃功能，開始計畫你的旅程吧！
                            </h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div class="qacard" style={{float:'left',marginRight:'20px'}}>
                    <div class="slide slide1">
                        <div class="qa-text">
                            <div class="icon">
                                <h3 ><h2><i class="fa fa-pencil-square" aria-hidden="true"></i> Q:     如何更改我使用的電子郵件地址呢？</h2> </h3>
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                        <div class="content">
                            <h3>
                                A:  很抱歉，因為登入帳號為您的e-mail ，故無法更改e-mail地址！
                            </h3>
                            <p></p>
                        </div>
                    </div>
                </div>
               
            </div>

           
        </div>
    
  );
 }
}

export default QA;