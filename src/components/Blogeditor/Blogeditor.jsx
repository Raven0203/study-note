import React from 'react'
import './blogeditor.css'



export default function BlogShow() {
    return (
        
        <div style={{display: 'grid',gridTemplateColumns:'70% 30%'}}>
            <div>
            <div class="center">
                <div class="form-input">
                    <div class="preview">
                    <img id="file-ip-1-preview"/>
                    </div>
                    <label for="file-ip-1">Upload Image</label>
                    <input type="file" id="file-ip-1" accept="image/*" 
                    onchange={(event =>{if(event.target.files.length > 0){
                        var src = URL.createObjectURL(event.target.files[0]);
                        var preview = document.getElementById("file-ip-1-preview");
                        preview.src = src;
                        preview.style.display = "block";
                    }})}/>

                </div>
            </div> 
                {/* <div class="bls" style={{ width:'1000px',height:'350px',margin: '70px',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <img src='\images\P_20200213_120535.jpg' style={{width: '100%',height: '100%',objectFit:'cover'}}></img>
                </div>
                <div style={{marginLeft:'160px', marginTop:"-50px",marginBottom:'120px',width:'900px'}}>
                    <h1>福岡之旅</h1>
                </div>
                <div>
                    <div class="leftcolumn">
                    <h2 style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第一天</h2>
                    
                    <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h2><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站</h2>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /18</p>
                                <textarea id="description-61e627a8cd4644002b0b703b" name="description-61e627a8cd4644002b0b703b" type="text" style={{resize:'none',height:"200px",overflow:"scroll"}}>請輸入說明文字....</textarea>
                                
                            </div>
                            <div>
                            
                           
                            
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h2><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站</h2>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /18</p>
                                <p>佐世保車站（日語：佐世保駅〔佐世保驛〕／させぼえき Sasebo eki ）是位於日本長崎縣佐世保市三浦町的九州旅客鐵道（JR九州）和松浦鐵道鐵路車站。除了是佐世保線的西邊終點之外，在JR松浦線（也就是今日的松浦鐵道西九州線）與沿線各車站轉由松浦鐵道接收營運之後，佐世保車站就變成JR系統之中地理位置最西的車站。</p>
                            </div>
                            <div>
                            <div class="blogshowimg">
                                <div class="">
                                    <div class="">
                                        <div id="blogCarousel" class="carouselblog slide" data-ride="carousel" align="center">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active"> <img src="\images\P_20200210_104659.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\P_20200210_104806.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\IMG_0792.JPG" class="rounded"/> </div>
                                            </div>
                                            <ol class="carousel-indicators list-inline">
                                                <li class="list-inline-item active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#myCarousel"> <img src="\images\P_20200210_104659.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel"> <img src="\images\P_20200210_104806.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel"> <img src="\images\IMG_0792.JPG" class="img-fluid rounded"/> </a> </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h2><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站</h2>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /18</p>
                                <p>佐世保車站（日語：佐世保駅〔佐世保驛〕／させぼえき Sasebo eki ）是位於日本長崎縣佐世保市三浦町的九州旅客鐵道（JR九州）和松浦鐵道鐵路車站。除了是佐世保線的西邊終點之外，在JR松浦線（也就是今日的松浦鐵道西九州線）與沿線各車站轉由松浦鐵道接收營運之後，佐世保車站就變成JR系統之中地理位置最西的車站。</p>
                            </div>
                            <div>
                            <div class="blogshowimg">
                                <div class="">
                                    <div class="">
                                        <div id="blogCarousel" class="carouselblog slide" data-ride="carousel" align="center">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active"> <img src="\images\P_20200210_104659.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\P_20200210_104806.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\IMG_0792.JPG" class="rounded"/> </div>
                                            </div>
                                            <ol class="carousel-indicators list-inline">
                                                <li class="list-inline-item active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#myCarousel"> <img src="\images\P_20200210_104659.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel"> <img src="\images\P_20200210_104806.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel"> <img src="\images\IMG_0792.JPG" class="img-fluid rounded"/> </a> </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Button with data-bs-target
                    </button>
                    </p>
                    <div class="leftcolumn" >
                    <h2 style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第一天</h2>
                    
                    <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h2><i class="fa fa-map-marker" aria-hidden="true"></i>  第一站</h2>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /18</p>
                                <p>佐世保車站（日語：佐世保駅〔佐世保驛〕／させぼえき Sasebo eki ）是位於日本長崎縣佐世保市三浦町的九州旅客鐵道（JR九州）和松浦鐵道鐵路車站。除了是佐世保線的西邊終點之外，在JR松浦線（也就是今日的松浦鐵道西九州線）與沿線各車站轉由松浦鐵道接收營運之後，佐世保車站就變成JR系統之中地理位置最西的車站。</p>
                            </div>
                            <div>
                            <div class="blogshowimg">
                                <div class="">
                                    <div class="">
                                        <div id="blogCarousel" class="carouselblog slide" data-ride="carousel" align="center">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active"> <img src="\images\P_20200210_104659.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\P_20200210_104806.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\IMG_0792.JPG" class="rounded"/> </div>
                                            </div>
                                            <ol class="carousel-indicators list-inline">
                                                <li class="list-inline-item active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#myCarousel"> <img src="\images\P_20200210_104659.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel"> <img src="\images\P_20200210_104806.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel"> <img src="\images\IMG_0792.JPG" class="img-fluid rounded"/> </a> </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h2><i class="fa fa-map-marker" aria-hidden="true"></i>  第二站</h2>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /18</p>
                                <p>佐世保車站（日語：佐世保駅〔佐世保驛〕／させぼえき Sasebo eki ）是位於日本長崎縣佐世保市三浦町的九州旅客鐵道（JR九州）和松浦鐵道鐵路車站。除了是佐世保線的西邊終點之外，在JR松浦線（也就是今日的松浦鐵道西九州線）與沿線各車站轉由松浦鐵道接收營運之後，佐世保車站就變成JR系統之中地理位置最西的車站。</p>
                            </div>
                            <div>
                            <div class="blogshowimg">
                                <div class="">
                                    <div class="">
                                        <div id="blogCarousel" class="carouselblog slide" data-ride="carousel" align="center">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active"> <img src="\images\P_20200210_104659.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\P_20200210_104806.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\IMG_0792.JPG" class="rounded"/> </div>
                                            </div>
                                            <ol class="carousel-indicators list-inline">
                                                <li class="list-inline-item active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#myCarousel"> <img src="\images\P_20200210_104659.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel"> <img src="\images\P_20200210_104806.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel"> <img src="\images\IMG_0792.JPG" class="img-fluid rounded"/> </a> </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h2><i class="fa fa-map-marker" aria-hidden="true"></i>  第三站</h2>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /18</p>
                                <p>佐世保車站（日語：佐世保駅〔佐世保驛〕／させぼえき Sasebo eki ）是位於日本長崎縣佐世保市三浦町的九州旅客鐵道（JR九州）和松浦鐵道鐵路車站。除了是佐世保線的西邊終點之外，在JR松浦線（也就是今日的松浦鐵道西九州線）與沿線各車站轉由松浦鐵道接收營運之後，佐世保車站就變成JR系統之中地理位置最西的車站。</p>
                            </div>
                            <div>
                            <div class="blogshowimg">
                                <div class="">
                                    <div class="">
                                        <div id="blogCarousel" class="carouselblog slide" data-ride="carousel" align="center">
                                            <div class="carousel-inner">
                                                <div class="carousel-item active"> <img src="\images\P_20200210_104659.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\P_20200210_104806.jpg" class="rounded"/> </div>
                                                <div class="carousel-item"> <img src="\images\IMG_0792.JPG" class="rounded"/> </div>
                                            </div>
                                            <ol class="carousel-indicators list-inline">
                                                <li class="list-inline-item active"> <a id="carousel-selector-0" class="selected" data-slide-to="0" data-target="#myCarousel"> <img src="\images\P_20200210_104659.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#myCarousel"> <img src="\images\P_20200210_104806.jpg" class="img-fluid rounded"/> </a> </li>
                                                <li class="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#myCarousel"> <img src="\images\IMG_0792.JPG" class="img-fluid rounded"/> </a> </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div class="rightcolumn">
                <div class="card1">
                
                <div class="" ><img src='\img\ProfilePictureMaker.png'style={{height:"100px",width:'100px'}}/>作者:xxx</div>
                <p>個人資料的特別的話</p>
                </div>
                <div class="card1">
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
                <div class="card1">
                <h3>更多熱門文章....</h3>
                <img src='\images\P_20200213_120535.jpg'style={{height:"200px"}}/>
                <br/>
                <img src='\images\P_20200213_120535.jpg'style={{height:"200px"}}/>
                <br/>
                <img src='\images\P_20200213_120535.jpg'style={{height:"200px"}}/>
                </div>
                </div> */}
            </div>

        </div>
    )
}