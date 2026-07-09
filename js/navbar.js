/* ==========================================================
   SVILIA GAMES STUDIO
   NAVBAR.JS
========================================================== */

const header = document.querySelector("header");
const navLinks = document.querySelectorAll("nav a");

/* =========================
   HEADER SCROLL
========================= */

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});


/* =========================
   ACTIVE LINK
========================= */

const sections = document.querySelectorAll("section[id]");

function activeSection(){

    const scroll = window.scrollY + 200;

    sections.forEach(section=>{

        const top = section.offsetTop;

        const height = section.offsetHeight;

        const id = section.getAttribute("id");

        if(scroll >= top && scroll < top + height){

            navLinks.forEach(link=>{

                link.classList.remove("active");

                if(link.getAttribute("href") === "#" + id){

                    link.classList.add("active");

                }

            });

        }

    });

}

window.addEventListener("scroll",activeSection);


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* =========================
   MOBILE MENU
========================= */

const menuButton=document.querySelector(".mobile-button");
const mobileMenu=document.querySelector(".mobile-menu");

if(menuButton){

menuButton.addEventListener("click",()=>{

mobileMenu.classList.toggle("open");

menuButton.classList.toggle("active");

});

}


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.addEventListener("click",()=>{

mobileMenu.classList.remove("open");

menuButton.classList.remove("active");

});

});


/* =========================
   PROGRESS BAR
========================= */

const progress=document.createElement("div");

progress.id="progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-window.innerHeight;

const width=(scrollTop/height)*100;

progress.style.width=width+"%";

});


/* =========================
   HEADER SHADOW
========================= */

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.boxShadow="0 15px 40px rgba(0,0,0,.45)";

}else{

header.style.boxShadow="none";

}

});


/* =========================
   HIDE HEADER
========================= */

let lastScroll=0;

window.addEventListener("scroll",()=>{

const current=window.pageYOffset;

if(current>lastScroll && current>250){

header.style.transform="translateY(-100%)";

}else{

header.style.transform="translateY(0)";

}

lastScroll=current;

});


/* =========================
   LOGO EFFECT
========================= */

const logo=document.querySelector(".logo img");

if(logo){

logo.addEventListener("mouseenter",()=>{

logo.style.transform="rotate(8deg) scale(1.08)";

});

logo.addEventListener("mouseleave",()=>{

logo.style.transform="rotate(0deg) scale(1)";

});

}


/* =========================
   CONSOLE
========================= */

console.log("%cSVILIA GAMES STUDIO","font-size:24px;font-weight:bold;");
console.log("%cOfficial Website","font-size:15px;");
