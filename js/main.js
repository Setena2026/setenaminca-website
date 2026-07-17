// MENU

const button = document.getElementById("menu-toggle");
const menu = document.querySelector(".nav-center");

if(button){

    button.addEventListener("click",function(){

        menu.classList.toggle("active");

    });

}


// LIGHTBOX

const galleryImages=document.querySelectorAll(".gallery-grid img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const close=document.querySelector(".close-lightbox");


galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImg.src=img.src;

    });

});


if(close){

    close.addEventListener("click",()=>{

        lightbox.classList.remove("active");

    });

}


if(lightbox){

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.classList.remove("active");

        }

    });

}
