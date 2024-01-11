const slides = document.querySelectorAll('.slideshow img');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Интервал времени между каждым слайдом

function openImage(img) {
    var imageUrl = img.getAttribute('src');
    window.open(imageUrl, '_blank', 'fullscreen=yes');
}