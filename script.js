var slideIndex = 1;

function moveSlider(direction) {
    showImg(slideIndex += direction);
};

function showImg(index) {
    const slider = document.querySelectorAll('.slider');
    
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

const search = document.querySelector(".nav__search");
const searchIcon = document.querySelector(".search-icon");
const closeIcon = document.querySelector(".close-icon");

searchIcon.onclick = () => {
    search.classList.add("active");
};

closeIcon.onclick = () => {
    search.classList.remove("active");
};


const gradient = document.querySelector(".gradient");
const loadMore = document.querySelector(".projects__button");

loadMore.onclick = () => {

    if (loadMore.classList.contains("loaded")) {
        gradient.classList.remove("loaded");
        loadMore.classList.remove("loaded");
        loadMore.innerHTML = "Rozwiń";
    } else {
        gradient.classList.add("loaded");
        loadMore.classList.add("loaded");
        loadMore.innerHTML = "Zwiń";
    }
};
