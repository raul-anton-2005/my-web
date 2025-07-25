// lang.js - Selector de idioma simple con banderas y traducción
window.addEventListener('DOMContentLoaded', function() {
    const translations = {
        es: {
            about: 'Sobre mí',
            aboutText: 'Estudiante de Inteligencia Robótica',
            aboutBtn: 'Ver más',
            projects: 'Proyectos',
            projectsText: 'Empire Attack, ROS2, IA...',
            projectsBtn: 'Ver más',
            contact: 'Contacto',
            contactText: 'Información de contacto',
            contactBtn: 'Ver más',
            title: 'Raúl Antón Echevarría',
            metaDesc: 'Portfolio de Raúl Antón Echevarría, estudiante de Inteligencia Robótica.'
        },
        en: {
            about: 'About me',
            aboutText: 'Robotic Intelligence student',
            aboutBtn: 'See more',
            projects: 'Projects',
            projectsText: 'Empire Attack, ROS2, AI...',
            projectsBtn: 'See more',
            contact: 'Contact',
            contactText: 'Contact information',
            contactBtn: 'See more',
            title: 'Raúl Antón Echevarría',
            metaDesc: 'Portfolio of Raúl Antón Echevarría, Robotic Intelligence student.'
        }
    };

    function setLang(lang) {
        document.querySelector('h2#about-title').textContent = translations[lang].about;
        document.querySelector('#about p').textContent = translations[lang].aboutText;
        document.querySelector('#about .btn').textContent = translations[lang].aboutBtn;
        document.querySelector('h2#projects-title').textContent = translations[lang].projects;
        document.querySelector('#projects p').textContent = translations[lang].projectsText;
        document.querySelector('#projects .btn').textContent = translations[lang].projectsBtn;
        document.querySelector('h2#contact-title').textContent = translations[lang].contact;
        document.querySelector('#contact p').textContent = translations[lang].contactText;
        document.querySelector('#contact .btn').textContent = translations[lang].contactBtn;
        document.title = translations[lang].title;
        document.querySelector('meta[name="description"]').setAttribute('content', translations[lang].metaDesc);

        localStorage.setItem('lang', lang);
        const flag = document.getElementById('flag-current');
        const btn = document.querySelector('.lang-option[data-lang="' + lang + '"] img');
        if (flag && btn && btn.src) flag.src = btn.src;
    }

    // Selector de idioma
    const langSelector = document.createElement('div');
    langSelector.className = 'lang-selector';
    langSelector.innerHTML = `
        <button id="lang-btn" aria-label="Idioma" style="background:transparent;border:none;cursor:pointer;display:flex;align-items:center;gap:0.3em;">
            <img src="imgs/spain.svg" alt="Español" id="flag-current" style="width:24px;height:24px;vertical-align:middle;">
            <img src="imgs/bottom.svg" alt="Abrir selector" style="width:18px;height:18px;vertical-align:middle;">
        </button>
        <div id="lang-dropdown" style="display:none;position:absolute;top:36px;right:0;background:#232526;border-radius:8px;box-shadow:0 2px 8px 0 rgba(255, 255, 255, 0.77);padding:0.5em 0;z-index:1000;">
        <button class="lang-option" data-lang="es" style="background:none;border:none;display:flex;align-items:center;gap:0.5em;padding:0.5em 1.2em;width:100%;cursor:pointer;color:#fff;">
            <img src="imgs/spain.svg" alt="Español" style="width:22px;height:22px;"> Español
        </button>
        <button class="lang-option" data-lang="en" style="background:none;border:none;display:flex;align-items:center;gap:0.5em;padding:0.5em 1.2em;width:100%;cursor:pointer;color:#fff;">
            <img src="imgs/usa.svg" alt="English" style="width:22px;height:22px;"> English
        </button>
        </div>
    `;
    document.body.appendChild(langSelector);
    langSelector.style.position = 'absolute';
    langSelector.style.top = '1.2rem';
    langSelector.style.right = '1.2rem';
    langSelector.style.zIndex = 2000;

    const btn = langSelector.querySelector('#lang-btn');
    const dropdown = langSelector.querySelector('#lang-dropdown');
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
    document.addEventListener('click', function() {
        dropdown.style.display = 'none';
    });
    langSelector.querySelectorAll('.lang-option').forEach(function(opt) {
        opt.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLang(lang);
            document.getElementById('flag-current').src = lang === 'es' ? 'imgs/spain.svg' : 'imgs/usa.svg';
            dropdown.style.display = 'none';
        });
    });

    // Idioma inicial persistente y bandera dinámica
    const savedLang = localStorage.getItem('lang') || 'es';
    setLang(savedLang);
});
