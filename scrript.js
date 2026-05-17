const slides = document.querySelector(".slides");

let index = 0;

setInterval(() => {

    index++;

    slides.style.transition = "transform 1s ease-in-out";

    slides.style.transform = `translateX(-${index * 20}%)`;

    // khi tới ảnh clone
    if(index === 4){

        setTimeout(() => {

            slides.style.transition = "none";

            index = 0;

            slides.style.transform = `translateX(0%)`;

        }, 1000);

    }

}, 3000);