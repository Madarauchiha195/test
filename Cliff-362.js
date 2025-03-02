document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", (event) => {
            // Close all dropdown menus
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    const otherDropdownMenu = otherToggle.nextElementSibling;
                    otherDropdownMenu.style.display = "none";
                }
            });

            // Toggle the clicked dropdown menu
            const dropdownMenu = toggle.nextElementSibling;
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
            event.stopPropagation();
        });
    });

    document.addEventListener("click", () => {
        dropdownToggles.forEach(toggle => {
            const dropdownMenu = toggle.nextElementSibling;
            dropdownMenu.style.display = "none";
        });
    });
});

// Update the images array to include both image and video sources
const items = [
    {
        type: 'video',
        src: 'project-imgs/CIiff 362/AQMLkzzAh5JsJ2ZUQC4Nnby0MRUq0BsUyC3e26t_vMcR7T4o0IVJBR7gSAQKDfUdCgkHpwLZsVep6icNhdWKorQi3FbKThsE6-gzndw.mp4'
    },
    {
        type: 'image',
        src: 'project-imgs/CIiff 362/409824615_328294029984751_1370105412647420518_n.jpg'
    },
    {
        type: 'image',
        src: 'project-imgs/CIiff 362/410042224_695837315947227_4728071947671031967_n.jpg'
    },
    {
        type: 'image',
        src: 'project-imgs/CIiff 362/409414507_727883782536945_735787926516403156_n.jpg'
    },
    {
        type: 'image',
        src: 'project-imgs/CIiff 362/312234557_196658799501421_2915166851069193267_n.jpg'
    },
    {
        type: 'image',
        src: 'project-imgs/CIiff 362/409586354_361015406609013_6061361375106009281_n.jpg'
    },
    {
        type: 'image',
        src: 'project-imgs/CIiff 362/408909048_347711261237370_8017409011125620934_n.jpg'
    },
    {
        type: 'image',
        src: 'project-imgs/CIiff 362/409191881_1035604317659295_8439768719110448268_n.jpg'
    },
    {
        type: 'image',
        src: 'project-imgs/CIiff 362/409408645_752348533579959_6199909160850834571_n.jpg'
    },
    // Add more images as needed
];

let currentIndex = 0;

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const mainImage = document.querySelector('.main-image');
    currentIndex = index;
    
    // Clear previous content
    mainImage.innerHTML = '';
    
    if (items[currentIndex].type === 'video') {
        const video = document.createElement('video');
        video.src = items[currentIndex].src;
        video.autoplay = true;
        video.loop = true;
        video.muted = false; // Video unmuted in lightbox
        video.controls = true;
        mainImage.appendChild(video);
    } else {
        const img = document.createElement('img');
        img.src = items[currentIndex].src;
        img.alt = 'Lightbox image';
        mainImage.appendChild(img);
    }
    
    lightbox.style.display = 'block';
    updateCounter();
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Find the gallery video and mute it
    const galleryVideo = document.querySelector('.gallery-item video');
    if (galleryVideo) {
        galleryVideo.muted = true;
    }
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + items.length) % items.length;
    openLightbox(currentIndex);
}

function updateCounter() {
    const counter = document.querySelector('.counter');
    counter.textContent = `${currentIndex + 1} / ${items.length}`;
}

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (document.getElementById('lightbox').style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navList = document.querySelector(".nav-list");

    // Toggle Hamburger Menu
    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        navList.classList.toggle("active");
    });

    // Close menu when clicking a link
    navList.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburgerMenu.classList.remove("active");
            navList.classList.remove("active");
        });
    });
});
