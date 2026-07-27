import { profile } from "./data/profile.js";

const escapeHtml = (value) =>
    String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

const renderTags = (items, label) => `
    <ul class="tag-list" aria-label="${escapeHtml(label)}">
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
`;

const renderExperiences = () =>
    profile.experiences
        .map(
            (experience, index) => `
                <article class="experience-card" data-reveal>
                    <div class="experience-index" aria-hidden="true">0${index + 1}</div>
                    <div class="experience-meta">
                        <p class="mono-label">${escapeHtml(experience.period)}</p>
                        <p>${escapeHtml(experience.place)}</p>
                    </div>
                    <div class="experience-heading">
                        <p>${escapeHtml(experience.company)}</p>
                        <h3>${escapeHtml(experience.role)}</h3>
                        ${
                            experience.context
                                ? `<p class="experience-context">${escapeHtml(experience.context)}</p>`
                                : ""
                        }
                    </div>
                    <div class="experience-content">
                        <ul class="impact-list">
                            ${experience.highlights
                                .map((highlight) => `<li>${escapeHtml(highlight)}</li>`)
                                .join("")}
                        </ul>
                        ${renderTags(
                            experience.technologies,
                            `Technologies utilisées chez ${experience.company}`,
                        )}
                    </div>
                </article>
            `,
        )
        .join("");

const renderSkills = () =>
    profile.skillGroups
        .map(
            (group, index) => `
                <article class="skill-group" data-reveal>
                    <div class="skill-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</div>
                    <h3>${escapeHtml(group.category)}</h3>
                    ${renderTags(group.items, `Compétences : ${group.category}`)}
                </article>
            `,
        )
        .join("");

const renderApproach = () =>
    profile.approach
        .map(
            (step, index) => `
                <li class="approach-step" data-reveal>
                    <span class="approach-number">${String(index + 1).padStart(2, "0")}</span>
                    <div>
                        <h3>${escapeHtml(step.title)}</h3>
                        <p>${escapeHtml(step.description)}</p>
                    </div>
                    <p class="approach-tools">${escapeHtml(step.tools)}</p>
                </li>
            `,
        )
        .join("");

const renderEducation = () =>
    profile.education
        .map(
            (education) => `
                <article class="education-card" data-reveal>
                    <p class="mono-label">${escapeHtml(education.period)}</p>
                    <h3>${escapeHtml(education.degree)}</h3>
                    <p class="education-school">${escapeHtml(education.school)}</p>
                    <p>${escapeHtml(education.place)}</p>
                </article>
            `,
        )
        .join("");

const renderContactLinks = () =>
    profile.links
        .map((link) => {
            const attributes = [
                link.external ? 'target="_blank" rel="noopener noreferrer"' : "",
                link.download ? "download" : "",
            ]
                .filter(Boolean)
                .join(" ");
            return `
                <a href="${escapeHtml(link.href)}" ${attributes}>
                    <span>${escapeHtml(link.label)}</span>
                    <span aria-hidden="true">${link.download ? "↓" : "↗"}</span>
                </a>
            `;
        })
        .join("");

