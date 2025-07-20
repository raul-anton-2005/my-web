// lang-certificates.js - Selector de idioma y traducción para certificates.html
window.addEventListener('DOMContentLoaded', function() {
    const translations = {
        es: {
            title: 'Certificados - Raúl Antón Echevarría',
            h1: 'Certificados',
            section: '✉️ Certificados',
            desc: 'En esta sección encontrarás los certificados de mis cursos y logros académicos.'
        },
        en: {
            title: 'Certificates - Raúl Antón Echevarría',
            h1: 'Certificates',
            section: '✉️ Certificates',
            desc: 'In this section you will find the certificates of my courses and academic achievements.'
        }
    };

    function setLang(lang) {
        document.title = translations[lang].title;
        document.querySelector('h1').textContent = translations[lang].h1;
        document.querySelector('h2').textContent = translations[lang].section;
        document.querySelector('section p').textContent = translations[lang].desc;
        
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
            dropdown.style.display = 'none';
        });
    });

    // Idioma inicial persistente y bandera dinámica
    const savedLang = localStorage.getItem('lang') || 'es';
    setLang(savedLang);
});
