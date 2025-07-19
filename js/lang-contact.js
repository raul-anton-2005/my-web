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
    }

    // Selector de idioma
    const langSelector = document.createElement('div');
    langSelector.className = 'lang-selector';
    langSelector.innerHTML = `
        <button id="lang-btn" aria-label="Idioma" style="background:transparent;border:none;cursor:pointer;display:flex;align-items:center;gap:0.3em;">
            <img src="imgs/spain.svg" alt="Español" id="flag-current" style="width:24px;height:24px;vertical-align:middle;">
            <img src="imgs/bottom.svg" alt="Abrir selector" style="width:18px;height:18px;vertical-align:middle;">
        </button>
        <div id="lang-dropdown" style="display:none;position:absolute;top:36px;right:0;background:#232526;border-radius:8px;box-shadow:0 2px 8px 0 rgba(0,0,0,0.13);padding:0.5em 0;z-index:1000;">
            <button class="lang-option" data-lang="es" style="background:none;border:none;display:flex;align-items:center;gap:0.5em;padding:0.5em 1.2em;width:100%;cursor:pointer;">
                <img src="imgs/spain.svg" alt="Español" style="width:22px;height:22px;"> Español
            </button>
            <button class="lang-option" data-lang="en" style="background:none;border:none;display:flex;align-items:center;gap:0.5em;padding:0.5em 1.2em;width:100%;cursor:pointer;">
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

    // Añadir id al botón volver si no existe
    const volverBtn = document.querySelector('a.btn[href="index.html"]');
    if (volverBtn && !volverBtn.id) volverBtn.id = 'volver-inicio';

    // Idioma inicial
    setLang('es');
});
