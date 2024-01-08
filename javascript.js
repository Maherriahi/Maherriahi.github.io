let videoProjet = document.querySelector('.video-projet');
let dashboard = document.querySelector('.dashboard');
let boutique = document.querySelector('.boutique');
let library = document.querySelector('.library');
let sumurai = document.querySelector('.sumurai');
let close = document.querySelector('.close');
let source = document.createElement('source');
let video = document.querySelector('.video-mp4');
let card_service = document.querySelector('.card-service');


close.addEventListener('click', function () {
    console.log('ok');
    videoProjet.style.display = 'none' ;
    window.location.reload();

})

dashboard.addEventListener('click', function () {
    srcVideo('video/dashboard.mp4','video/Mp4');
    videoProjet.style.display = 'block';

})

boutique.addEventListener('click', function () {
    srcVideo('video/boutique.mp4','video/mp4');
    videoProjet.style.display = 'block';

})

library.addEventListener('click', function () {
    srcVideo('video/library.mp4','video/mp4');
    videoProjet.style.display = 'block' ;

})

sumurai.addEventListener('click', function () {
    srcVideo('video/sumurai.mp4','video/mp4') ;
    videoProjet.style.display = 'block' ;

})

function srcVideo(src,type){

    source.setAttribute('src', src);
    source.setAttribute('type', type);
    video.appendChild(source);
}




