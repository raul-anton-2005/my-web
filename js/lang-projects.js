// lang-projects.js - Selector de idioma y traducción para projects.html
window.addEventListener('DOMContentLoaded', function() {
    const translations = {
        es: {
            title: 'Proyectos - Raúl Antón Echevarría',
            h1: 'Proyectos',
            empire: '🚀 Empire Attack',
            empireDesc: 'Videojuego arcade desarrollado en Python utilizando la biblioteca Pygame, inspirado en el universo de Star Wars y diseñado para ofrecer una experiencia retro.',
            ros: '🤖 Proyectos de ROS2',
            rosDesc: 'Espacio de trabajo en ROS2 que agrupa diversos proyectos, incluyendo aplicaciones de robótica y simulaciones que ilustran el uso de ROS2 en escenarios prácticos y entornos reales.',
            ai: '🔍 Proyectos de IA',
            aiDesc: 'Conjunto de proyectos de inteligencia artificial que integran modelos de aprendizaje automático y aplicaciones prácticas desarrolladas en Python. Incluyen soluciones como algoritmos de búsqueda de caminos (pathfinding), clasificadores y otras implementaciones orientadas a problemas reales.',
            verRepo: 'Ver repo',
            volver: 'Volver al inicio'
        },
        en: {
            title: 'Projects - Raúl Antón Echevarría',
            h1: 'Projects',
            empire: '🚀 Empire Attack',
            empireDesc: 'Arcade video game developed in Python using the Pygame library, inspired by the Star Wars universe and designed to offer a retro experience.',
            ros: '🤖 ROS2 Projects',
            rosDesc: 'ROS2 workspace that groups various projects, including robotics applications and simulations that illustrate the use of ROS2 in practical and real-world scenarios.',
            ai: '🔍 AI Projects',
            aiDesc: 'A set of artificial intelligence projects that integrate machine learning models and practical applications developed in Python. Includes solutions such as pathfinding algorithms, classifiers, and other implementations aimed at real-world problems.',
            verRepo: 'View repo',
            volver: 'Back to home'
        }
    };

    function setLang(lang) {
        document.title = translations[lang].title;
        document.querySelector('h1').textContent = translations[lang].h1;
        // Empire Attack
        document.getElementById('empire-title').textContent = translations[lang].empire;
        document.getElementById('empire-desc').textContent = translations[lang].empireDesc;
        document.getElementById('empire-btn').textContent = translations[lang].verRepo;
        // ROS2
        document.getElementById('ros-title').textContent = translations[lang].ros;
        document.getElementById('ros-desc').textContent = translations[lang].rosDesc;
        document.getElementById('ros-btn').textContent = translations[lang].verRepo;
        // IA
        document.getElementById('ai-title').textContent = translations[lang].ai;
        document.getElementById('ai-desc').textContent = translations[lang].aiDesc;
        document.getElementById('ai-btn').textContent = translations[lang].verRepo;
        // Volver
        document.getElementById('volver-inicio').textContent = translations[lang].volver;
        // Guardar idioma en localStorage
        localStorage.setItem('lang', lang);
        // Actualizar bandera de forma dinámica según el idioma
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

    // Añadir ids si no existen
    if (!document.getElementById('empire-title')) document.querySelectorAll('h2')[0].id = 'empire-title';
    if (!document.getElementById('empire-desc')) document.querySelectorAll('section')[0].querySelector('p').id = 'empire-desc';
    if (!document.getElementById('empire-btn')) document.querySelectorAll('section')[0].querySelector('a.btn').id = 'empire-btn';
    if (!document.getElementById('ros-title')) document.querySelectorAll('h2')[1].id = 'ros-title';
    if (!document.getElementById('ros-desc')) document.querySelectorAll('section')[1].querySelector('p').id = 'ros-desc';
    if (!document.getElementById('ros-btn')) document.querySelectorAll('section')[1].querySelector('a.btn').id = 'ros-btn';
    if (!document.getElementById('ai-title')) document.querySelectorAll('h2')[2].id = 'ai-title';
    if (!document.getElementById('ai-desc')) document.querySelectorAll('section')[2].querySelector('p').id = 'ai-desc';
    if (!document.getElementById('ai-btn')) document.querySelectorAll('section')[2].querySelector('a.btn').id = 'ai-btn';
    if (!document.getElementById('volver-inicio')) document.querySelector('a.btn[href="index.html"]').id = 'volver-inicio';

    // Idioma inicial
    // Al cargar, usar el idioma guardado o español por defecto
    const savedLang = localStorage.getItem('lang') || 'es';
    setLang(savedLang);
});
