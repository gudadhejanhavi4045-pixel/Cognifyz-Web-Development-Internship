
function enlargeImage(image) {
    const modal = document.getElementById("imageModal");
    const largeImage = document.getElementById("largeImage");

    largeImage.src = image.src;
    modal.style.display = "flex";
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}

// Automatic slideshow
const slides = [
    "https://picsum.photos/id/1015/900/500",
    "https://picsum.photos/id/1016/900/500",
    "https://picsum.photos/id/1035/900/500",
    "https://picsum.photos/id/1043/900/500"
];

let currentSlide = 0;

function changeSlide() {
    currentSlide = (currentSlide + 1) % slides.length;

    const image = document.getElementById("slideImage");

    image.src = slides[currentSlide];

    // Restart fade animation
    image.style.animation = "none";
    void image.offsetWidth;
    image.style.animation = "fade 1.5s";
}

setInterval(changeSlide, 3000);
