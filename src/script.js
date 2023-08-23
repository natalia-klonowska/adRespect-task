var slideIndex = 1;

function moveSlider(direction) {
    showImg(slideIndex += direction);
};

function showImg(index) {
    const slider = document.querySelectorAll(".slider");
    
    if (index > slider.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = slider.length;
    }

    for (let i = 0; i < slider.length; i++) {
        if (i === slideIndex - 1) {
            slider[slideIndex-1].style.display = "block";
        } else {
            slider[i].style.display = "none";
        }
    }
};

showImg(slideIndex);


const search = document.querySelector(".search");
const searchIcon = document.querySelector(".search-open");
const closeIcon = document.querySelector(".search-close");

searchIcon.onclick = () => {
    search.classList.add("open");
};

closeIcon.onclick = () => {
    search.classList.remove("open");
};


const gradient = document.querySelector(".gradient");
const loadMore = document.querySelector(".projects__button");
const projectSection = document.querySelector(".projects");

loadMore.onclick = () => {

    if (loadMore.classList.contains("loaded")) {
        gradient.classList.remove("loaded");
        loadMore.classList.remove("loaded");
        projectSection.classList.remove("loaded");
        loadMore.innerHTML = "Rozwiń";
    } else {
        gradient.classList.add("loaded");
        loadMore.classList.add("loaded");
        projectSection.classList.add("loaded");
        loadMore.innerHTML = "Zwiń";
    }
};


const popup = document.querySelector(".popup");

function closePopup() {
  popup.classList.remove("open");
}

document.querySelectorAll(".projects__photo img").forEach(image => {
    image.onclick = () => {
        popup.classList.add("open");
        document.querySelector(".popup-photo img").src = image.getAttribute('src');
    }
})