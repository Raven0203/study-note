import React from 'react'
import './blogshow.css'

export default function BlogShow() {
    return (
        <div >
            {/* style={{display: 'grid',gridTemplateColumns:'60% 40%'}} */}
            {/* <div >
                <img src='\images\P_20200213_120535.jpg' style={{width:"1000px", height:'400px'}}></img>
            </div>
            <div style={{zIndex:'2'}}>
                福岡之旅
            </div> */}
            <div class="header1">
                <img src='\images\P_20200213_120535.jpg' style={{width:"1150px", height:'400px',marginLeft:'150px'}}></img>
            </div>
            <div style={{marginLeft:'160px', marginTop:"-50px",marginBottom:'20px'}}>
                <h1>福岡之旅</h1>
            </div>
                <div class="row" >
                <div class="leftcolumn">
                    <div class="card">
                    <h2>第一天</h2>
                    <h5>2022 / 1 / 17</h5>
                    <div class="fakeimg" style={{height:"200px"}}>
                    <img src='\images\P_20200210_104659.jpg'style={{height:"200px"}}/><img src='\images\P_20200210_104806.jpg'style={{height:"200px"}}/><img src='\images\IMG_0792.JPG'style={{height:"200px"}}/>
                    </div>
                    <p>佐世保車站</p>
                    <p>佐世保車站（日語：佐世保駅〔佐世保驛〕／させぼえき Sasebo eki */?）是位於日本長崎縣佐世保市三浦町的九州旅客鐵道（JR九州）和松浦鐵道鐵路車站。除了是佐世保線的西邊終點之外，在JR松浦線（也就是今日的松浦鐵道西九州線）與沿線各車站轉由松浦鐵道接收營運之後，佐世保車站就變成JR系統之中地理位置最西的車站。</p>
                    </div>
                    <div class="card">
                    <h2>第二天</h2>
                    <h5>2022 / 1 / 17</h5>
                    <div class="fakeimg" style={{height:"200px"}}>
                    <img src='\images\P_20200213_150020.jpg'style={{height:"200px",width:'250px'}}/><img src='\images\P_20200213_161933.jpg'style={{height:"200px"}}/><img src='\images\IMG_0792.JPG'style={{height:"200px"}}/>
                    </div>
                    <p>太宰府</p>
                    <p>太宰府市（日語：太宰府市／だざいふし Dazaifushi */?）是位於日本福岡縣中部的城市，位於福岡市東南方約16公里。它是九州古城大宰府的所在地，擁有許多歷史遺跡，包括著名觀光景點太宰府天滿宮，因此每年有大量旅客到訪，2006年的統計約有732萬名旅客到訪。

                        市區北側為四王寺山，東側為寶滿山，西南側為天拜山，御笠川由中間通過轄內，主要市區也為於此處，屬於福岡都市圈的一部份。

                        由於此地在過去曾設有「大宰府」，因此其名稱常被誤寫做「大宰府市」[2]。</p>
                    </div>
                    <div class="card">
                    <h2>第三天</h2>
                    <h5>2022 / 1 / 17</h5>
                    <div class="fakeimg" style={{height:"200px"}}>
                    <img src='\images\P_20200213_120535.jpg'style={{height:"200px"}}/><img src='\images\P_20200210_104806.jpg'style={{height:"200px"}}/><img src='\images\IMG_0792.JPG'style={{height:"200px"}}/>
                    </div>
                    <p>桜井二見ヶ浦夫婦岩</p>
                    <p>位於糸島的櫻井二見浦是入選「日本海灘百選」與「日本夕陽百選」的絕景景點。沙灘上矗立著莊嚴鳥居，另外還有以注連繩相繫，宛如夫妻般兩相對望的 2 座巨岩（夫婦岩）。相對於以朝陽著稱的三重縣伊勢二見浦，福岡縣筑前二見浦則以夕陽而聞名，而巨岩並立於岸邊約 150 公尺處海面的和睦景象，也成為締結良緣與夫妻圓滿的幸福象徵。</p>
                    </div>
                </div>
                <div class="rightcolumn">
                    <div class="card">
                    
                    <div class="" ><img src='\img\ProfilePictureMaker.png'style={{height:"100px",width:'100px'}}/>作者:xxx</div>
                    <p>個人資料的特別的話</p>
                    </div>
                    <div class="card">
                    <h3>旅遊目錄</h3>
                    <nav>
                        <ul>
                            <li><a href="#">第一天</a></li>
                            <li><a href="#">第二天</a></li>
                            <li><a href="#">第三天</a></li>
                            <li><a href="#">....</a></li>
                            <li><a href="#">.....</a></li>
                            <li><a href="#">......</a></li>
                        </ul>
                    </nav>
                    </div>
                    <div class="card">
                    <h3>更多熱門文章....</h3>
                    <img src='\images\P_20200213_120535.jpg'style={{height:"200px"}}/>
                    <br/>
                    <img src='\images\P_20200213_120535.jpg'style={{height:"200px"}}/>
                    <br/>
                    <img src='\images\P_20200213_120535.jpg'style={{height:"200px"}}/>
                    </div>
                </div>
                </div>

        </div>
    )
}
