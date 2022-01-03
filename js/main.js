let slideIndex = 1;
let remainingTime = 70000;
function setTime(){
    if(remainingTime == 0)return;
    let h = Math.floor(remainingTime/3600);
    let m = Math.floor((remainingTime/3600)%60);
    let s = ((remainingTime%3600)%60);

    document.querySelector('#second').innerHTML = s;
    document.querySelector('#minutes').innerHTML = m;
    document.querySelector('#hours').innerHTML = h;

    
}
setInterval(()=>{
remainingTime -= 1;
setTime();
},1000)
function setSlides(input,index){
    slideIndex = index;
    let item = document.querySelector(`#${input}`);
    let slides = [...document.querySelector('.slides').children];
    slides.forEach(element => {
    element.classList.remove('active')
    });
    item.classList.add('active');
}

setInterval(() => {
    slideIndex += 1;
    if(slideIndex == 5){
        slideIndex = 1;
    }
    setSlides(`slide${slideIndex}`,slideIndex)
}, 6000);