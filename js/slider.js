/* ==========================================================
   SVILIA GAMES STUDIO
   SLIDER.JS
========================================================== */

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const dotsContainer = document.querySelector(".slider-dots");

let index = 0;
let autoSlide;

/* ==========================
   CREATE DOTS
========================== */

slides.forEach((slide,i)=>{

const dot=document.createElement("span");

dot.classList.add("dot");

if(i===0){

dot.classList.add("active");

}

dot.onclick=()=>{

index=i;

updateSlider();

}

dotsContainer.appendChild(dot);

});

/* ==========================
   UPDATE
========================== */

function updateSlider(){

slider.style.transform=`translateX(-${index*100}%)`;

document.querySelectorAll(".dot").forEach(dot=>{

dot.classList.remove("active");

});

document.querySelectorAll(".dot")[index].classList.add("active");

}

/* ==========================
   NEXT
========================== */

function nextSlide(){

index++;

if(index>=slides.length){

index=0;

}

updateSlider();

}

/* ==========================
   PREVIOUS
========================== */

function prevSlide(){

index--;

if(index<0){

index=slides.length-1;

}

updateSlider();

}

next.addEventListener("click",()=>{

nextSlide();

restartAuto();

});

prev.addEventListener("click",()=>{

prevSlide();

restartAuto();

});

/* ==========================
   AUTO
========================== */

function startAuto(){

autoSlide=setInterval(()=>{

nextSlide();

},6000);

}

function restartAuto(){

clearInterval(autoSlide);

startAuto();

}

startAuto();

/* ==========================
   TOUCH
========================== */

let startX=0;
let endX=0;

slider.addEventListener("touchstart",(e)=>{

startX=e.touches[0].clientX;

});

slider.addEventListener("touchmove",(e)=>{

endX=e.touches[0].clientX;

});

slider.addEventListener("touchend",()=>{

if(startX-endX>60){

nextSlide();

}

if(endX-startX>60){

prevSlide();

}

});

/* ==========================
   KEYBOARD
========================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

nextSlide();

}

if(e.key==="ArrowLeft"){

prevSlide();

}

});
