// index.js

document.addEventListener("DOMContentLoaded", () => {
    // create the sky and clouds
    const skies = document.querySelectorAll(".sky");
    const skyWrapper = document.getElementById("sky-wrapper");
    const pageHeight = document.body.scrollHeight;
    skyWrapper.style.height = `${pageHeight + 300}px`;

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


    // create the floating country banners
    const countryBanners = document.querySelectorAll(".country-banner");
    const countryWrappers = document.querySelectorAll(".country-wrapper");
    countryWrappers.forEach(countryBanner => {
        const sectionHeight = countryBanner.parentElement.offsetHeight;
        countryBanner.style.height = `${sectionHeight}px`;
    });

    function createCountryBanners(countryBanner) {
        const countryIcon = document.createElement("img");

        const randomSize = getRndInteger(25, 100);
        countryIcon.style.width = randomSize + "px";
        countryIcon.style.opacity = "50%";

        const randomTransformX = getRndInteger(-1000, 1000);
        const randomTransformY = getRndInteger(0, 0);

        countryIcon.style.transform = `translateX(${randomTransformX}px) translateY(${randomTransformY}px)`;

        if (countryBanner.parentElement.id == "japan") {
            countryIcon.src = "assets/cherry-blossom-2.png";
        } else if (countryBanner.parentElement.id == "france") {
            countryIcon.src = "assets/croissant.png";
        } else if (countryBanner.parentElement.id == "italy") {
            countryIcon.src = "assets/tiramisu-emoji.webp";
        }
        
        countryBanner.append(countryIcon);
        countryIcon.classList.add("countryIcon");
    }

    const numBannerImages = 100; // this is the number of cherry blossoms/baguettes/tiramisu

    countryBanners.forEach(countryBanner => {
        for (let i = 0; i < numBannerImages; i++) {
            createCountryBanners(countryBanner);
        }
    });
})

