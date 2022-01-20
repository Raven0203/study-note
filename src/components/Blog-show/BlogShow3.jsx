import React from 'react'
import './blogshow.css'



export default function BlogShow() {
    return (
        
        <div style={{display: 'grid',gridTemplateColumns:'70% 30%'}}>
            <div>
                <div class="bls" style={{ width:'1000px',height:'350px',margin: '70px',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <img src='\blogimg\b3\shutterstock_668912911-e1585703768352.jpg' style={{width: '100%',height: '100%',objectFit:'cover'}}></img>
                </div>
                <div style={{marginLeft:'100px', marginTop:"-50px",marginBottom:'60px',width:'900px'}}>
                    <h1>台北三天兩夜</h1>
                </div>
                <div >
                    <div class="leftcolumn"style={{backgroundColor:'',overflow: 'auto',height:'1000px'}}>
                        <h2 id='0' style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第一天</h2>
                    
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站：少帥禪園</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 9 /20</p>
                                <p> 宛如走入武俠小說場景的少帥禪園，隱身在北投山林之中，日式鬼瓦建築彷彿置身京都市郊，興建於1921年的少帥禪園，是以前名流紳士喜愛泡湯飲食之處，後來日治時期為軍方所用。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b3\901ad610433e458a9ce345437c96398c327a1377c8f5b1650a16b615cfeb488d.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站：北投圖書館</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 9 /20</p>
                                <p>台灣首座綠建築圖書館，內部採用木材設計，圖書館內可以聽見水流聲，甚至是鳥叫聲，四周圍繞著林木，到這裡不妨空下時間讀本書，放慢腳步，愜意地在大自然裡閱讀。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b3\D8B9FC3F-D91C-4609-957C-9B152E7D7298_e.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站： 士林夜市</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 9 /20</p>
                                <p>士林夜市位於劍潭捷運站外面，攤販下午四五點就開始營業，大約凌晨0點左右就陸續收攤，炸雞排、蚵仔煎、青蛙下蛋、胡椒餅、臭豆腐、珍珠奶茶、泡泡冰等都是來到士林夜市非吃不可的美食。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b3\pic_154_14.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <h2 id='1' style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第二天</h2>
                    
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站：四四南村</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 9 /20</p>
                                <p>四四南村是國民政府遷到台灣後所蓋的第一處眷村，因為位於四十四兵工廠之南，也被稱為四四南村。來到四四南村可見50幾年前的建築樣貌，連動式的平房非常迷你有韻味，四四南村裡包含了特展館、眷村展示館、展演館、社區館、四四廣場及文化公園。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b3\1562425193-3388001068.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站：台北101觀景台</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 9 /20</p>
                                <p>台北101儼然就是台灣的代表地標，曾經為世界第一高的大樓，真心推薦一定要來到台北101觀景台一覽360度的大台北美景喔。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b3\11e9-afbb-163c662afc97.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站：象山步道</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 9 /20</p>
                                <p>搭乘淡水信義線在象山站下車，僅需20幾分鐘的路程便能抵達象山觀景平台，沿途好多外國遊客，都只為了一睹金碧輝煌的台北夜景而來，這幅場景更宛如香港太平山夜景，象山雖少了登山纜車，但是一景一物的氛圍簡直就是一模一樣呢，把象山夜景稱之為香港太平山復刻版夜景一點也不為過。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b3\303dff78e8d084914decacbfcbd50e40.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <h2 id='2' style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第三天</h2>
                    
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站：台北故宮博物院</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 9 /20</p>
                                <p>台北故宮博物院聞名全世界，珍藏了西周後期青銅器、中國古代瓷器珍品、珍貴書法及繪畫藏品等珍貴物品，台北故宮博物院的鎮館之寶更是非看不可，像是毛公鼎、翠玉白菜、肉形石等。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b3\1626168857-60ed5e1977ef2.png' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站：林安泰古厝</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 9 /20</p>
                                <p>古色古香的林安泰古厝可說是台北城市裡的秘境，至今已經擁有160幾年歷史，來到林安泰古厝還能近距離欣賞震撼的松山機場飛機起降喔。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b3\林安泰古厝正面照.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站：西門町</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2021 / 9 /20</p>
                                <p>台北最潮的地方就是西門町啦，想看看時下年輕人流行什麼來西門町逛逛就對了，西門町還有許多美食，像是天天利美食坊、老山東牛肉麵等，也有老天祿滷味、阿宗麵線、繼光香香雞等，西門紅樓也是非逛不可的歷史建築。


                                </p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b3\dd771a74-cb92-4967-aeb7-91a9c43284ed.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
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