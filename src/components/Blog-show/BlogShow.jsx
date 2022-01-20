import React ,{useEffect} from 'react'
import './blogshow.css'



export default function BlogShow() {
    let blogdata ;
    
     blogdata = JSON.parse(window.localStorage.blogdata);
     blogdata.blogdetail = JSON.parse(blogdata.blogdetail);
    return (
        
        <div style={{display: 'grid',gridTemplateColumns:'70% 30%'}}>
            <div>
                <div class="bls" style={{ width:'1000px',height:'350px',margin: '70px',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                    <img src='\blogimg\b1\44879896482_720c553daa_c.jpg' style={{width: '100%',height: '100%',objectFit:'cover'}}></img>
                </div>
                <div style={{marginLeft:'100px', marginTop:"-50px",marginBottom:'60px',width:'900px'}}>
                    <h1>{blogdata.blogdetail.title}</h1>
                </div>
                <div >
                    <div class="leftcolumn"style={{backgroundColor:'',overflow: 'auto',height:'1000px'}}>
                        
                    {blogdata.blogdetail.eachDay.map((item,idex)=>{
                        let list=[];
                        for(let i = 0;i<item.eachplace.length;i++){
                            list.push(<div class="card"style={{display: 'grid',gridTemplateColumns:'65% 35%'}}>
                            <div >
                                <h3><i class="fa fa-map-marker" aria-hidden="true"></i>  {item.eachplace[i].subTitle}</h3>
                                <p><i class="fa fa-calendar" aria-hidden="true"></i>  2022 / 1 /20</p>
                                <p> {item.eachplace[i].text}</p>
                                
                            </div>
                            <div>
                            <img src='\blogimg\b1\1583291348-1103427651.jpg' style={{width:'350px',height:'250px'}}></img>
                           
                            
                            </div>
                        </div>)
                        }
                        return <><h2 id={idex} style={{boxShadow:'0 2px',paddingBottom:'10px',width:'400px',marginTop:'60px'}}><i class="fa fa-map-o" aria-hidden="true"></i>  第{idex+1}天</h2>{list}</>
                        



                    })}
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
                        {blogdata.blogdetail.eachDay.map((item,idex)=>{
                            return <li><a href={`#${idex}`}>第{idex+1}天</a></li>
                        })}
 
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





