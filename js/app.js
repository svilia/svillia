/* ==========================================
   SVILIA GAMES STUDIO
   app.js
========================================== */

// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    setTimeout(() => {

        loader.style.display = "none";

    },700);

});


// Navbar küçülmesi

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.padding="15px 70px";
        header.style.background="rgba(0,0,0,.80)";
        header.style.borderBottom="1px solid rgba(255,255,255,.08)";

    }else{

        header.style.padding="25px 70px";
        header.style.background="rgba(0,0,0,.35)";
        header.style.borderBottom="none";

    }

});


// Fade Animasyonları

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


// Scroll Progress Bar

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

let total=document.documentElement.scrollHeight-window.innerHeight;

let current=window.scrollY;

let percent=(current/total)*100;

progress.style.width=percent+"%";

});


// Mouse Parallax

const hero=document.querySelector(".hero");

hero.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.pageX)/40;

let y=(window.innerHeight/2-e.pageY)/40;

hero.style.backgroundPosition=x+"px "+y+"px";

});


// Sayılar

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const increment=target/120;

if(c<target){

counter.innerText=Math.ceil(c+increment);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

}

update();

});


// Reveal Images

const images=document.querySelectorAll("img");

images.forEach(img=>{

img.style.opacity="0";

img.style.transition="1s";

});

const imageObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

images.forEach(img=>{

img.style.transform="translateY(30px)";

imageObserver.observe(img);

});


// Smooth Anchor

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// Hero Fade

window.addEventListener("scroll",()=>{

let value=window.scrollY;

const heroContent=document.querySelector(".hero-content");

heroContent.style.opacity=1-value/500;

heroContent.style.transform=`translateY(${value*.25}px)`;

});


// Cursor Glow

const cursor=document.createElement("div");

cursor.id="cursor";

document.body.appendChild(cursor);

window.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});


// Active Menu

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){

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


// Random Background Move

setInterval(()=>{

document.querySelector(".hero").style.backgroundPosition=

`${Math.random()*20}px ${Math.random()*20}px`;

},4000);


// Console

console.log("%cSVILIA GAMES STUDIO","font-size:30px;font-weight:bold;");
console.log("%cOfficial Website","font-size:18px;");
console.log("%cCopyright © 2026","font-size:14px;");
