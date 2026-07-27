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
/* ======================================
LEGAL ACCORDIONS
====================================== */

const legalItems = document.querySelectorAll(".legal-item");

legalItems.forEach(item => {

    const button = item.querySelector(".legal-btn");

    button.addEventListener("click", () => {

        const isOpen = item.classList.contains("active");

        legalItems.forEach(section => {

            section.classList.remove("active");

            section.querySelector(".legal-content").style.maxHeight = null;

        });

        if (!isOpen) {

            item.classList.add("active");

            const content = item.querySelector(".legal-content");

            content.style.maxHeight = content.scrollHeight + "px";

        }

    });

});
/* ==========================================
LANGUAGE SELECTOR
========================================== */

const languageBtn = document.getElementById("languageBtn");
const languageDropdown = document.getElementById("languageDropdown");
const currentLanguage = document.getElementById("currentLanguage");

if(languageBtn){

    languageBtn.addEventListener("click",function(e){

        e.stopPropagation();

        languageDropdown.classList.toggle("show");

    });

    document.querySelectorAll(".language-dropdown button").forEach(button=>{

        button.addEventListener("click",function(){

            currentLanguage.textContent=this.dataset.lang.toUpperCase();

            languageDropdown.classList.remove("show");

        });

    });

    document.addEventListener("click",function(){

        languageDropdown.classList.remove("show");

    });

}
/*=========================================
OPENING OFFER POPUP
=========================================*/

const popup = document.getElementById("offerPopup");
const closePopup = document.getElementById("closePopup");

if(closePopup){

    closePopup.addEventListener("click",()=>{

        popup.style.display="none";

    });

}

window.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

});
/*=========================================
TEAM PHOTO SLIDER
=========================================*/

const sliders = document.querySelectorAll(".team-photo.slider");

sliders.forEach((slider) => {

    const images = slider.querySelectorAll("img");

    let current = 0;

    if(images.length <= 1) return;

    images[current].classList.add("active");

    setInterval(() => {

        images[current].classList.remove("active");

        current++;

        if(current >= images.length){

            current = 0;

        }

        images[current].classList.add("active");

    },4000);

});
