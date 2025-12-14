document.addEventListener('DOMContentLoaded', () => {

    // --- Navigation Mobile ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fermer le menu quand on clique sur un lien
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- Animations d'apparition (Scroll Observer) ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    // Éléments à animer
    const animatedElements = document.querySelectorAll('.hero-text, .hero-card, .solution-card, .step, .stack-block, .experience-card, .contact-card, .contact-form');

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease-out, transform 0.6s ease-out`;
        // Ajout d'un petit délai en cascade pour les groupes d'éléments
        if (el.classList.contains('skills-tag')) {
            el.style.transitionDelay = `${(index % 5) * 0.1}s`;
        }
        observer.observe(el);
    });

    // --- Navigation Fluide ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 100; // Ajusté pour le header fixe
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Formulaire de Contact ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = contactForm.querySelector('input[type="email"]').value;

            if (email && isValidEmail(email)) {
                showNotification('Message envoyé avec succès ! (Simulation)', 'success');
                contactForm.reset();
            } else {
                showNotification('Veuillez entrer une adresse email valide', 'error');
            }
        });
    }

    // --- Utilitaires ---
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Styles injectés dynamiquement pour la notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'success' ? '#10b981' : '#ef4444',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            fontFamily: 'var(--font-body)'
        });

        document.body.appendChild(notification);

        // Entrée
        setTimeout(() => notification.style.transform = 'translateX(0)', 100);

        // Sortie
        const removeNotification = () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        };

        notification.querySelector('.notification-close').addEventListener('click', removeNotification);
        setTimeout(removeNotification, 5000);
    }

    console.log('✨ Nouveau site freelance data chargé');
});
