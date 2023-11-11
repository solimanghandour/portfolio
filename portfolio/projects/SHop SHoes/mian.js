{/* <div class="products" id="Products">
    <h2>Products</h2>
    <div class="box">
        <div class="card">
            <div class="small_card">
                <i class="fa-solid fa-heart"></i>
                   <i class="fa-solid fa-share"></i>
              </div>
              <div class="imge">
                <img src="image/shoes1.png" alt="">
              </div>
              <div class="products_text">
                <h3>NIKE</h3>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. </P>
                <h4>$99.99</h4>
                <div class="proudcts_star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <a href="#" class="btn">Add to cart</a>
              </div>
        </div>
        

        
    </div>

    
</div> */}

{/*  */}
{/* <div class="products" id="Products">
        <h1>Products</h1>

        <div class="box">
            <div class="card">

                <div class="small_card">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-share"></i>
                </div>

                <div class="image">
                    <img src="image/shoes1.png">
                </div>

                <div class="products_text">
                    <h2>NIKE</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </p>
                    <h3>$100.99</h3>
                    <div class="products_star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <a href="#" class="btn">Add To Cart</a>
                </div>

            </div>
// 
// 
// 
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

html{
    scroll-behavior: smooth;
}

::-webkit-scrollbar{
    width: 15px;
}

::-webkit-scrollbar-track{
    border-radius: 5px;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.25);
}

::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background: linear-gradient(to top, #c72092 , #6c14d0);
}

section{
    width: 100%;
    height: 100vh;
    background-image: url(image/bg1.png);
    background-size: cover;
    background-position: center;
}

section nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 0 8px rgba(0,0,0,0.6);
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
}

section nav .logo{
    font-size: 35px;
    color: #c72092;
    margin: 5px 0;
    cursor: pointer;
    position: relative;
    left: -4%;
}

section nav .logo span{
    color: #6c14d0;
    text-decoration: underline;
}

section nav ul{
    list-style: none;
}

section nav ul li{
    display: inline-block;
    margin: 5px 15px;
}

section nav ul li a{
    text-decoration: none;
    color: black;
    transition: 0.2s;
}

section nav ul li a:hover{
    color: #c72092;
}

section nav .icons i{
    margin: 0 4px;
    cursor: pointer;
    font-size: 18px;
    transition: 0.3s;
}

section nav .icons i:hover{
    color: #c72092;
}

section .main .main_content{
    display: flex;
    align-items: center;
    justify-content: space-around;
}

section .main .main_content .main_text h1{
    font-size: 90px;
    line-height: 70px;
    font-family: pyxidium quick;
    background: linear-gradient(to right, #c72092,#6c14d0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    top: 45px;
    left: 5%;
}

section .main .main_content .main_text h1 span{
    font-size: 70px;
    background: linear-gradient(to right, #c72092,#6c14d0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

section .main .main_content .main_text p{
    width: 600px;
    text-align: justify;
    line-height: 21px;
    position: relative;
    top: 85px;
    left: 5%;
}

section .main .main_content .main_image img{
    width: 650px;
    position: relative;
    left: 20px;
    top: 75px;
}

section .main .social_icon{
    position: absolute;
    top: 50%;
    left: 98%;
    transform: translate(-50%,-50%);
    font-size: 19px;
}

section .main .social_icon i{
    margin: 8px 0;
    cursor: pointer;
    transition: 0.3s;
}

section .main .social_icon i:hover{
    color: #c72092;
}

section .main .button{
    position: absolute;
    left: 6%;
    padding: 10px 20px;
    border-radius: 30px;
    background: linear-gradient(to right,#c72092 , #6c14d0);
}

section .main .button a{
    color: white;
    text-decoration: none;
}

section .main .button i{
    color: white;
    margin-left: 5px;
    transition: 0.3s;
}

section .main .button:hover i{
    transform: translateX(6px);
}



/*Products*/

// .products{
//     width: 100%;
//     height: 140vh;
//     padding: 25px 0;
// }

// .products h1{
//     margin: 35px 0;
//     font-size: 60px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-transform: uppercase;
//     background: linear-gradient(to right, #c72092,#6c14d0);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;    
// }

// .products .box{
//     width: 90%;
//     margin: 0 auto;
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr 1fr;
//     grid-gap: 25px 0;
// }

// .products .box .card{
//     width: 290px;
//     height: 440px;
//     box-shadow: 0 0 8px #6c14d0;
//     border-radius: 5px;
//     text-align: center;
//     padding: 10px 20px;
//     background: #f6f6f6;
// }

// .products .box .card .small_card{
//     display: flex;
//     flex-flow: column;
//     position: absolute;
//     margin: 10px 0;
//     transform: translateX(-20px);
//     transition: 0.3s;
//     opacity: 0;
// }

// .products .box .card:hover .small_card{
//     transform: translateX(2px);
//     cursor: pointer;
//     opacity: 1;
// }

// .products .box .card .image{
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// .products .box .card .image img{
//     width: 150px;
//     margin: 15px 0;
//     transition: 0.3s;
// }

// .products .box .card:hover .image img{
//     transform: scale(1.1);
// }

// .products .box .card .small_card i{
//     width: 45px;
//     height: 45px;
//     border-radius: 5px;
//     font-size: 18px;
//     margin: 2px 0;
//     line-height: 40px;
//     border: 2px solid #999999;
//     transition: 0.2s;
// }

// .products .box .card .small_card i:hover{
//     color: #c72092;
// }

// .products .box .card .products_text h2{
//     font-size: 30px;
//     margin-top: 15px;
// }

// .products .box .card .products_text p{
//     color: #91919191;
//     line-height: 21px;
//     margin: 8px 0;
// }

// .products .box .card .products_text h3{
//     margin: 7px 0;
// }

// .products .box .card .products_text .products_star{
//     color: orange;
//     margin-bottom: 19px;
//     cursor: pointer;
// }

// .products .box .card .products_text .btn{
//     text-decoration: none;
//     padding: 10px 20px;
//     background: linear-gradient(to right, #c72092 , #6c14d0);
//     color: white;
// }


/*About*/

// .about{
//     width: 100%;
//     height: 100vh;
//     padding: 35px 0;
// }

// .about h1{
//     font-size: 60px;
//     margin-top: 20px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: black;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     text-transform: uppercase;
// }

// .about h1 span{
//     background: linear-gradient(to right, #c72092 , #6c14d0);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     margin-left: 15px;
// }

// .about .about_main{
//     position: relative;
//     top: 40%;
//     left: 50%;
//     transform: translate(-50%,-50%);
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
// }

// .about .about_main .about_image{
//     display: flex;
//     margin-top: 50px;
// }

// .about .about_main .about_image .about_small_image{
//     display: flex;
//     flex-direction: column;
//     position: relative;
//     top: 15px;
// }

// .about .about_main .about_image .about_small_image img{
//     height: 92px;
//     margin: 5px 0;
//     cursor: pointer;
//     background: linear-gradient(to right, #6c14d0 , #c72092);
//     display: block;
//     border-radius: 6px;
//     padding: 5px 5px;
//     box-shadow: 0 0 6px rgba(0,0,0,0.6);
//     opacity: 0.8;
//     transition: 0.3s;
// }

// .about .about_main .about_image .about_small_image img:hover{
//     opacity: 1;
// }

// .about .about_main .image_contaner{
//     padding: 10px;
//     display: flex;
// }

// .about .about_main .image_contaner img{
//     border: 3px solid #6c14d0;
//     border-radius: 20px;
//     height: 430px;
//     padding: 30px;
//     box-shadow: 0 0 8px #6c14d0;
// }

// .about .about_main .about_text{
//     margin-top: 45px;
// }

// .about .about_main .about_text p{
//     background: linear-gradient(to left, #c72092 , #6c14d0);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     line-height: 22px;
//     width: 600px;
//     text-align: justify;
//     padding: 25px 30px;
//     border: 2px solid #c72092;
//     border-radius: 20px;
//     box-shadow: 0 0 8px #c72092;
// }

// .about .about_btn{
//     color: black;
//     background: none;
//     position: relative;
//     top: 10%;
//     left: 50%;
//     transform: translate(-50% , -50%);
//     padding: 10px 25px;
//     border: 2px solid #c72092;
//     text-decoration: none;
//     box-shadow: 0 0 8px #c72092;
//     transition: 0.5s;
// }

// .about .about_btn:hover{
//     border: 2px solid transparent;
//     background: #c72092;
//     color: white;
// }


// /*Review*/

// .review{
//     width: 100%;
//     height: 100vh;
//     padding-top: 80px;
// }

// .review h1{
//     font-size: 60px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-bottom: 30px;
//     text-transform: uppercase;
// }

// .review h1 span{
//     background: linear-gradient(to left, #c72092 , #6c14d0);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     margin-left: 15px;    
// }

// .review .review_box{
//     width: 95%;
//     position: relative;
//     top: 7%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin: 0 auto;
// }

// .review .profile .profile_image{
//     width: 60px;
//     height: 60px;
//     border-radius: 50%;
//     overflow: hidden;
//     margin: 5px 0;
//     box-shadow: 0 0 10px rgba(0,0,0,0.5);
//     cursor: pointer;
//     transition: 0.3s;
// }

// .review .profile .profile_image:hover{
//     transform: scale(1.2);
// }

// .review .profile_image img{
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     object-position: center;
// }

// .review .profile{
//     display: flex;
//     align-items: center;
// }

// .review .review_box .review_card{
//     width: 500px;
//     background: #f3f1f1;
//     padding: 20px 25px;
//     border-radius: 5px;
//     margin: 15px;
//     box-shadow: 0 0 10px rgba(0,0,0,0.3);
// }

// .review .review_box .review_card .card_top{
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// }

// .review .review_box .review_card .card_top .profile .name{
//     margin-left: 20px;
//     line-height: 22px;
// }

// .review .review_box .review_card .card_top .profile .name strong{
//     font-size: 20px;
// }

// .review .review_box .review_card .card_top .profile .name .like i{
//     color: orange;
//     display: inline-block;
//     font-size: 12px;
// }

// .review .review_box .review_card .comment p{
//     text-align: justify;
//     line-height: 22px;
//     margin-top: 15px;
// }


// /*Services*/

// .services{
//     width: 70%;
//     margin: 0 auto;
//     text-align: center;
//     padding: 80px 0 10px 0;
// }

// .services h1{
//     font-size: 60px;
//     text-transform: uppercase;
// }

// .services h1 span{
//     margin-left: 15px;
//     background: linear-gradient(to left, #c72092 , #6c14d0);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;    
// }

// .services .services_cards{
//     width: 80%;
//     margin: 0 auto;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     position: relative;
//     top: 50px;
// }

// .services .services_box i{
//     font-size: 60px;
//     color: orange;
//     margin: 20px 0;
//     cursor: pointer;
// }

// .services .services_box h3{
//     margin-bottom: 12px;
//     font-size: 19px;
// }

// .services .services_box p{
//     text-align: center;
//     color: #919191;
//     margin-bottom: 60px;
// }


// /*Login Form*/

// .login_form{
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     background-image: url(image/loging_bg.png);
//     background-size: cover;
//     background-position: center;
// }

// .login_form .left img{
//     width: 650px;
// }

// .login_form .right{
//     position: relative;
//     top: -50px;
//     left: -60px;
//     padding: 50px 80px;
// }

// .login_form .right h1{
//     font-family: prevattscriptssk;
//     font-size: 45px;
//     margin-bottom: 40px;
// }

// .login_form .right p{
//     margin-bottom: 5px;
// }

// .login_form .right .user{
//     border: 2px solid #6c14d0;
//     border-radius: 5px;
//     width: 350px;
//     height: 40px;
//     display: flex;
// }

// .login_form .right .user i{
//     position: relative;
//     top: 9px;
//     left: 15px;
//     color: #c72092;
// }

// .login_form .right .user .username{
//     position: relative;
//     left: 9%;
//     width: 295px;
//     background: none;
//     outline: none;
//     border: none;
//     display: flex;
//     font-size: 15px;
// }

// .login_form .right .passworg_tag{
//     margin: 15px 0 5px 0;
// }

// .login_form .right .password{
//     border: 2px solid #6c14d0;
//     border-radius: 5px;
//     width: 350px;
//     height: 40px;
//     display: flex;
// }

// .login_form .right .password i{
//     position: relative;
//     top: 9px;
//     left: 15px;
//     color: #c72092;
// }

// .login_form .right .password input{
//     position: relative;
//     left: 9%;
//     width: 295px;
//     background: none;
//     border: none;
//     outline: none;
//     display: flex;
//     font-size: 15px;
// }

// ::-webkit-input-placeholder{
//     color: black;
//     opacity: 0.7;
// }

// .login_form .right .forget{
//     position: relative;
//     left: 60%;
//     margin: 6px 0 10px 0;
//     cursor: pointer;
// }

// .login_form .right button{
//     width: 350px;
//     color: white;
//     padding: 7px 20px;
//     border: none;
//     border-radius: 5px;
//     font-size: 20px;
//     cursor: pointer;
//     background: linear-gradient(to right, #c72092 , #6c14d0);
// }

// .login_form .right .loging_icon{
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-top: 25px;
// }

// .login_form .right .loging_icon a{
//     width: 30px;
//     height: 30px;
//     margin: 0 2px;
//     border-radius: 50%;
//     background: #f3f3f3;
//     box-shadow: 0 0 5px rgba(0,0,0,0.6);
// }

// .login_form .right .loging_icon img{
//     width: 20px;
//     margin: 5px 5px;
// }


// /*Footer*/

// footer{
//     width: 100%;
// }

// footer .footer_main{
//     width: 100%;
//     background: #f3f1f1;
//     display: flex;
//     justify-content: space-around;
// }

// footer .footer_main .tag{
//     margin: 10px 0;
// }

// footer .footer_main .tag .center{
//     text-align: center;
// }

// footer .footer_main .tag h1{
//     font-size: 25px;
//     margin: 25px 0;
//     color: #1c0080;
// }

// footer .footer_main .tag a{
//     display: block;
//     color: black;
//     text-decoration: none;
//     margin: 9px 0;
// }

// footer .footer_main .tag a i{
//     padding: 0 10px;
//     transition: 0.3;
// }

// footer .footer_main .tag a i:hover{
//     color: #c72092;
// }

// footer .footer_main .tag .social_link{
//     display: flex;
// }

// footer .footer_main .tag .social_link a{
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//     text-align: center;
//     text-decoration: none;
//     color: black;
//     box-shadow: 0 0 20px 10px rgba(0,0,0,0.05);
//     position: relative;
//     margin: 0 5px;
//     z-index: 10;
//     overflow: hidden;
// }

// footer .footer_main .tag .social_link a .fa-brands{
//     font-size: 15px;
//     line-height: 30px;
//     z-index: 10;
//     position: relative;
//     transition: 0.5s;
// }

// footer .footer_main .tag .social_link a:hover i{
//     color: white;
// }

// footer .footer_main .tag .social_link a::after{
//     content: '';
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: -90px;
//     background: linear-gradient(-45deg, #c72092 , #6c14d0);
//     position: absolute;
//     z-index: -10;
//     transition: 0.5s;
// }

// footer .footer_main .tag .social_link a:hover::after{
//     left: 0;
// }

// footer .footer_main .tag .search_bar{
//     width: 230px;
//     height: 30px;
//     background: rgb(202, 202, 202);
//     border-radius: 25px;
// }

// footer .footer_main .tag .search_bar input{
//     width: 200px;
//     padding: 2px 0;
//     position: relative;
//     top: 17%;
//     left: 6%;
//     border: none;
//     background: none;
//     outline: none;
//     font-size: 13px;
// }

// footer .footer_main .tag .search_bar button{
//     padding: 7px 15px;
//     background: linear-gradient(to right, #c72092 , #6c14d0);
//     border: none;
//     margin-top: 15px;
//     border-radius: 25px;
//     color: white;
//     cursor: pointer;
// }