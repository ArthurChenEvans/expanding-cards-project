"use strict";

const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('click', () => {
        images.forEach(image => {
            if(image.classList.contains('active')) {
                image.classList.remove('active');
            };
        })
        image.classList.toggle('active');
    })
})