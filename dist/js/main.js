const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const hamburger = document.querySelector(".menu-btn__ham");

let menuOpen = false;

menuBtn.addEventListener('click',(e)=>{
   
    if(menuOpen){
        menuNav.classList.remove("open");
        hamburger.classList.remove("open")
        menuOpen = false;
    }
    else{
        menuNav.classList.add("open");
        hamburger.classList.add("open");
        menuOpen = true;
    }
   
})