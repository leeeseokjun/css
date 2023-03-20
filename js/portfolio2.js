let typingText = new Typed("#text", {
    strings : ["John","Designer","Coder","Youtuber",],
    loop : true,
    typeSpeed : 100,
    backSpeed : 50,
    backDelay : 1000,
})


let banner = document.querySelector('.banner');
let dayNight = document.querySelector('.dayNight');
dayNight.onclick = function(){
    banner.classList.toggle('night')
}