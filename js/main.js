const button = document.getElementById("menu-toggle");

const menu = document.querySelector(".nav-center");

button.addEventListener("click", function(){

    menu.classList.toggle("active");

});
