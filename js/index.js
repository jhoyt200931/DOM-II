// Your code goes here
const busImg = document.querySelector(".intro img");
busImg.addEventListener("mouseover", () => {
    busImg.style.transform = "scale(0.8)";
    busImg.style.transition = "all 0.5s";
});

busImg.addEventListener("mouseout", () => {
    busImg.style.transform = "scale(1.0)";
});

const logo = document.querySelector(".logo-heading");
logo.addEventListener("dblclick", () => {
    logo.style.color = "red";
    logo.style.transform = "scale(1.5)";
});

const destination = document.querySelectorAll(".destination");
destination.forEach(element => {
    element.addEventListener("mouseenter", () => {
        element.style.color = "rebeccapurple";
    });
    element.addEventListener("mouseout", () => {
        element.style.color = "black";
    });
})