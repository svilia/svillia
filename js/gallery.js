/* ==========================================================
   SVILIA GAMES STUDIO
   GALLERY.JS
========================================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

let currentImage = 0;

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `

<div class="lightbox-content">

<button id="prevImage">&#10094;</button>

<img id="lightboxImage" src="">

<button id="nextImage">&#10095;</button>

<button id="closeLightbox">&times;</button>

</div>

`;

document.body.appendChild(lightbox);

const lightboxImage = document.getElementById("lightboxImage");

galleryImages.forEach((image,index)=>{

image.addEventListener("click",()=>{

currentImage=index;

showImage();

});

});

function showImage(){

lightbox.classList.add("active");

lightboxImage.src=galleryImages[currentImage].src;

}

document.getElementById("closeLightbox").onclick=()=>{

lightbox.classList.remove("active");

};

document.getElementById("prevImage").onclick=()=>{

currentImage--;

if(currentImage<0){

currentImage=galleryImages.length-1;

}

showImage();

};

document.getElementById("nextImage").onclick=()=>{

currentImage++;

if(currentImage>=galleryImages.length){

currentImage=0;

}

showImage();

};

document.addEventListener("keydown",(e)=>{

if(!lightbox.classList.contains("active")) return;

if(e.key==="Escape"){

lightbox.classList.remove("active");

}

if(e.key==="ArrowLeft"){

document.getElementById("prevImage").click();

}

if(e.key==="ArrowRight"){

document.getElementById("nextImage").click();

}

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

});
