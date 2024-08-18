// VAR DECLARATION
let prevSlide = document.getElementById("prev-btn");
let nextSlide = document.getElementById("next-btn");
let slides = document.querySelectorAll(".slide");
let curSlide = 0;
let maxSlide = slides.length - 1;

let currentPage = Number(document.getElementById("current-page").innerText);

nextSlide.addEventListener("click", newPage);
prevSlide.addEventListener("click", backPage);

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

function newPage() {
  if (currentPage == 9) {
    currentPage = 1;
    console.log(currentPage);
    document.getElementById("current-page").innerText = currentPage;
  } else {
    currentPage += 1;
    document.getElementById("current-page").innerText = currentPage;
    console.log(currentPage);
  }
}

function backPage() {
  if (currentPage >= 2) {
    currentPage -= 1;
    document.getElementById("current-page").innerText = currentPage;
    console.log(currentPage);
  } else if (currentPage == 1) {
    currentPage = 9;
    document.getElementById("current-page").innerText = currentPage;
    console.log(currentPage);
  }
}
