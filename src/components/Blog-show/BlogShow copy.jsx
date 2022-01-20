import React from 'react'
import './blogshow.css'



export default function BlogShow() {
    return (
        
        <div style={{display: 'grid',gridTemplateColumns:'70% 30%'}}>
            <div>
                <div class="bls" style={{ width:'1000px',height:'350px',margin: '70px',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <img src='\blogimg\b1\44879896482_720c553daa_c.jpg' style={{width: '100%',height: '100%',objectFit:'cover'}}></img>
                </div>
                <div style={{marginLeft:'100px', marginTop:"-50px",marginBottom:'60px',width:'900px'}}>
                    <h1>九份三天兩夜</h1>
                </div>
                <div >
                    <div class="leftcolumn"style={{backgroundColor:'',overflow: 'auto',height:'1000px'}}>
                        <h2 id='0' style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第一天</h2>
                    
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站：水湳洞十三層遺址</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p> 十三層遺址，號稱『台版天空之城』
                                    建於1933年日治時代，是銅礦與黃金冶煉廠，主要用來處理、精煉從金瓜石和九份送來的礦石。
                                    建築物擁有三條極長的排氣管道－廢煙道，管道從山坡上延伸2公里，是世界上最長的排氣道。
                                    這是釋放有毒鍊銅廢氣的地方，時至今日仍存有重金屬殘留。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b1\1583291348-1103427651.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站：陰陽海</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>「一半金黃、一半碧藍」，陰陽海成因可是渾然天成
                                    主因是金瓜石礦山蘊藏大量黃鐵礦，和雨水產生化學作用後，形成含鐵離子黃色酸礦水。
                                    流經黃金瀑布，最注入海中與海水藍色產生鮮明對比，下雨時黃色會更加深些，難得奇景非常值得一看呢。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b1\1583291315-545461466.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站： 祈堂老街</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>金瓜石祈堂老街 (又稱：金瓜石老街)，百年歷史，寧靜懷舊鮮少商業化，近來因祈堂老街彩虹階梯翻紅。
                                    穿梭在祈堂老街美食＆咖啡廳不少，白帶魚米粉湯、阿嬤的廚房、礦工食堂、散散步咖啡旅宿等，一路吃超滿足。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b1\1621866194-2004049519-g.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <h2 id='1' style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第二天</h2>
                    
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站：穿屋巷</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>依山而建的九份山城最大的特色就是有很多階梯，其中比較特別的就是這穿屋巷。穿屋巷就好像是一個山洞一樣，只是山洞的牆壁是由民宅屋頂、牆壁、樓地板所構成
                                    ，在九份想要避開壅擠的人潮，利用穿屋巷是一種很便利的方法。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b1\750218856_m.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站：九份金礦博物館</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>在九份停止採集金礦後，為了保留九份地區礦業的技能及文物，由礦工成立的九份金礦博物館裡面收藏許多早期九份礦業所留下來的文物及珍貴的礦石，而且還有淘金的體驗，想要了解以前怎麼採集金子來九份金礦博物館就對了！</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b1\5279120_full.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站：九份老街</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>九份老街是全台最有名的觀光老街，許多國際遊客來台必訪，早期因為採金礦發達，後來又因悲情城市爆紅，最後更因為神隱少女傳聞來阿妹茶樓取景，
                                    廣受日本客喜愛，九份老街不分平假日總擠滿人潮，老街美食最有名的就是阿蘭草仔粿、芋圓、肉丸、花生捲冰淇淋每樣都好吃。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b1\111.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <h2 id='2' style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第三天</h2>
                    
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站：山城食堂</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>位在水湳洞的山城食堂原是水湳洞遊客服務中心，現已是山城食堂，菜單以輕食、飲料為主，可以在這邊享用美味的餐點，同時也能欣賞周邊的美景。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b1\20180812014035759.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站：山尖步道、水圳橋</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>山尖步道是聯絡九份到金瓜石、水湳洞的古道，沿著採金礦的山路而設，途中會看到許多礦業的遺跡，其中水圳橋更是許多人喜歡的景觀，水圳橋是採礦時代為了運水給選煉廠所蓋的橋梁。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b1\20200422011615_78.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站：猴硐火車站</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>猴硐在1990年畫下煤業發展句點後，就地保留礦業遺址，遊客可參訪具有53年歷史圓拱造型「運煤橋」，還有由整煤廠倉庫改建，內有礦工生活與物件陳列的願景館。
                                後來因為貓咪聚集而有猴硐貓村之稱，經過網路媒體報導變得很熱門，貓村有許多可愛親人的貓咪，貓奴在這玩一整天都不是問題。


                                </p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b1\20181016  20.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
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