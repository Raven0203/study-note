import React from 'react';
import './favorite.css'

const Favorite = () => {
    return (
        <div >
        {/* <div>
            <h1>收藏頁面</h1>
        </div> */}
        <div style={{paddingLeft:'250px',paddingTop:'120px',paddingBottom:'250px',display:"flex"}}>
       
            <div class="cover">
                 
            <div class="book">
               
            <label for="page-1"  class="book__page book__page--1">
                <img src="\img\pexels-photo-1717937.jpeg" alt=""/>
            </label>
            
            <label for="page-2"  class="book__page book__page--4">
                <div class="page__content" id='bloglist'>
                {/* <h1 class="page__content-title">I</h1> */}
                <ul class='favorite' style={{listStyleType:'square',paddingTop:'40px',display:'inline-block'}}>
                    <li><a href='https://codepen.io/pascaloliv/pen/LVZaeE'>星期一二三四五六</a></li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                    <li>星期一</li>
                    <li>星期二</li>
                </ul>
                {/* <div class="page__content-blockquote">
                    <p class="page__content-blockquote-text"><a href='https://codepen.io/pascaloliv/pen/LVZaeE'>HARI SELDON — . . . born in the 11,988th year of  </a></p>
                    <p class="page__content-blockquote-text">. . . Undoubtedly his greatest contributions were in the field of psychohistory. Seldon found the field little more than a set of vag </p>
                    <p class="page__content-blockquote-text">. . . The best existing authority we have for the details of his life is the biography written by Gaal Dornick who, as a young </p>
                    <span class="page__content-blockquote-reference">Encyclopedia Galactica*</span>
                </div>
                <div class="page__content-text">
                    <p>His name was Gaal Dornick and he wa </p>
                    <p>There were nearly twenty-five million i </p>
                    <p>To Gaal, this trip was the undoub </p>
                </div> */}
                
                </div>
                
            </label>
                
             {/* Resets the page  */}
            <input type="radio" name="page" id="page-1"/>
                
             {/* Goes to the second page  */}
            <input type="radio" name="page" id="page-2"/>

            <label class="book__page book__page--2">
                <div class="book__page-front">
                    <div class="page__content1">
                        <h1 class="page__content1-book-title">旅遊收藏</h1>
                        <h2 class="page__content1-author">Travel Memory</h2>                   
                        <p class="page__content1-credits">
                        <span><i class="fa fa-pencil" aria-hidden="true"></i>  收集來自不同人的回憶</span>
                        </p>                    
                        <p class="page__content1-credits">                    
                        <span><i class="fa fa-pencil" aria-hidden="true"></i>  留下令你心動的場景</span>
                        </p>                    
                    </div>
                </div>
                <div class="book__page-back"style={{backgroundImage: 'url("/img/20210407060720899.jpg")',backgroundSize:'100% 100%'}}/>
            </label>
            </div>
            </div>           
        </div>
        </div>
    );
}

export default Favorite;
