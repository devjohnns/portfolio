// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        navLinks.classList.remove('active');
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background Change on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Reveal Animations on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes to sections
document.querySelectorAll('.about-content, .skill-card, .project-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Add visible class styling
const style = document.createElement('style');
style.textContent = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// Add stagger delay to skill cards
document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Add stagger delay to project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

// Add stagger delay to contact items
document.querySelectorAll('.contact-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// Active Link Highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// Add active link style
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-links a.active {
        color: #2563eb;
    }
`;
document.head.appendChild(activeStyle);

// Console welcome message
console.log('%c👋 Welcome to John Maina\'s Portfolio!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cFull Stack Developer | HTML | CSS | JavaScript | React | Python', 'font-size: 14px; color: #6b7280;');