const renderPortfolio = () => {
    const main = document.querySelector("main");
    if (!main) return;

    main.innerHTML = `
        <section class="hero" id="accueil" aria-labelledby="hero-title">
            <div class="shell">
                <div class="hero-kicker" data-reveal>
                    <span>Portfolio · 2026</span>
                    <span>${escapeHtml(profile.location)}</span>
                </div>

                <div class="hero-grid">
                    <div class="hero-copy">
                        <p class="availability" data-reveal><span aria-hidden="true"></span> Data · Cloud · Gouvernance</p>
                        <h1 id="hero-title" data-reveal>
                            <span>David</span>
                            <span>Delhaye</span>
                        </h1>
                        <p class="hero-role" data-reveal>${escapeHtml(profile.title)}</p>
                        <p class="hero-value" data-reveal>${escapeHtml(profile.valueProposition)}</p>
                        <div class="hero-buttons" data-reveal>
                            <a class="button button-solid" href="#parcours">
                                Voir mon parcours <span aria-hidden="true">↓</span>
                            </a>
                            <a class="button button-outline" href="${escapeHtml(profile.cv)}" target="_blank" rel="noopener">
                                Consulter le CV <span aria-hidden="true">↗</span>
                            </a>
                            <a class="text-link" href="mailto:${escapeHtml(profile.email)}">Me contacter ↗</a>
                        </div>
                    </div>

                    <div class="hero-visual" data-reveal>
                        <figure class="portrait">
                            <img src="assets/profile.jpeg" alt="Portrait de David Delhaye" width="724" height="1086">
                            <figcaption>${escapeHtml(profile.name)} · ${escapeHtml(profile.title)}</figcaption>
                        </figure>
                        <div class="data-map" aria-label="Flux data : sources, pipeline, gouvernance et usages métier">
                            <span class="map-label">Data flow / 01</span>
                            <div class="map-node map-node-source">Sources</div>
                            <div class="map-line map-line-a" aria-hidden="true"></div>
                            <div class="map-node map-node-pipeline">Pipelines</div>
                            <div class="map-line map-line-b" aria-hidden="true"></div>
                            <div class="map-node map-node-model">Modèles</div>
                            <div class="map-line map-line-c" aria-hidden="true"></div>
                            <div class="map-node map-node-use">Usages</div>
                            <span class="map-status"><i aria-hidden="true"></i> Fiable · maintenable · activable</span>
                        </div>
                    </div>
                </div>

                <div class="hero-metrics" data-reveal aria-label="Repères du parcours">
                    <div><strong>3</strong><span>Expériences data</span></div>
                    <div><strong>6+</strong><span>Années de parcours</span></div>
                    <div><strong>360°</strong><span>Engineering → BI</span></div>
                </div>
            </div>
        </section>

        <section class="profile section" id="profil" aria-labelledby="profile-title">
            <div class="shell section-grid">
                <div class="section-rail" data-reveal>
                    <span>01</span>
                    <p>Profil</p>
                </div>
                <div class="section-intro">
                    <p class="eyebrow" data-reveal>Concevoir · fiabiliser · automatiser</p>
                    <h2 id="profile-title" data-reveal>
                        De la donnée brute à un système
                        <em>utile et durable.</em>
                    </h2>
                </div>
                <div class="profile-copy" data-reveal>
                    ${profile.summary.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
                </div>
                <dl class="profile-facts" data-reveal>
                    <div><dt>Positionnement</dt><dd>${escapeHtml(profile.title)}</dd></div>
                    <div><dt>Base</dt><dd>${escapeHtml(profile.location)}</dd></div>
                    <div><dt>Langue</dt><dd>${escapeHtml(profile.language)}</dd></div>
                    <div><dt>Focus</dt><dd>Engineering · Gouvernance · BI</dd></div>
                </dl>
            </div>
        </section>

        <section class="skills section" id="expertises" aria-labelledby="skills-title">
            <div class="shell">
                <div class="section-heading">
                    <div class="section-rail" data-reveal><span>02</span><p>Expertises</p></div>
                    <div>
                        <p class="eyebrow" data-reveal>Stack technique issue du CV</p>
                        <h2 id="skills-title" data-reveal>Les bons outils,<br><em>au bon endroit.</em></h2>
                    </div>
                </div>
                <div class="skill-grid">${renderSkills()}</div>
            </div>
        </section>

        <section class="experience section" id="parcours" aria-labelledby="experience-title">
            <div class="shell">
                <div class="section-heading section-heading-light">
                    <div class="section-rail" data-reveal><span>03</span><p>Parcours</p></div>
                    <div>
                        <p class="eyebrow" data-reveal>Expériences professionnelles</p>
                        <h2 id="experience-title" data-reveal>Construire.<br><em>Industrialiser.</em></h2>
                    </div>
                </div>
                <div class="experience-list">${renderExperiences()}</div>
            </div>
        </section>

        <section class="projects section" id="projets" aria-labelledby="projects-title">
            <div class="shell section-grid">
                <div class="section-rail" data-reveal><span>04</span><p>Projets</p></div>
                <div class="section-intro">
                    <p class="eyebrow" data-reveal>Études de cas</p>
                    <h2 id="projects-title" data-reveal>Projets à<br><em>documenter.</em></h2>
                </div>
                <article class="project-placeholder" data-reveal>
                    <div class="placeholder-top">
                        <span class="status-pill">À compléter</span>
                        <span>Structure prête</span>
                    </div>
                    <p>
                        Le CV ne détaille pas de projet indépendant avec architecture, résultats
                        et liens publics. Cet espace est volontairement laissé prêt à accueillir
                        une future étude de cas sans inventer de réalisation.
                    </p>
                    <ul>
                        <li>Problème &amp; contexte métier</li>
                        <li>Architecture &amp; pipeline</li>
                        <li>Stack &amp; décisions techniques</li>
                        <li>Résultats &amp; liens</li>
                    </ul>
                </article>
            </div>
        </section>

        <section class="approach section" id="methode" aria-labelledby="approach-title">
            <div class="shell">
                <div class="section-heading">
                    <div class="section-rail" data-reveal><span>05</span><p>Méthode</p></div>
                    <div>
                        <p class="eyebrow" data-reveal>Du besoin métier à l’activation</p>
                        <h2 id="approach-title" data-reveal>Un flux pensé<br><em>de bout en bout.</em></h2>
                    </div>
                </div>
                <ol class="approach-list">${renderApproach()}</ol>
            </div>
        </section>

        <section class="education section" id="formation" aria-labelledby="education-title">
            <div class="shell section-grid">
                <div class="section-rail" data-reveal><span>06</span><p>Formation</p></div>
                <div class="section-intro">
                    <p class="eyebrow" data-reveal>Mathématiques · Big Data</p>
                    <h2 id="education-title" data-reveal>Fondations<br><em>solides.</em></h2>
                </div>
                <div class="education-list">${renderEducation()}</div>
                <p class="certification-note" data-reveal>
                    <span>Certifications</span>
                    Aucune certification n’est mentionnée dans le CV.
                </p>
            </div>
        </section>

        <section class="contact section" id="contact" aria-labelledby="contact-title">
            <div class="shell">
                <div class="contact-heading">
                    <div class="section-rail" data-reveal><span>07</span><p>Contact</p></div>
                    <p data-reveal>Un besoin data, une opportunité ou un sujet à structurer&nbsp;?</p>
                </div>
                <h2 id="contact-title" data-reveal>Parlons<br><em>données.</em></h2>
                <a class="contact-email" href="mailto:${escapeHtml(profile.email)}" data-reveal>
                    <span>${escapeHtml(profile.email)}</span>
                    <span aria-hidden="true">↗</span>
                </a>
                <div class="contact-grid" data-reveal>
                    <p>${escapeHtml(profile.location)} · ${escapeHtml(profile.language)}</p>
                    <a href="tel:${escapeHtml(profile.phone)}">${escapeHtml(profile.phoneDisplay)}</a>
                    <a href="${escapeHtml(profile.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                    <a href="${escapeHtml(profile.cv)}" download>Télécharger le CV ↓</a>
                </div>
            </div>
        </section>
    `;

    document.querySelector(".site-footer")?.remove();
    main.insertAdjacentHTML(
        "afterend",
        `
            <footer class="site-footer">
                <div class="shell footer-inner">
                    <p>© <span data-year></span> ${escapeHtml(profile.name)}</p>
                    <p>${escapeHtml(profile.title)} · ${escapeHtml(profile.location)}</p>
                    <div class="footer-links">${renderContactLinks()}</div>
                    <a class="back-to-top" href="#accueil">Retour en haut ↑</a>
                </div>
            </footer>
        `,
    );
};

