let slideIndex = 1;
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