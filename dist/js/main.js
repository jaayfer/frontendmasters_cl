const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const hamburger = document.querySelector(".menu-btn__ham");
const navItems = document.querySelectorAll(".menu-nav__item");

let menuOpen = false;

menuBtn.addEventListener('click',(e)=>{
   
    if(menuOpen){
        menuNav.classList.remove("open");
        hamburger.classList.remove("open")
        navItems.forEach(item=> item.classList.remove("open"))
        menuOpen = false;
    }
    else{
        menuNav.classList.add("open");
        hamburger.classList.add("open");
        navItems.forEach(item=> item.classList.add("open"))
        menuOpen = true;
    }
   
})