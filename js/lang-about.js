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
            volver: 'Volver al inicio'
        },
        en: {
            title: 'About me - Raúl Antón Echevarría',
            h1: 'About me',
            historia: 'ℹ️ My story',
            historiaText: 'I am a student of the Degree in Robotic Intelligence at Universitat Jaume I, with an average grade close to 9 and more than ten honors in key subjects such as Programming, Physics or Artificial Intelligence. Passionate about technology and continuous learning, I have developed several personal projects applying AI, robotics and simulation with languages such as Python, C++ and Java. I master tools like ROS2, Android Studio and Bash, and I stand out for my analytical skills, perseverance and enthusiasm for solving complex challenges. I am looking for opportunities to continue growing and apply my knowledge in real environments.',
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
            volver: 'Back to home'
        }
    };

    function setLang(lang) {
        document.title = translations[lang].title;
        document.querySelector('h1').textContent = translations[lang].h1;
        document.getElementById('historia-title').textContent = translations[lang].historia;
        document.getElementById('historia-text').textContent = translations[lang].historiaText;
        document.getElementById('skills-tec-title').textContent = translations[lang].skillsTec;
        const ulTec = document.getElementById('skills-tec-list');
        ulTec.innerHTML = translations[lang].skillsTecList.map(x => `<li>${x}</li>`).join('');
        document.getElementById('skills-pers-title').textContent = translations[lang].skillsPers;
        const ulPers = document.getElementById('skills-pers-list');
        ulPers.innerHTML = translations[lang].skillsPersList.map(x => `<li>${x}</li>`).join('');
        document.getElementById('expediente-btn').textContent = translations[lang].expediente;
        document.getElementById('certificados-btn').textContent = translations[lang].certificados;
        document.getElementById('descargar-cv').textContent = translations[lang].descargar;
        document.getElementById('volver-inicio').textContent = translations[lang].volver;

        localStorage.setItem('lang', lang);
        const flag = document.getElementById('flag-current');
        const btn = document.querySelector('.lang-option[data-lang="' + lang + '"] img');
        if (flag && btn && btn.src) flag.src = btn.src;
    }

    // Selector de idioma (igual que en index)
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
            dropdown.style.display = 'none';
        });
    });

    // Idioma inicial persistente y bandera dinámica
    const savedLang = localStorage.getItem('lang') || 'es';
    setLang(savedLang);
});
