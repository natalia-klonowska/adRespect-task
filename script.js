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
const loadMore = document.querySelector(".load-button");
const projectSection = document.querySelector(".projects");

loadMore.onclick = () => {

    if (loadMore.classList.contains("loaded")) {
        loadMore.classList.remove("loaded");
        document.querySelector(".load-button div").innerHTML = "Rozwiń";
        projectSection.style.paddingBottom = "2px";
        gradient.style.height = "55%"
        loadMore.style.bottom = "90px"
    } else {
        loadMore.classList.add("loaded");
        document.querySelector(".load-button div").innerHTML = "Zwiń";
        projectSection.style.paddingBottom = "90px";
        gradient.style.height = "0px"
        loadMore.style.bottom = "44px"
    }
};


const popup = document.querySelector(".popup");

function closePopup() {
  popup.style.display = "none";
}

document.querySelectorAll(".photo").forEach(image => {
    image.onclick = () => {
        popup.style.display = "block";
        document.querySelector(".popup-photo").src = image.getAttribute('src');
    }
})