// index.js

document.addEventListener("DOMContentLoaded", () => {
    const sky = document.getElementById("sky");
    if (!sky) {
        console.error("sky element not found!");
        return; 
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

    function createClouds() {
        const cloud = document.createElement("img");
        // const randomSize = getRndInteger(600, 1000);
        // cloud.style.width = randomSize + "px";
        const randomSize = getRndInteger(600, 1000);
        cloud.style.width = randomSize + "px";

        const randomTransform = getRndInteger(-100, 100);
        cloud.style.transform = `translateX(${randomTransform}px)`;
        cloud.src = "../assets/cloud.png";
        sky.append(cloud);
        cloud.classList.add("cloud");
    }



    const numClouds = 50;
    for (let i = 0; i < numClouds; i++) {
        createClouds();
    }
    
})

