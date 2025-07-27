// lang-contact.js - Selector de idioma y traducción para contact.html
window.addEventListener('DOMContentLoaded', function() {
    const translations = {
        es: {
            title: 'Contacto - Raúl Antón Echevarría',
            h1: 'Contacto',
            section: '✉️ Envíame un mensaje',
            nombre: 'Tu nombre',
            email: 'Tu email',
            asunto: 'Asunto',
            mensaje: 'Escribe tu mensaje...',
            enviar: 'Enviar mensaje',
            volver: 'Volver al inicio'
        },
        en: {
            title: 'Contact - Raúl Antón Echevarría',
            h1: 'Contact',
            section: '✉️ Send me a message',
            nombre: 'Your name',
            email: 'Your email',
            asunto: 'Subject',
            mensaje: 'Write your message...',
            enviar: 'Send message',
            volver: 'Back to home'
        }
    };

    function setLang(lang) {
        document.title = translations[lang].title;
        document.querySelector('h1').textContent = translations[lang].h1;
        document.querySelector('h2').textContent = translations[lang].section;
        document.querySelector('input[name="nombre"]').placeholder = translations[lang].nombre;
        document.querySelector('input[name="email"]').placeholder = translations[lang].email;
        document.querySelector('input[name="asunto"]').placeholder = translations[lang].asunto;
        document.querySelector('textarea[name="mensaje"]').placeholder = translations[lang].mensaje;
        document.querySelector('button[type="submit"]').textContent = translations[lang].enviar;
        document.getElementById('volver-inicio').textContent = translations[lang].volver;

        localStorage.setItem('lang', lang);
        const flag = document.getElementById('flag-current');
        const btn = document.querySelector('.lang-option[data-lang="' + lang + '"] img');
        if (flag && btn && btn.src) flag.src = btn.src;
    }

    // Selector de idioma
    const langSelector = document.createElement('div');
    langSelector.className = 'lang-selector';
    langSelector.innerHTML = `
        <button id="lang-btn" aria-label="Idioma" class="lang-toggle-btn">
            <img src="imgs/spain.svg" alt="Español" id="flag-current">
            <img src="imgs/bottom.svg" alt="Abrir selector">
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
