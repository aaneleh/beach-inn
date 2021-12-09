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