// Amazon homepage JS
document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality
    let slideIndex = 1;
    let slideInterval;

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }

    function startSlideShow() {
        slideInterval = setInterval(() => {
            changeSlide(1);
        }, 5000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Initialize slideshow
    showSlides(slideIndex);
    startSlideShow();

    // Slideshow controls
    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });

    // Pause slideshow on hover
    const slideContainer = document.querySelector('.slide-container');
    slideContainer.addEventListener('mouseenter', stopSlideShow);
    slideContainer.addEventListener('mouseleave', startSlideShow);

    // Search functionality
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Searching for: ${query}`);
            }
        }
    });

    // Today's Deals slider
    const dealsContainer = document.querySelector('.deals-container');
    const prevDealBtn = document.querySelector('.prev-deal');
    const nextDealBtn = document.querySelector('.next-deal');
    let scrollAmount = 200;

    prevDealBtn.addEventListener('click', () => {
        dealsContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextDealBtn.addEventListener('click', () => {
        dealsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Back to top functionality
    const backToTop = document.querySelector('.back-to-top');
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Cart counter functionality (demo)
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.includes('Add to Cart')) {
            button.addEventListener('click', () => {
                count++;
                cartCount.textContent = count;
                button.style.background = '#F7CA00';
                setTimeout(() => {
                    button.style.background = '#FFD814';
                }, 200);
            });
        }
    });
});
