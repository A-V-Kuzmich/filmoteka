document.body.onload = function (){
    setTimeout(function() {
let preloader = document.getElementById('page-preloader');
if (!preloader.classList.contains('done')) {
    preloader.classList.add('done');
}
    }, 1000); 
}
