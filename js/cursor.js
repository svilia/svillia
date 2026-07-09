/* ==========================================================
   SVILIA GAMES STUDIO
   CURSOR.JS
========================================================== */

const cursor = document.createElement("div");
cursor.className = "cursor";

const cursorDot = document.createElement("div");
cursorDot.className = "cursor-dot";

document.body.appendChild(cursor);
document.body.appendChild(cursorDot);

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

/* Mouse Position */

window.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";

});

/* Smooth Cursor */

function animateCursor(){

    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();

/* Hover */

const hoverElements = document.querySelectorAll(
"a,button,.button,.game-card,.feature,.news-card,img"
);

hoverElements.forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursor.classList.add("cursor-hover");

});

el.addEventListener("mouseleave",()=>{

cursor.classList.remove("cursor-hover");

});

});

/* Click */

window.addEventListener("mousedown",()=>{

cursor.classList.add("cursor-click");

});

window.addEventListener("mouseup",()=>{

cursor.classList.remove("cursor-click");

});

/* Hidden */

window.addEventListener("mouseleave",()=>{

cursor.style.opacity="0";

cursorDot.style.opacity="0";

});

window.addEventListener("mouseenter",()=>{

cursor.style.opacity="1";

cursorDot.style.opacity="1";

});
