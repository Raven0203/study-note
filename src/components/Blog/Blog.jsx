import { width } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './blog.css'





function Blog () {
    let temp = 0
    const [data,setData] = useState([])
   
    useEffect((()=>{
        getData()
    }),
    [])
    function getData(){
        fetch("http://localhost:8080/blog/popular")
        .then((res)=>{
            
            return res.json()
        })
        .then((result)=>{
            
            for(let i =0;i<result.length;i++){
                console.log(result[i].blogdetail)
                result[i].blogdetail = JSON.parse(result[i].blogdetail)
            }
            console.log(result)
            setData(result)
        })


        
    }
    function test(e){
        fetch("http://localhost:8080/blog/"+(e.target.id).slice(6,8))
        .then((res)=>{           
            return res.json()
        })
        .then((result)=>{
            window.localStorage.blogdata = JSON.stringify(result)
            window.location.href = "/Blogshow"
 
        })
    }
        return (
            <div style={{ backgroundImage: 'url("/images/AnyConv.com__E_US5SHVQAIuSbE.jpg")', backgroundSize: '100% 100%' }}>
                <div style={{ paddingTop: '60px', marginBottom: '-35px', marginLeft: '250px', width: '200px', zIndex: '3' }}>
                    <h1 style={{ fontWeight: 'bold' }}>熱門文章</h1>
                    {/* <img src='\img\未命名-1.jpg' style={{width:'180px',height:'45px',marginBottom:'15px'}}></img> */}
                </div>
                <div class="container-xl" style={{ zIndex: '-1', border: 'solid', borderWidth: '3px', borderRadius: '15px', borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.4)', Filter: 'blur(20px)' }}>
                    <div class="row">
                        <div class="col-md-10 mx-auto">
                            <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="0">
                                {/* <!-- Carousel indicators --> */}
                                <ol class="carousel-indicators">
                               
                                    {data.map((item,id)=>{
                                        if(id%3==0){
                                            temp++;
                                            return<li data-target="#myCarousel" ></li>

                                        }
                                    })}
                                
                                </ol>

                                <div class="carousel-inner">
                                    {data.map((item,index) => {
                                        if(index==0){
                                            let lists = [];        
                                            for(let i=index;i<=(index+2);i++){
                                                if(data[i]){
                                                    lists.push(<div class="col-sm-4">
                                                    <div class="thumb-wrapper">
                                                        <div class="img-box">
                                                            <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" />
                                                        </div>
                                                        <div class="thumb-content">
                                                            <h4>{data[i].blogdetail.title}</h4>
                                                            <p>{data[i].blogdetail.decrption}</p>
                                                            <a onClick={test} class="btn btn-primary" id={`blogid${data[i].blogid}`}>More <i class="fa fa-angle-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>)
                                                }                                                          
                                            }
                                            return<div class="carousel-item active">
                                                            <div class="row">
                                                            {lists}
                                                    </div>
                                            </div>
                                        
                                        }
                                        if(index%3==0&&index!=0){
                                            let lists = [];        
                                            for(let i=index;i<=(index+2);i++){                                                          
                                                if(data[i]){
                                                    lists.push(<div class="col-sm-4">
                                                    <div class="thumb-wrapper">
                                                        <div class="img-box">
                                                            <img src="\blogimg\b1\44879896482_720c553daa_c.jpg" class="img-fluid" alt="" />
                                                        </div>
                                                        <div class="thumb-content">
                                                            <h4>{data[i].blogdetail.title}</h4>
                                                            <p>{data[i].blogdetail.decrption}</p>
                                                            <a onClick={test} class="btn btn-primary" id={`blogid${data[i].blogid}`}>More <i class="fa fa-angle-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>)
                                                } 
                                            }
                                            return<div class="carousel-item">
                                                            <div class="row">
                                                            {lists}
                                                    </div>
                                            </div>
                                    }})}

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
                <div style={{ marginTop: '50px', marginBottom: '10px', marginLeft: '250px' }}>
                    <h1 style={{ fontWeight: 'bold' }}>最新文章</h1>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '5% 60% 30% 5%', backgroundImage: 'url("")', backgroundSize: '100% 100%' }}>
                    <div></div>
                    <div style={{ paddingBottom: '10px' }}>


                        {data.map((item)=>{
                            return <div class="blog-card">
                            <div class="meta">
                                <div class="photo" style={{ backgroundImage: "url(/images/7.jpg)" }}></div>
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
                                <h1>{item.blogdetail.title}</h1>
                                <h2>Opening a door to the future</h2>
                                <p> {item.blogdetail.decrption}</p>
                                <p class="read-more">
                                    <a onClick={test} id={`blogid${item.blogid}`}>Read More</a>
                                </p>
                            </div>
                        </div>
                       })}
 
                        
                    </div>                  
                    <div></div>
                </div>
            </div>

        );
    
}

export default Blog;