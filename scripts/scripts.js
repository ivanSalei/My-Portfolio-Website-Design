// INITIALIZE THE PAGE
document.addEventListener("DOMContentLoaded", function () {
    // ========================
    // MOBILE MENU TOGGLE
    // ========================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // CLOSE MENU WHEN LINK IS CLICKED
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });

    // ========================
    // TEXT TYPING EFFECT
    // ========================
    const texts = ['Frontend Developer', 'UI/UX Designer', 'Sass / SCSS',];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function type() {
        const typingElement = document.querySelector('.typing-text');
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }

        // Зміна стану: коли текст повністю надрукований або стертий
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingDelay = 1000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingDelay = 500;
        }

        setTimeout(type, typingDelay);
    }

    // START TYPING EFFECT
    setTimeout(type, 1000);

    // ========================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ========================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
