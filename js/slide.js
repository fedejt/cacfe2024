let slideIndex = 0;

function showSlides(n){
    console.log('showSlides', n);
    const slides = document.querySelectorAll('.slide');
    console.log('slides', slides.length);
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    console.log('slideIndex', slideIndex);
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
}

function avanzarSlide(n){
    showSlides(slideIndex += n);
}  

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlidesAuto(){
    avanzarSlide(1);
    setTimeout(showSlidesAuto, 7000);
}

showSlidesAuto();