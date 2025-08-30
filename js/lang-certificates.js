// lang-certificates.js - Selector de idioma y traducción para certificates.html
window.addEventListener('DOMContentLoaded', function() {
    const translations = {
        es: {
            title: 'Certificados - Raúl Antón Echevarría',
            h1: 'Certificados',
            section: '✉️ Certificados',
            desc: 'En esta sección encontrarás los certificados de mis cursos y logros académicos.',
            captions: [
                'C1 de Inglés',
                'C1 de Valenciano',
                'Título de Android Studio'
            ]
        },
        en: {
            title: 'Certificates - Raúl Antón Echevarría',
            h1: 'Certificates',
            section: '✉️ Certificates',
            desc: 'In this section you will find the certificates of my courses and academic achievements.',
            captions: [
                'English C1 Certificate',
                'Valencian C1 Certificate',
                'Android Studio Certificate'
            ]
        }
    };

    function setLang(lang) {
        document.title = translations[lang].title;
        document.querySelector('h1').textContent = translations[lang].h1;
        document.querySelector('h2').textContent = translations[lang].section;
        document.querySelector('section p').textContent = translations[lang].desc;
        // Traducir captions del carrusel
        var captions = document.querySelectorAll('.slideshow-container .mySlides .text');
        translations[lang].captions.forEach(function(txt, i) {
            if (captions[i]) captions[i].textContent = txt;
        });

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
            <img src="imgs/bottom.svg" alt="Abrir selector" id="lang-arrow" style="width:24px;height:24px;vertical-align:middle;transition:opacity 0.18s;opacity:1;">
        </button>
        <div id="lang-dropdown" class="lang-dropdown">
            <button class="lang-option" data-lang="es">
                <img src="imgs/spain.svg" alt="Español"> Español
            </button>
            <button class="lang-option" data-lang="en">
                <img src="imgs/usa.svg" alt="English"> English
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
        const isOpen = dropdown.style.display === 'block';
        dropdown.style.display = isOpen ? 'none' : 'block';
            const arrow = langSelector.querySelector('#lang-arrow');
            if (arrow) {
                arrow.style.opacity = 0;
                setTimeout(function() {
                    arrow.src = isOpen ? 'imgs/bottom.svg' : 'imgs/up.svg';
                    arrow.style.opacity = 1;
                }, 120);
            }
    });
    document.addEventListener('click', function() {
        dropdown.style.display = 'none';
    });
    langSelector.querySelectorAll('.lang-option').forEach(function(opt) {
        opt.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLang(lang);
            dropdown.style.display = 'none';
                const arrow = langSelector.querySelector('#lang-arrow');
                if (arrow) {
                    arrow.style.opacity = 0;
                    setTimeout(function() {
                        arrow.src = 'imgs/bottom.svg';
                        arrow.style.opacity = 1;
                    }, 120);
                }
        });
    });

    // Idioma inicial persistente y bandera dinámica
    const savedLang = localStorage.getItem('lang') || 'es';
    setLang(savedLang);
});
