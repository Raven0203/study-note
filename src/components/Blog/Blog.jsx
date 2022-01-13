import { width } from '@mui/system';
import React, { Component } from 'react';
import './blog.css'

class Blog extends Component {
 render() {
  return (
        <div >
            <div style={{ paddingTop:'60px',marginBottom:'-35px',marginLeft:'250px',width:'200px',zIndex:'3'}}>
                {/* <h1 style={{backgroundColor:'white',opacity:'100%'}}>熱門文章</h1> */}
                <img src='\img\未命名-1.jpg' style={{width:'180px',height:'45px',marginBottom:'15px'}}></img>
            </div>
           <div class="container-xl"style={{ zIndex:'-1',border:'solid',borderWidth:'3px',borderRadius:'15px',borderColor:'gray'}}>
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
                                                <img src="\images\7.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <h4>London</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam.</p>
                                                <a href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></a>
                                            </div>						
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src="\images\12.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <h4>New York</h4>
                                                <p>Vivamus fermentum in arcu in aliquam. Quisque aliqua porta odio in fringilla vivamus.</p>
                                                <a href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></a>
                                            </div>						
                                        </div>
                                    </div>				
                                    <div class="col-sm-4">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src="\images\13.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Paris</h4>
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
                                                <img src="\images\15.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Kuala Lumpur</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam.</p>
                                                <a href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></a>
                                            </div>						
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="thumb-wrapper">
                                            <div class="img-box">
                                                <img src="\images\P_20200210_104806.jpg" class="img-fluid" alt=""/>
                                            </div>
                                            <div class="thumb-content">
                                                <h4>Agra</h4>
                                                <p>Vivamus fermentum in arcu in aliquam. Quisque aliqua porta odio in fringilla vivamus.</p>
                                                <a href="#" class="btn btn-primary">More <i class="fa fa-angle-right"></i></a>
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
                <h1>最新文章</h1>
            </div>
            <div style={{marginRight:'400px'}}>
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

        </div>
    
  );
 }
}

export default Blog;