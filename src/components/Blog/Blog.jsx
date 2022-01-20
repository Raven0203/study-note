import { width } from '@mui/system';
import React, { Component } from 'react';
import './blog.css'

class Blog extends Component {
 render() {
  return (
        <div style={{backgroundImage:'url("/images/AnyConv.com__E_US5SHVQAIuSbE.jpg")',backgroundSize:'100% 100%'}}>
            <div style={{ paddingTop:'60px',marginBottom:'-35px',marginLeft:'250px',width:'200px',zIndex:'3'}}>
                <h1 style={{fontWeight:'bold'}}>熱門文章</h1>
                {/* <img src='\img\未命名-1.jpg' style={{width:'180px',height:'45px',marginBottom:'15px'}}></img> */}
            </div>
           <div class="container-xl"style={{ zIndex:'-1',border:'solid',borderWidth:'3px',borderRadius:'15px',borderColor:'rgba(255,255,255,0.1)',backgroundColor:'rgba(255,255,255,0.4)',Filter:'blur(20px)'}}>
                <div class="row">
                    <div class="col-md-10 mx-auto">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                        {/* <!-- Carousel indicators --> */}
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>   
                        {/* <!-- Wrapper for carousel items --> */}
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <h4>九份三天兩夜</h4>
                                                <p>回顧從前礦業奮鬥的歷史，走入歷史的遺跡欣賞古城之美</p>
                                                <a href="/BlogShow" class="btn btn-primary">More <i class="fa fa-angle-right"></i></a>
                                            </div>						
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src="\blogimg\b2\jpg.webp" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <h4>玉山三天兩夜</h4>
                                                <p>攻頂台灣最高峰，一覽台灣壯闊之景</p>
                                                <a href="/BlogShow2" class="btn btn-primary">More <i class="fa fa-angle-right"></i></a>
                                            </div>						
                                        </div>
                                    </div>				
                                    <div class="col-sm-4">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src="\blogimg\b3\shutterstock_668912911-e1585703768352.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <h4>台北三天兩夜</h4>
                                                <p>台灣首屈一指的大都市，歷史與科技交織而成的城市</p>
                                                <a href="/BlogShow3" class="btn btn-primary">More <i class="fa fa-angle-right"></i></a>
                                            </div>						
                                        </div>					
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src="\blogimg\b4\20150925193840221.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <h4>小琉球兩天一夜</h4>
                                                <p>享受海中美景與自然，充滿奇蹟的小島</p>
                                                <a href="/BlogShow4" class="btn btn-primary">More <i class="fa fa-angle-right"></i></a>
                                            </div>						
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src="\blogimg\b5\池上伯朗大道.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <h4>台東三天兩夜</h4>
                                                <p>遠離城市的喧囂，放鬆自我的輕旅行</p>
                                                <a href="/BlogShow5" class="btn btn-primary">More <i class="fa fa-angle-right"></i></a>
                                            </div>						
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src="\images\P_20200213_120535.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Dubai</h4>
                                                <p>Convallis eget pretium eu, bibendum non leo. Proin susc ipit purus adipiscing dolor.</p>
                                                <a href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></a>
                                            </div>						
                                        </div>					
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src="\images\11.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Rio De Janeiro</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam.</p>
                                                <a href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></a>
                                            </div>						
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src="\images\P_20191104_130233_vHDR_Auto_HP.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Giza</h4>
                                                <p>Vivamus fermentum in arcu in aliquam. Quisque aliqua porta odio in fringilla vivamus.</p>
                                                <a href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></a>
                                            </div>						
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src="\images\P_20200213_161933.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Sydney</h4>
                                                <p>Convallis eget pretium eu, bibendum non leo. Proin susc ipit purus adipiscing dolor.</p>
                                                <a href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></a>
                                            </div>						
                                        </div>					
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Carousel controls --> */}
                        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                            <i class="fa fa-angle-left"></i>
                        </a>
                        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                            <i class="fa fa-angle-right"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'50px',marginBottom:'10px',marginLeft:'250px'}}>
                <h1 style={{fontWeight:'bold'}}>最新文章</h1>
            </div>
            <div style={{display: 'grid',gridTemplateColumns:'5% 60% 30% 5%',backgroundImage:'url("")',backgroundSize:'100% 100%'}}>
                <div></div>
                <div style={{paddingBottom:'10px'}}>
                    <div class="blog-card">
                        <div class="meta">
                        <div class="photo" style={{backgroundImage: "url(/images/7.jpg)"}}></div>
                        <ul class="details">
                            <li class="author"><a href="#">John Doe</a></li>
                            <li class="date">Aug. 24, 2015</li>
                            <li class="tags">
                            <ul>
                                <li><a href="#">Learn</a></li>
                                <li><a href="#">Code</a></li>
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                        <div class="description">
                        <h1>Learning to Code</h1>
                        <h2>Opening a door to the future</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                        <p class="read-more">
                            <a href="#">Read More</a>
                        </p>
                        </div>
                    </div>
                    <div class="blog-card">
                        <div class="meta">
                        <div class="photo" style={{backgroundImage: "url(/images/11.jpg)"}}></div>
                        <ul class="details">
                            <li class="author"><a href="#">John Doe</a></li>
                            <li class="date">Aug. 24, 2015</li>
                            <li class="tags">
                            <ul>
                                <li><a href="#">Learn</a></li>
                                <li><a href="#">Code</a></li>
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                        <div class="description">
                        <h1>Learning to Code</h1>
                        <h2>Opening a door to the future</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                        <p class="read-more">
                            <a href="#">Read More</a>
                        </p>
                        </div>
                    </div>
                    <div class="blog-card">
                        <div class="meta">
                        <div class="photo" style={{backgroundImage: "url(/images/12.jpg)"}}></div>
                        <ul class="details">
                            <li class="author"><a href="#">John Doe</a></li>
                            <li class="date">Aug. 24, 2015</li>
                            <li class="tags">
                            <ul>
                                <li><a href="#">Learn</a></li>
                                <li><a href="#">Code</a></li>
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                        <div class="description">
                        <h1>Learning to Code</h1>
                        <h2>Opening a door to the future</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                        <p class="read-more">
                            <a href="#">Read More</a>
                        </p>
                        </div>
                    </div>
                    <div class="blog-card">
                        <div class="meta">
                        <div class="photo" style={{backgroundImage: "url(/images/13.jpg)"}}></div>
                        <ul class="details">
                            <li class="author"><a href="#">John Doe</a></li>
                            <li class="date">Aug. 24, 2015</li>
                            <li class="tags">
                            <ul>
                                <li><a href="#">Learn</a></li>
                                <li><a href="#">Code</a></li>
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                        <div class="description">
                        <h1>Learning to Code</h1>
                        <h2>Opening a door to the future</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                        <p class="read-more">
                            <a href="#">Read More</a>
                        </p>
                        </div>
                    </div>
                    <div class="blog-card">
                        <div class="meta">
                        <div class="photo" style={{backgroundImage: "url(/images/15.jpg)"}}></div>
                        <ul class="details">
                            <li class="author"><a href="#">John Doe</a></li>
                            <li class="date">Aug. 24, 2015</li>
                            <li class="tags">
                            <ul>
                                <li><a href="#">Learn</a></li>
                                <li><a href="#">Code</a></li>
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                        <div class="description">
                        <h1>Learning to Code</h1>
                        <h2>Opening a door to the future</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                        <p class="read-more">
                            <a href="#">Read More</a>
                        </p>
                        </div>
                    </div>
                </div>
                {/* <form style={{background:'radial-gradient(ellipse at center,gray,lightgray)',width:'380px',height:'250px',Filter:'blur(20px)',borderRadius:'5px'}}>
                    <div style={{width:'380px',height:'250px',backgroundColor:'rgba(0,0,0,0.6)',borderRadius:'5px'}}>
                        <div style={{paddingTop:"45px",color:'white',paddingLeft:'45px'}}>
                            <h4><i class="fa fa-map-marker" aria-hidden="true"></i>     地區 </h4>                            
                        </div>
                        <div class="center">
                            <select name="sources" id="sources" class="custom-select sources" placeholder="Source Type" style={{width:'255px',marginLeft:'170px',marginTop:'-70px'}}>
                                <option value="profile">Profile</option>
                                <option value="word">Word</option>
                                <option value="hashtag">Hashtag</option>
                            </select>
                        </div>
                        
                        <div style={{paddingTop:"5px",color:'white',paddingLeft:'45px'}}>
                                <h4><i class="fa fa-map-o" aria-hidden="true"></i>     類型 </h4>
                        </div>   
                        <div class="center">
                            <select name="sources" id="sources" class="custom-select sources" placeholder="Source Type" style={{width:'255px',marginLeft:'170px',marginTop:'-70px'}}>
                                <option value="profile">Profile</option>
                                <option value="word">Word</option>
                                <option value="hashtag">Hashtag</option>
                            </select>
                        </div>                       
                       
                        <a href="/" class="bn3">Button</a>
                       
                        
                    </div>
                </form> */}
                <div></div>
            </div>           
        </div>
    
  );
 }
}

export default Blog;