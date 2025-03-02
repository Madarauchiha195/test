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
        src: 'project-imgs/The IittIe Ranch/AQNmgbf7PsiIIg2BNAQBo36-01hc6bUziTKClnb_yHAKznxbLnZzA7uFEKqPSql8o_sCgghOqyFf448AO70xcUx-vZZc_eB4Jb37p_4.mp4'
    },
    {
        type: 'image',
        src: 'project-imgs/The IittIe Ranch/361213580_659676392717382_6488921438890797564_n.heic'
    },
    {
        type: 'image',
        src: 'project-imgs/The IittIe Ranch/329422439_2512375865578599_7753247896291908244_n.webp'
    },
    {
        type: 'image',
        src: 'project-imgs/The IittIe Ranch/397249105_314042904705967_3386582813618464183_n.heic'
    },
    {
        type: 'image',
        src: 'project-imgs/The IittIe Ranch/347508853_638886471435701_4822913216978123539_n.heic'
    },
    {
        type: 'image',
        src: 'project-imgs/The IittIe Ranch/329652016_593685849272691_4049539696593081420_n.webp'
    },
    {
        type: 'image',
        src: 'project-imgs/The IittIe Ranch/329597840_1568283496974129_6901943930295002795_n.webp'
    },
    {
        type: 'image',
        src: 'project-imgs/The IittIe Ranch/329802126_1256414154907801_6814316001648736990_n.webp'
    },
    {
        type: 'image',
        src: 'project-imgs/The IittIe Ranch/243165062_385291129730646_3012421406898822053_n.jpg'
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
