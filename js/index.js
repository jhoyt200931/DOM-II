// Your code goes here
const busImg = document.querySelector(".intro img");
busImg.addEventListener("mouseover", () => {
    busImg.style.transform = "scale(0.8)";
    busImg.style.transition = "all 0.5s";
});

busImg.addEventListener("mouseout", () => {
    busImg.style.transform = "scale(1.0)";
});

const body = document.querySelector("body");
body.addEventListener("click", () => {
    body.style.backgroundColor = "papayawhip";
})

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
    element.addEventListener("mouseleave", () => {
        element.style.color = "black";
    });
})

const photos = document.querySelectorAll(".img-content");
photos.forEach(element => {
    element.addEventListener("mousedown", () => {
        element.style.transform = "rotate(90deg)";
      
    });
    element.addEventListener("click", (event) => {
        element.style.transform = "rotate(180deg)";
        event.stopPropagation();
    });
    element.addEventListener("drag", () => {
        element.style.transform = "scale(1.5)";
        element.style.transition = "all 1s"
    });
    element.addEventListener("dragend", () => {
        element.style.transform = "scale(1.0)";
    });
});

const destinationImg = document.querySelector(".content-destination img");
destinationImg.addEventListener("mousemove", () => {
    destinationImg.style.transform = "scale(0.8)";
    destinationImg.style.transform = "all 0.3s";
})
destinationImg.addEventListener("mouseleave", () => {
    destinationImg.style.transform = "scale(1.0)";
});

const links = document.querySelectorAll("a");
links.addEventListner("click", () => {
    links.preventDefault();
})