const initializeTheme = () => {
    const toggle = document.querySelector("[data-theme-toggle]");
    const themeLabel = toggle?.querySelector(".theme-label");
    const themeColor = document.querySelector('meta[name="theme-color"]');

    const updateThemeUI = () => {
        const isDark = document.documentElement.dataset.theme === "dark";
        toggle?.setAttribute("aria-label", `Activer le thème ${isDark ? "clair" : "sombre"}`);
        if (themeLabel) themeLabel.textContent = isDark ? "Clair" : "Sombre";
        themeColor?.setAttribute("content", isDark ? "#0a0e14" : "#f2f0e9");
    };

    toggle?.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem("portfolio-theme", nextTheme);
        updateThemeUI();
    });

    updateThemeUI();
};

const initializeNavigation = () => {
    const header = document.querySelector("[data-header]");
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".navigation");
    const navigationLinks = [...document.querySelectorAll(".navigation a[href^='#']")];
    const sections = [...document.querySelectorAll("main section[id]")];

    const closeMenu = () => {
        if (!menuButton || !navigation) return;
        menuButton.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
        document.body.classList.remove("menu-open");
        const label = menuButton.querySelector(".sr-only");
        if (label) label.textContent = "Ouvrir le menu";
    };

    menuButton?.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        navigation?.classList.toggle("is-open", !isOpen);
        document.body.classList.toggle("menu-open", !isOpen);
        const label = menuButton.querySelector(".sr-only");
        if (label) label.textContent = isOpen ? "Ouvrir le menu" : "Fermer le menu";
    });

    navigationLinks.forEach((link) => link.addEventListener("click", closeMenu));
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
            closeMenu();
            menuButton.focus();
        }
    });

    const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    if ("IntersectionObserver" in window) {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    navigationLinks.forEach((link) => {
                        const target = link.getAttribute("href")?.slice(1);
                        link.classList.toggle("is-active", target === entry.target.id);
                    });
                });
            },
            { rootMargin: "-36% 0px -56%", threshold: 0 },
        );
        sections.forEach((section) => sectionObserver.observe(section));
    }
};

const initializeReveals = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll("[data-reveal]");
    if (reduceMotion || !("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    document.documentElement.classList.add("reveal-ready");
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px" },
    );

    elements.forEach((element, index) => {
        element.style.setProperty("--reveal-delay", `${Math.min(index % 3, 2) * 55}ms`);
        revealObserver.observe(element);
    });
};

renderPortfolio();
initializeTheme();
initializeNavigation();
initializeReveals();

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());
