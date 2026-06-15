const fulimgBox = document.getElementById("fulimgBox");
const fulImg    = document.getElementById("fulimg");
const images    = document.querySelectorAll(".fotos img");
let currentIndex = 0;

// Abrir lightbox al hacer click en cualquier foto
images.forEach((img, index) => {
    img.addEventListener("click", () => openfulimg(index));
});

function openfulimg(index) {
    currentIndex = index;
    fulImg.src = images[index].src;
    fulimgBox.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeimg() {
    fulimgBox.style.display = "none";
    document.body.style.overflow = "";
}

function changeImg(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    fulImg.src = images[currentIndex].src;
}

// Cerrar al hacer click fuera de la imagen
fulimgBox.addEventListener("click", (e) => {
    if (e.target === fulimgBox) closeimg();
});

// Navegar con las teclas del teclado
document.addEventListener("keydown", (e) => {
    if (fulimgBox.style.display !== "flex") return;
    if (e.key === "ArrowRight") changeImg(1);
    if (e.key === "ArrowLeft")  changeImg(-1);
    if (e.key === "Escape")     closeimg();
});
