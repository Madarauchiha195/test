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
        src: 'project-imgs/Grease Moto cIub/AQMW7g2dhQE-dNiBCXsbq2qjMJN0bG_rAHmG0UKb5SkNSqg0gafNKFLEsspnV5zeytfQwfxftfiZ-IispC4l4g828upepUiHk-MJzAk.mp4'
    },
    {
        type: 'image',
        src: 'project-imgs/Grease Moto cIub/471797439_18481297681013051_2061787511388494591_n.jpg'
    },
    {
        type: 'image',
        src: 'project-imgs/Grease Moto cIub/347137332_10226757239829799_8247206074880312649_n.jpg'
    },
    {
        type: 'image',
        src: 'project-imgs/Grease Moto cIub/324382947_687909226140842_6623677762378691877_n.webp'
    },
    {
        type: 'image',
        src: 'project-imgs/Grease Moto cIub/346637288_10226757236429714_3320660346899832256_n.jpg'
    },
    {
        type: 'image',
        src: 'project-imgs/Grease Moto cIub/346827557_10226757235109681_772488850861123248_n.jpg'
    },
    {
        type: 'image',
        src: 'project-imgs/Grease Moto cIub/348698157_10226757237669745_704289930060824063_n.jpg'
    },
    {
        type: 'image',
        src: 'project-imgs/Grease Moto cIub/347422508_10226757235709696_1144614375486113376_n.jpg'
    },
    {
        type: 'image',
        src: 'project-imgs/Grease Moto cIub/351498220_10226757240709821_5308693757199956237_n.jpg'
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
        img.style.transform = 'scale(1)'; // Initial scale
        img.style.transition = 'transform 0.3s ease'; // Smooth zoom
        mainImage.appendChild(img);
        
        // Add wheel event listener for zoom
        mainImage.addEventListener('wheel', handleZoom);
    }
    
    lightbox.style.display = 'block';
    updateCounter();
    document.body.style.overflow = 'hidden';
}

// Add this new function for handling zoom
function handleZoom(e) {
    e.preventDefault();
    const img = document.querySelector('.main-image img');
    if (!img) return; // Only proceed if there's an image
    
    const currentScale = parseFloat(img.style.transform.replace('scale(', '').replace(')', '')) || 1;
    const delta = e.deltaY * -0.01;
    const newScale = Math.min(Math.max(currentScale + delta, 1), 3); // Limit zoom between 1x and 3x
    
    img.style.transform = `scale(${newScale})`;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Remove zoom event listener
    const mainImage = document.querySelector('.main-image');
    mainImage.removeEventListener('wheel', handleZoom);
    
    // Reset zoom level
    const img = mainImage.querySelector('img');
    if (img) {
        img.style.transform = 'scale(1)';
    }
    
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
