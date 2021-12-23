const cloud_1 = document.getElementById('cloud-1');
const cloud_2 = document.getElementById('cloud-2');
const cloud_3 = document.getElementById('cloud-3');
const sun = document.getElementById('sun');
const palm_tree_1 = document.getElementById('palm-tree-1');
const palm_tree_2 = document.getElementById('palm-tree-2');

window.addEventListener('scroll', function(){
    var scroll = window.scrollY;
    cloud_1.style.top = (scroll * 0.25) + 130 + "px";
    cloud_2.style.top = (scroll * 0.25) + 80 + "px";
    cloud_3.style.top = (scroll * 0.1) + 120 + "px";
    sun.style.top = (scroll * 0.25) + 50 + "px";
    scroll -= 20;
    if(scroll > 20){
        palm_tree_1.style.left =  10 - (scroll * 0.05) + '%';
        palm_tree_2.style.left =  75 + (scroll * 0.05) + '%';
    }
})

/* CONTENT LIST ON SMALLER SCREENS */
const list = document.querySelector('#header .links');

function toggleList(){
    list.classList.toggle('active');
}

/* CAROUSEL */
const carousel = document.querySelector('#gallery .carousel-images');
const nextArrow = document.querySelector('.carousel-next svg');
const prevArrow = document.querySelector('.carousel-prev svg');
var position;

prevArrow.style.opacity = "0.5";

function refleshArrows(){
    position = parseInt(carousel.style.left);

    if(position == 50) prevArrow.style.opacity = "0.5";
    else if (position == -1950) nextArrow.style.opacity = "0.5";
    else {
        prevArrow.style.opacity = "1";
        nextArrow.style.opacity = "1";
    }
}
function carousel_prev(){
    position = parseInt(carousel.style.left);
    //se não estiver no mais do canto pode "andar"
    if(position != 50) {
        carousel.style.left = (position + 500) + "px";
        refleshArrows();
    }
}
function carousel_next(){
    position = parseInt(carousel.style.left);
    if(position != -1950){
        carousel.style.left = (position - 500) + "px";
        refleshArrows();
    }
}

/* RENT IMAGES */
const mainImage = document.getElementById('main-image');
const mainImageDescription = document.getElementById('main-image-description');

const previewImages = document.querySelectorAll('.preview-wrapper img');
let currentImage = document.querySelector('.current-image')

function setDescription(){
    mainImageDescription.innerHTML = mainImage.getAttribute('alt');
}
function setMainImage(){
    currentImage = document.querySelector('.current-image');
    mainImage.setAttribute('src', currentImage.getAttribute('src'));
    mainImage.setAttribute('alt', currentImage.getAttribute('alt'));
    setDescription();
}
function SwitchImage (to) {
    currentImage = document.querySelector('.current-image');
    currentImage.classList.toggle('current-image');
    previewImages[to].classList.toggle('current-image');
    setMainImage();
}

