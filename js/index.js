// index.js

document.addEventListener("DOMContentLoaded", () => {
    const skies = document.querySelectorAll(".sky");
    const skyWrapper = document.getElementById("sky-wrapper");
    const pageHeight = document.body.scrollHeight;
    skyWrapper.style.height = `${pageHeight + 20}px`;

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }

    function createClouds(sky) {
        sky.style.height = `${pageHeight}px`;

        const cloud = document.createElement("img");

        const randomSize = getRndInteger(600, 1200);
        cloud.style.width = randomSize + "px";
        cloud.style.opacity = "50%";

        const randomTransformX = getRndInteger(-500, 500);
        const randomTransformY = getRndInteger(-500, 500);

        cloud.style.transform = `translateX(${randomTransformX}px) translateY(${randomTransformY}px)`;
        cloud.src = "assets/cloud.png";
        sky.append(cloud);
        cloud.classList.add("cloud");
    }

    const cloudWidth = 600;
    const pageWidth = window.innerWidth;
    const numCloudsX = Math.ceil(pageWidth / cloudWidth);

    const cloudHeight = 200;
    const numCloudsY = Math.ceil(pageHeight / cloudHeight); 

    const numClouds = numCloudsX * numCloudsY * 3;

    skies.forEach(sky => {
        for (let i = 0; i < numClouds; i++) {
            createClouds(sky);
        }
    });

})

