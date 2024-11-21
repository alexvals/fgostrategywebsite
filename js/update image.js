imgs = ["cover wide", "cover tall"]
function updateImage() {
    if (window.innerHeight > window.innerWidth) {
        document.getElementById("index-img").src = "images/" + imgs[1] + ".webp";
    }
        else {
        document.getElementById("index-img").src = "images/" + imgs[0] + ".webp";
    }
}

updateImage();

window.addEventListener("resize", updateImage);