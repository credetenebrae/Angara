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


function openPopup(img) {
    var imageUrl = img.getAttribute('src');
    var popupImage = document.getElementById('popupImage');
    popupImage.setAttribute('src', imageUrl);
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}