let menuBtn = document.querySelector(".menu-btn");
let menuNav = document.querySelector(".menu-nav");

let menuOpen = false;

menuBtn.addEventListener('click',(e)=>{
   
    if(menuOpen){
        menuNav.classList.remove("open");
        e.target.querySelector(".menu-btn__ham").classList.remove("open")
        menuOpen = false;
    }
    else{
        menuNav.classList.add("open");
        e.target.querySelector(".menu-btn__ham").classList.add("open");
        menuOpen = true;
    }
   
})