// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlight
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-btn');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Scroll event listener
window.addEventListener('scroll', updateActiveNav);

// Button interactions
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Contact button functionality
document.querySelectorAll('.btn.primary').forEach(btn => {
    if (btn.textContent.includes('Contact')) {
        btn.addEventListener('click', function() {
            // You can replace this with actual contact functionality
            alert('Contact functionality would be implemented here (email, form, etc.)');
        });
    }
});

// Download Resume button
document.querySelectorAll('.btn.secondary').forEach(btn => {
    if (btn.textContent.includes('Download Resume')) {
        btn.addEventListener('click', function() {
            // You can replace this with actual resume download
            alert('Resume download would be implemented here');
        });
    }
});

// Social media links
document.querySelector('.linkedin-btn')?.addEventListener('click', function() {
    window.open('https://linkedin.com/', '_blank');
});

document.querySelector('.github-btn')?.addEventListener('click', function() {
    window.open('https://github.com/', '_blank');
});

document.querySelector('.behance-btn')?.addEventListener('click', function() {
    window.open('https://behance.net/', '_blank');
});

// Skills section animation on scroll
function animateSkills() {
    const skillsSection = document.querySelector('.skills');
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// Initialize skills animation
skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
});

animateSkills();

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroGlow = document.querySelector('.hero-glow');
    if (heroGlow) {
        heroGlow.style.transform = `translateX(-50%) translateY(${scrolled * 0.5}px)`;
    }
});

// Card hover effects
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 30px 60px rgba(0, 255, 136, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            if (text.charAt(i) === '<') {
                let tagEnd = text.indexOf('>', i);
                element.innerHTML += text.substring(i, tagEnd + 1);
                i = tagEnd + 1;
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth reveal animation to elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
    
    // Set home as active initially
    document.querySelector('.nav-btn[href="#home"]')?.classList.add('active');
});

// Navbar background opacity on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.pageYOffset;
    
    if (scrolled > 50) {
        navbar.style.background = 'rgba(45, 45, 45, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(45, 45, 45, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// Mobile menu toggle (if needed for smaller screens)
function toggleMobileMenu() {
    const navRight = document.querySelector('.nav-right');
    navRight.classList.toggle('mobile-active');
}

// Add mobile menu styles dynamically for very small screens
if (window.innerWidth < 480) {
    const style = document.createElement('style');
    style.textContent = `
        .nav-right {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(45, 45, 45, 0.95);
            flex-direction: column;
            padding: 20px;
            border-radius: 0 0 20px 20px;
        }
        
        .nav-right.mobile-active {
            display: flex;
        }
        
        .mobile-menu-btn {
            display: block;
            background: none;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);
}