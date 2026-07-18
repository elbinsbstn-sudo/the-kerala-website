/*==========================================
        THE KERALA
        SCRIPT PART 1
==========================================*/


/*==============================
        NAVBAR
==============================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});

/*==============================
        SCROLL PROGRESS
==============================*/

const progress=document.createElement("div");

progress.id="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const progressHeight=(window.pageYOffset/total)*100;

progress.style.width=progressHeight+"%";

});

/*==============================
        TOP BUTTON
==============================*/

const topButton=document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show");

}

else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==============================
      SECTION REVEAL
==============================*/

const reveals=document.querySelectorAll(".fade-up");

window.addEventListener("scroll",reveal);

function reveal(){

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-120){

section.classList.add("active");

}

});

}

reveal();

/*==============================
        ACTIVE NAV
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/*==========================================
        PREMIUM LIGHTBOX
==========================================*/

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");

let currentIndex = 0;

if (lightbox) {

// Open Lightbox
document.querySelectorAll(".gallery-item").forEach((item, index) => {

    item.addEventListener("click", () => {

        currentIndex = index;

        showImage();

        lightbox.classList.add("active");

        progress.style.opacity = "0";

        document.body.style.overflow = "hidden";

    });

});

function showImage(){

    lightboxImg.src = galleryImages[currentIndex].src;

}

// Close Button
closeLightbox.addEventListener("click", closeLightboxFn);

// Click Outside Image
lightbox.addEventListener("click", (e)=>{

    if(e.target===lightbox){

        closeLightboxFn();

    }

});

// Previous
prevBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    currentIndex--;

    if(currentIndex<0){

        currentIndex=galleryImages.length-1;

    }

    showImage();

});

// Next
nextBtn.addEventListener("click",(e)=>{

    e.stopPropagation();

    currentIndex++;

    if(currentIndex>=galleryImages.length){

        currentIndex=0;

    }

    showImage();

});

// Keyboard
document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape"){

        closeLightboxFn();

    }

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

});

// Close Function
function closeLightboxFn(){

    lightbox.classList.remove("active");

    progress.style.opacity = "1";

    document.body.style.overflow = "auto";

}

}

/*==========================================
        RESERVE ONLINE
==========================================*/

function comingSoon(event){

    event.preventDefault();

    alert(
        "Online reservations will be available soon.\n\nPlease call us on 01737 238951 to reserve your table."
    );

}

/*==========================================
        MOBILE MENU
==========================================*/

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){

        document.body.style.overflow = "hidden";

    }else{

        document.body.style.overflow = "auto";

    }

});

/*==========================================
        CLOSE MOBILE MENU
==========================================*/

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        document.body.style.overflow = "auto";

    });

});

/*==============================
      CLOSE BUTTON
==============================*/

const menuClose = document.querySelector(".menu-close");

menuClose.addEventListener("click", () => {

    navMenu.classList.remove("active");

    document.body.style.overflow = "auto";

});