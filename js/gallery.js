// set the index to the start of the list
index = 0;
// list of all gallery images
images = ["castoria ascension 1", "castoria ascension 2", "castoria ascension 3",
    "morgan ascension 1", "morgan ascension 2", "morgan ascension 3", "morgan costume",
    "merlin ascension 1", "merlin ascension 2", "merlin ascension 3", "merlin costume 2", "merlin costume",
    "spishtar ascension 1", "spishtar ascension 2", "spishtar ascension 3", "spishtar costume",
    "bazett ascension 1", "bazett ascension 2", "bazett ascension 3",
    "skadi ascension 1", "skadi ascension 2", "skadi ascension 3"]
// function to display the next image in the list
function nextImage() {
    // goes to the next image if the index is not at the last image in the list
    if (index < (images.length - 1)) {
        index ++;
    }
    // goes back to the first image if at the last image in the list
    else {
        index = 0;
    }
    // changes the old image to the next one
    document.getElementById("gallery-media").src = "images/gallery/" + images[index] + ".webp"
    // shows what number image you're on
    document.getElementById("gallery-text").innerHTML = (index + 1) + "/22"
}

// function to display the last image in the list
function lastImage() {
    // goes to the last image if not at the first image in the list
    if (index > 0) {
        index--;
    // if at the first image of the list, go to the final image in the list
    } else {
        index = images.length - 1;
    }
    // changes the old image to the last one
    document.getElementById("gallery-media").src = "images/gallery/" + images[index] + ".webp";
    document.getElementById("gallery-text").innerHTML = (index + 1) + "/22";
}