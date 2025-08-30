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
            calc: '💰 Calculadora de Interés Compuesto',
            calcDesc: 'Calculadora de interés compuesto desarrollada en Android Studio, que permite a los usuarios calcular el crecimiento de una inversión a lo largo del tiempo, considerando diferentes tasas de interés y períodos.',
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
            calc: '💰 Compound Interest Calculator',
            calcDesc: 'Compound interest calculator developed in Android Studio, allowing users to calculate the growth of an investment over time, considering different interest rates and periods.',
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
        // Calculadora de Interés Compuesto
        document.getElementById('calc-title').textContent = translations[lang].calc;
        document.getElementById('calc-desc').textContent = translations[lang].calcDesc
        document.getElementById('calc-btn').textContent = translations[lang].verRepo;
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
        <button id="lang-btn" aria-label="Idioma" class="lang-toggle-btn">
            <img src="imgs/spain.svg" alt="Español" id="flag-current">
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
        const isOpen = dropdown.classList.contains('show');
        dropdown.classList.toggle('show', !isOpen);

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
        dropdown.classList.remove('show');
        const arrow = langSelector.querySelector('#lang-arrow');
        if (arrow) {
            arrow.style.opacity = 0;
            setTimeout(function() {
                arrow.src = 'imgs/bottom.svg';
                arrow.style.opacity = 1;
            }, 120);
        }
    });
    langSelector.querySelectorAll('.lang-option').forEach(function(opt) {
        opt.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLang(lang);
            dropdown.classList.remove('show');
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
    if (!document.getElementById('calc-title')) this.document.querySelectorAll('h2')[3].id = 'calc-title';
    if (!document.getElementById('calc-desc')) document.querySelectorAll('section')[3].querySelector('p').id = 'calc-desc';
    if (!document.getElementById('calc-btn')) document.querySelectorAll('section')[3].querySelector('a.btn').id = 'calc-btn';

    // Idioma inicial
    // Al cargar, usar el idioma guardado o español por defecto
    const savedLang = localStorage.getItem('lang') || 'es';
    setLang(savedLang);
});
