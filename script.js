document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("[data-header]");
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");
    const navigationLinks = [...document.querySelectorAll(".navigation a[href^='#']")];
    const sections = [...document.querySelectorAll("main section[id]")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const closeMenu = () => {
        if (!menuButton || !navigation) return;
        menuButton.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
        document.body.classList.remove("menu-open");
        menuButton.querySelector(".sr-only").textContent = "Ouvrir le menu";
    };

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            const isOpen = menuButton.getAttribute("aria-expanded") === "true";
            menuButton.setAttribute("aria-expanded", String(!isOpen));
            navigation.classList.toggle("is-open", !isOpen);
            document.body.classList.toggle("menu-open", !isOpen);
            menuButton.querySelector(".sr-only").textContent = isOpen ? "Ouvrir le menu" : "Fermer le menu";
        });

        navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));

        window.addEventListener("resize", () => {
            if (window.innerWidth > 820) closeMenu();
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
                closeMenu();
                menuButton.focus();
            }
        });
    }

    const updateHeader = () => {
        header?.classList.toggle("is-scrolled", window.scrollY > 16);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    if (!reduceMotion && "IntersectionObserver" in window) {
        document.documentElement.classList.add("reveal-ready");

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -45px" });

        document.querySelectorAll("[data-reveal]").forEach((element, index) => {
            element.style.transitionDelay = `${Math.min(index % 3, 2) * 65}ms`;
            revealObserver.observe(element);
        });
    }

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navigationLinks.forEach((link) => {
                    const target = link.getAttribute("href")?.slice(1);
                    link.classList.toggle("is-active", target === entry.target.id);
                });
            });
        }, { rootMargin: "-35% 0px -55%", threshold: 0 });

        sections.forEach((section) => sectionObserver.observe(section));
    }

    const year = document.querySelector("[data-year]");
    if (year) year.textContent = String(new Date().getFullYear());
});
