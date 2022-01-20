import React from 'react'
import './blogshow.css'



export default function BlogShow() {
    return (
        
        <div style={{display: 'grid',gridTemplateColumns:'70% 30%'}}>
            <div>
                <div class="bls" style={{ width:'1000px',height:'350px',margin: '70px',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <img src='\blogimg\b5\池上伯朗大道.jpg' style={{width: '100%',height: '100%',objectFit:'cover'}}></img>
                </div>
                <div style={{marginLeft:'100px', marginTop:"-50px",marginBottom:'60px',width:'900px'}}>
                    <h1>台東三天兩夜</h1>
                </div>
                <div >
                    <div class="leftcolumn"style={{backgroundColor:'',overflow: 'auto',height:'1000px'}}>
                        <h2 id='0' style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第一天</h2>
                    
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站：初鹿牧場</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p> 這間以牛乳風靡全台的牧場就位在台東卑南，作為全台唯一的坡地牧場，初鹿牧場有大片的綠色坡地和多頭乳牛，園區內也可以騎馬、餵食、滑草，還可以漫步在森林浴、落羽松步道中。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b5\初鹿牧場.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站：知本森林遊樂區</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>位於台東卑南鄉的知本國家森林遊樂區，是近年來深受好評的旅遊景點，由於知本國家森林遊樂區過去經營林業，因此能看到各式各樣熱帶特有的樹種與森林。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b5\Zhiben-National-Forest.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站： 關山親水公園</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>位在卑南溪旁的關山親水公園十分遼闊，騎自行車遊園一圈約需30分鐘左右，其中園區內有著賞鳥屋、人工湖、觀星台以及各種親水設施。夏天是造訪這裡的好時機，園區以天然湧出的伏流為水源，水流不僅乾淨毫無汙染，更是清涼無比。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b5\123164.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <h2 id='1' style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第二天</h2>
                    
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站：小野柳「東部海岸富岡地質公園」</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>小野柳海岸是由厚層砂岩與薄層泥岩交互沈積，因為地質構造的變動，使得巨大砂頁岩上下倒置，珊瑚礁又覆蓋上去，產生多樣又奇怪的石頭造型，都是大自然日積月累數百年的藝術品。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b5\DSC04973-1024x683.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站：加路蘭遊憩區</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>加路蘭，它是東河鄉的阿美族部落，阿美族語稱為「kararuan」，意指洗頭髮的地方，因為附近小溪富含黏地礦物質，洗髮後自然潤濕亮麗而得名。
                                    加路蘭遊憩區原本為空軍建設志航基地時的廢棄土置放場所，經東管處數次以生態工法整建後，新增停車場、觀景台及裝置藝術，將廢棄區域整理成一個富有風情的遊憩區域與休息站。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b5\202006261232093455.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站：三仙台</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>每年跨年的時候迎接的第一道曙光，就在台東的三仙台，因此這裡有不少人會來拍日出拍星星拍銀河，是許多愛好攝影者的朝聖之地。
                                    三仙台的跨海步橋長度近400公尺，共有八個拱橋連接而成，可以登上對面的三仙島，是非常具有指標性的景點。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b5\1c074be2-1ebb-4855-8144-b463eceb26e7.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <h2 id='2' style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第三天</h2>
                    
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站：鹿野神社</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>台東鹿野的龍田村是日治時期因移民政策而規劃的日本移民村。曾於村裡建造日本神社供日人祭拜，不過在戰後即被打掉而僅剩基座。為了重現過往的歷史風貌，邀請日本專門修建神社的「宮大工」匠師技術指導，與台灣的木工匠師合作將神社重建。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b5\180407-9381-1-t8l6H.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站：伯朗大道</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>因拍攝伯朗咖啡的廣告而大受歡迎，被稱為「伯朗大道」。而在伯朗大道的中間，有一條蜿蜒曲折的小路，是金城武曾來這兒騎單車拍攝廣告的地方，兩邊一望無際的綠色稻田隨風搖曳，被譽為是一條「翠綠的天堂之路」。</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b5\pic_A12-00329_6.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站：多良車站</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p>喜歡鐵道風景的旅客，一定要來「全台最美車站」—多良車站走走，作為全台最臨近大海的車站，你與海洋之間只有一座柵欄的距離，擁抱整個海岸的遼闊，站在觀景平台上聆聽浪聲、吹著海風，煩惱瞬間煙消雲散！


                                </p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b5\14729078814_b789c4f2f5_k.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
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