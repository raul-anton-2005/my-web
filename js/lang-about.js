// lang-about.js - Selector de idioma y traducción para about.html
window.addEventListener('DOMContentLoaded', function() {
    const translations = {
        es: {
            title: 'Sobre mí - Raúl Antón Echevarría',
            h1: 'Sobre mí',
            historia: 'ℹ️ Mi historia',
            historiaText: 'Soy estudiante del Grado en Inteligencia Robótica en la Universitat Jaume I, con una nota media cercana al 9 y más de diez matrículas de honor en asignaturas clave como Programación, Física o Inteligencia Artificial. Apasionado por la tecnología y el aprendizaje continuo, he desarrollado diversos proyectos propios aplicando IA, robótica y simulación con lenguajes como Python, C++ y Java. Domino herramientas como ROS2, Android Studio y Bash, y destaco por mi capacidad analítica, constancia y entusiasmo por resolver retos complejos. Busco oportunidades para seguir creciendo y aplicar mis conocimientos en entornos reales.',
            skillsTec: '🧠 Skills técnicas',
            skillsTecList: [
                '<strong>Lenguajes de programación:</strong> Python, C++, Java, Bash',
                '<strong>Herramientas y entornos:</strong> ROS2, Android Studio',
                '<strong>Ámbitos de conocimiento:</strong> Inteligencia artificial, Robótica, Simulación, Programación avanzada, Física aplicada, Sistemas operativos',
                '<strong>Idiomas:</strong> Español (nativo), Valenciano (nativo), Inglés (C1), Chino mandarín (nivel medio)'
            ],
            skillsPers: '💼 Skills personales y blandas',
            skillsPersList: [
                'Compromiso con el aprendizaje continuo',
                'Enfoque autodidacta',
                'Capacidad de análisis y resolución de problemas complejos',
                'Constancia y esfuerzo',
                'Pasión por la tecnología',
                'Autonomía en el desarrollo de proyectos propios',
                'Facilidad para trabajar en entornos reales y técnicos',
                'Alta motivación por el crecimiento profesional',
                'Orientación a la excelencia académica'
            ],
            expediente: 'Expediente académico',
            certificados: 'Certificados',
            descargar: 'Descargar CV',
            volver: 'Volver al inicio',
            cvHref: 'docs/cv-raul-anton.pdf',
            expHref: 'docs/expediente-grado.pdf',
        },
        en: {
            title: 'About me - Raúl Antón Echevarría',
            h1: 'About me',
            historia: 'ℹ️ My story',
            historiaText: 'I am a student of the Degree in Robotic Intelligence at Universitat Jaume I, with an average grade close to 9 and more than ten honors in key subjects such as Programming, Physics or Artificial Intelligence. Passionate about technology and continuous learning, I have developed several personal projects applying AI, robotics and simulation with languages such as Python, C++, and Java. I master tools like ROS2, Android Studio and Bash, and I stand out for my analytical skills, perseverance and enthusiasm for solving complex challenges. I am looking for opportunities to continue growing and apply my knowledge in real environments.',
            skillsTec: '🧠 Technical skills',
            skillsTecList: [
                '<strong>Programming languages:</strong> Python, C++, Java, Bash',
                '<strong>Tools and environments:</strong> ROS2, Android Studio',
                '<strong>Knowledge areas:</strong> Artificial intelligence, Robotics, Simulation, Advanced programming, Applied physics, Operating systems',
                '<strong>Languages:</strong> Spanish (native), Valencian (native), English (C1), Mandarin Chinese (intermediate)'
            ],
            skillsPers: '💼 Personal and soft skills',
            skillsPersList: [
                'Commitment to continuous learning',
                'Self-taught approach',
                'Analytical and complex problem-solving skills',
                'Perseverance and effort',
                'Passion for technology',
                'Autonomy in developing personal projects',
                'Ability to work in real and technical environments',
                'High motivation for professional growth',
                'Focus on academic excellence'
            ],
            expediente: 'Academic transcript',
            certificados: 'Certificates',
            descargar: 'Download CV',
            volver: 'Back to home',
            cvHref: 'docs/cv-raul-anton-eng.pdf',
            expHref: 'docs/expediente-grado-eng.pdf',
        }
    };

    function setLang(lang) {
        const t = translations[lang];
        document.title = t.title;
        document.querySelector('h1').textContent = t.h1;
        document.getElementById('historia-title').textContent = t.historia;
        document.getElementById('historia-text').textContent = t.historiaText;
        document.getElementById('skills-tec-title').textContent = t.skillsTec;
        document.getElementById('skills-tec-list').innerHTML = t.skillsTecList.map(x => `<li>${x}</li>`).join('');
        document.getElementById('skills-pers-title').textContent = t.skillsPers;
        document.getElementById('skills-pers-list').innerHTML = t.skillsPersList.map(x => `<li>${x}</li>`).join('');
        document.getElementById('expediente-btn').textContent = t.expediente;
        document.getElementById('certificados-btn').textContent = t.certificados;
        document.getElementById('descargar-cv').textContent = t.descargar;
        document.getElementById('volver-inicio').textContent = t.volver;

        // 🔁 Cambiar href del botón de descarga del CV y Expediente
        document.getElementById('descargar-cv').setAttribute('href', t.cvHref);
        document.getElementById('expediente-btn').setAttribute('href', t.expHref);

        localStorage.setItem('lang', lang);
        const flag = document.getElementById('flag-current');
        const btn = document.querySelector('.lang-option[data-lang="' + lang + '"] img');
        if (flag && btn && btn.src) flag.src = btn.src;
    }

    // Selector de idioma (igual que en index)
    const langSelector = document.createElement('div');
    langSelector.className = 'lang-selector';
    langSelector.innerHTML = `
        <button id="lang-btn" aria-label="Idioma" class="lang-toggle-btn">
            <img src="imgs/spain.svg" alt="Español" id="flag-current">
            <img src="imgs/bottom.svg" alt="Abrir selector" id="lang-arrow">
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
        if (arrow) arrow.src = isOpen ? 'imgs/bottom.svg' : 'imgs/up.svg';
    });
    document.addEventListener('click', function() {
        dropdown.style.display = 'none';
        const arrow = langSelector.querySelector('#lang-arrow');
        if (arrow) arrow.src = 'imgs/bottom.svg';
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
