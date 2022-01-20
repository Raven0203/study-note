import React from 'react'
import './blogshow.css'



export default function BlogShow() {
    return (
        
        <div style={{display: 'grid',gridTemplateColumns:'70% 30%'}}>
            <div>
                <div class="bls" style={{ width:'1000px',height:'350px',margin: '70px',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <img src='\blogimg\b2\jpg.webp' style={{width: '100%',height: '100%',objectFit:'cover'}}></img>
                </div>
                <div style={{marginLeft:'100px', marginTop:"-50px",marginBottom:'60px',width:'900px'}}>
                    <h1>玉山三天兩夜</h1>
                </div>
                <div >
                    <div class="leftcolumn"style={{backgroundColor:'',overflow: 'auto',height:'1000px'}}>
                        <h2 id='0' style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第一天</h2>
                    
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站：特富野古道</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 11 /16</p>
                                <p> 特富野古道原為鄒族人早年開闢的獵徑，日治時期古道後段改建成運送林木的「水山線」鐵路，至今仍留有許多鐵道遺跡。
                                    步道前段較為平緩，沿途遍植柳杉；後段則是陡下的枕木階梯步道，為闊葉原始森林，四季景觀變化多端，動植物生態豐富，是極佳的賞鳥步道。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b2\0.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站：鹿林神木</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 11 /16</p>
                                <p>鹿林神木又稱為「新中橫神木」或「石山神木」，樹種為紅檜，估計樹齡為2800年，因樹冠層茂密不易察覺，直至近年才被人發現，目前為台灣官方排名第二大神木，
                                   並建有步道及解說牌，因緊臨公路旁，是最容易親近的神木。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b2\6632297381_2db1c94aa0_c.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站： 東埔山莊</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 11 /16</p>
                                <p>東埔山莊海拔高度2580公尺，為玉山登山口附近的唯一休憩點，一直以來不少前往玉山的登山客皆以此為行前的落腳之處。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b2\51416937381_8d6ca0c822_c.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <h2 id='1' style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第二天</h2>
                    
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站：塔塔加鞍部（玉山登山口）</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 11 /16</p>
                                <p>海拔2663公尺，是鄒族人的聖山。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b2\1325345958-3031251559_n.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站：排雲山莊</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 11 /16</p>
                                <p>排雲山莊除了擁有滿滿日治時期歷史外，更是登山客登玉山攻頂的前哨站！</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b2\600_5fc8ee1db67fc96bf58323996e2ccf8f.jpeg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        
                        <h2 id='2' style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第三天</h2>
                    
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站：玉山主峰</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 11 /16</p>
                                <p>海拔約為 3,952 公尺的玉山主峰，不僅為台灣最高峰，更是東北亞的第一高峰。沿途天然植被隨海拔之變化，由亞熱帶、溫帶至寒帶，更能觀察到不少野生動物，山林中蘊藏許多珍貴之生態資源及人文史蹟。號稱台灣屋脊的玉山，有如龍背在臥，可將山川盡收眼底。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b2\3310258_2_1.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div>
            <div class="rightcolumn">
                <div class="card1">
                
                <div class="" ><img src='\img\ProfilePictureMaker.png'style={{height:"100px",width:'100px'}}/>作者:Raven</div>
                <p>個人資料的特別的話</p>
                </div>
                <div class="card1">
                <h3>旅遊目錄</h3>
                <nav>
                    <ul>
                        <li><a href="#0">第一天</a></li>
                        <li><a href="#1">第二天</a></li>
                        <li><a href="#2">第三天</a></li>
                    </ul>
                </nav>
                </div>
                <div class="card1">
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
{/* <div >
<img src='\images\P_20200213_120535.jpg' style={{width:"1000px", height:'400px',marginLeft:'100px'}}></img>
</div>
<div style={{marginLeft:'160px', marginTop:"-50px",marginBottom:'20px',width:'900px'}}>
<h1>福岡之旅</h1>
</div>
<div >
    <div class="leftcolumn">
        <div class="card">
        <h2>第一天</h2>
        <h5>2022 / 1 / 17</h5>
        <div class="fakeimg" style={{height:"200px"}}>
        <img src='\images\P_20200210_104659.jpg'style={{height:"200px"}}/><img src='\images\P_20200210_104806.jpg'style={{height:"200px"}}/><img src='\images\IMG_0792.JPG'style={{height:"200px"}}/>
        </div>
        <p>佐世保車站</p>
        <p>佐世保車站（日語：佐世保駅〔佐世保驛〕／させぼえき Sasebo eki ）是位於日本長崎縣佐世保市三浦町的九州旅客鐵道（JR九州）和松浦鐵道鐵路車站。除了是佐世保線的西邊終點之外，在JR松浦線（也就是今日的松浦鐵道西九州線）與沿線各車站轉由松浦鐵道接收營運之後，佐世保車站就變成JR系統之中地理位置最西的車站。</p>
        </div>
        <div class="card">
        <h2>第二天</h2>
        <h5>2022 / 1 / 17</h5>
        <div class="fakeimg" style={{height:"200px"}}>
        <img src='\images\P_20200213_150020.jpg'style={{height:"200px",width:'250px'}}/><img src='\images\P_20200213_161933.jpg'style={{height:"200px"}}/><img src='\images\IMG_0792.JPG'style={{height:"200px"}}/>
        </div>
        <p>太宰府</p>
        <p>太宰府市（日語：太宰府市／だざいふし Dazaifushi ）是位於日本福岡縣中部的城市，位於福岡市東南方約16公里。它是九州古城大宰府的所在地，擁有許多歷史遺跡，包括著名觀光景點太宰府天滿宮，因此每年有大量旅客到訪，2006年的統計約有732萬名旅客到訪。

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
    </div> */}