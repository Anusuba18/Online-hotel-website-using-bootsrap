searchForm =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =()=>{
    searchForm.classlist.toggle('active');
}

let loginForm=document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick =()=>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick =()=>{
    loginForm.classList.remove('active');
}

window.onscroll=()=>{
    searchForm.classlist.remove('active');
    if(window.scrollY >80){
        document.querySelector('.header .header-2').classlist.add('active');
    }else{
        document.querySelector('.header .header-2').classlist.remove('active');
        
    }
}

window.onload=()=>{
    if(window.scrollY >80){
        document.querySelector('.header .header-2').classlist.add('active');
    }else{
        document.querySelector('.header .header-2').classlist.remove('active');
        
    }
}
var swiper=new Swiper(".books-slider",{
    
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints:{
        0:{
            slidesPerview:1,
        },
        768:{
            slidesPerview:2,
        },
        1024:{
        slidesPerview:3,
        },
    },
});
var swiper=new Swiper(".featured-slider",{
    spaceBetween:10,
    loop:true,
    centerSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation:{
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerview:1,
        },
        450:{
            slidesPerview:2,
            },
        768:{
            slidesPerview:3,
        },
        1024:{
        slidesPerview:4,
        },
    },
});
var swiper=new Swiper(".arrivals-slider",{
    spaceBetween:10,
    loop:true,
    centerSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints:{
        0:{
            slidesPerview:1,
        },
        768:{
            slidesPerview:2,
        },
        1024:{
        slidesPerview:3,
        },
    },
});