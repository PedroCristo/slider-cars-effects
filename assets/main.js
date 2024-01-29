// Get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

// Selecting the main slider container and its elements
let sliderDom = document.querySelector('.slider');
let sliderItemsDom = sliderDom.querySelector('.list');
let thumbnailBorderDom = document.querySelector('.slider .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.slider .time');

// Move the first thumbnail to the end for a seamless transition
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Set time intervals for animation and auto-advance
let timeRunning = 0;
let timeAutoNext = 14000;

// Handle next button click
nextDom.onclick = function() {
    showSlider('next');
};

// Handle prev button click
prevDom.onclick = function() {
    showSlider('prev');
};

// Initialize timeout variables
let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

// Function to show the slider based on the type (next or prev)
function showSlider(type) {
    // Selecting the slider items and thumbnail items dynamically
    let sliderItems = sliderItemsDom.querySelectorAll('.item');
    let thumbnailItems = document.querySelectorAll('.slider .thumbnail .item');

    if (type === 'next') {
        // Move the first item to the end for a seamless transition
        sliderItemsDom.appendChild(sliderItems[0]);
        thumbnailBorderDom.appendChild(thumbnailItems[0]);
        sliderDom.classList.add('next'); // Apply 'next' class for animation
    } else {
        // Move the last item to the beginning for a seamless transition
        sliderItemsDom.prepend(sliderItems[sliderItems.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItems[thumbnailItems.length - 1]);
        sliderDom.classList.add('prev'); // Apply 'prev' class for animation
    }

    // Clear timeout for previous animation
    clearTimeout(runTimeOut);
    // Set timeout to remove animation class after animation duration
    runTimeOut = setTimeout(() => {
        sliderDom.classList.remove('next');
        sliderDom.classList.remove('prev');
    }, timeRunning);

    // Clear timeout for previous auto-advance
    clearTimeout(runNextAuto);
    // Set timeout for auto-advance to next slide
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}
