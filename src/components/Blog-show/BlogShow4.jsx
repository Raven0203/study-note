import React from 'react'
import './blogshow.css'



export default function BlogShow() {
    return (
        
        <div style={{display: 'grid',gridTemplateColumns:'70% 30%'}}>
            <div>
                <div class="bls" style={{ width:'1000px',height:'350px',margin: '70px',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <img src='\blogimg\b4\20150925193840221.jpg' style={{width: '100%',height: '100%',objectFit:'cover'}}></img>
                </div>
                <div style={{marginLeft:'100px', marginTop:"-50px",marginBottom:'60px',width:'900px'}}>
                    <h1>小琉球兩天一夜</h1>
                </div>
                <div >
                    <div class="leftcolumn"style={{backgroundColor:'',overflow: 'auto',height:'1000px'}}>
                        <h2 id='0' style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第一天</h2>
                    
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站：網美老木</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>在旭日亭與大福漁港間有一個鮮少旅客知道的賞海打卡秘境，只要從大福漁港往旭日亭步行約5-10分鐘就能發現。因為海浪將原本於海上漂流的浮木打上岸後，剛好卡在石槽秘境上，成了一個網美超愛的拍照打卡景點！</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b4\51375558894_73c096a559_b.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站：龍蝦洞</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>龍蝦洞是一天然珊瑚礁岩，由於長期受海水浸蝕，分布著許多壺穴小地形與海蝕溝。早期為當地居民捕捉龍蝦的地方，由於龍蝦成長不及捕捉速率，現徒留發達的海蝕地形供遊客回憶當年捕捉龍蝦的情景。雖然這邊已經沒有龍蝦，但可以到這邊看看大自然為這邊留下的許多神奇地貌。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b4\小琉球環島-18.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站： 白燈塔</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>背後有一段神秘故事的白燈塔座落於琉球嶼東南方、厚石裙礁的西側山頂處。建造於日據時代，為白色圓形鋼筋混擬土構造，基座至塔頂約10公尺，光度射程可達二十浬之遠，
                                    指引船隻順利往返，與鵝鑾鼻燈塔共同負責台灣海峽與巴士海峽船隻通行的安全。現在晚上在小琉球某些角度往最高處白燈塔座落的方向望去，能看到白燈塔於晚上發出來的光束，默默佇立在小琉球土地上成為安定海上人心的指標。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b4\b_11005716.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <h2 id='1' style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第二天</h2>
                    
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站：花瓶岩</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>花瓶岩為小琉球最顯眼、最著名的地標，常時可以發現它在各式介紹小琉球的摺頁出現。因為花瓶岩正位於白沙觀光港出入船隻的航道旁，目標十分明顯，且鄰近港邊，相距僅約短短三百公尺，因此常成為觀光客必遊與拍照打卡的IG熱門景點。而且隨著太陽光影移動與四季更迭，花瓶岩也會跟著展現不同風貌，可謂變化萬千。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b4\634050437675312500.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站：鹿粼梅花鹿園區</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>小琉球也有梅花鹿！不只超可愛，還很親人，在這邊你可以餵可愛的梅花鹿！鹿粼梅花鹿園區提供來小琉球的遊客，一個提倡注重生態環境的維護，愛護動物的觀念，是個提倡永續經營地球村的動物生態園區！</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b4\f8fc6c2177e4607dec28211b8522ee8e.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站：與海龜共潛</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>來到小琉球必做的一件事！！！深入海中，潛水在藍色的海底，還能近距離接觸到保護動物「綠蠵龜」！
                                    體驗水中無重力的自由漂浮感，感受日常生活無法體驗的奇妙旅程，進入另一個意向不到的奇幻世界。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b4\10000002222701_Xvwv94ml_4.jpeg' style={{width:'350px',height:'250px'}}></img>
                           
                            
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