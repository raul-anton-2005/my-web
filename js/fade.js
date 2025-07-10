// fade.js - Transiciones suaves entre páginas
window.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    body.classList.add('fade-transition');
    setTimeout(() => {
        body.classList.add('fade-in');
    }, 10);

    // Interceptar clicks en enlaces internos para fade-out
    document.querySelectorAll('a[href]').forEach(link => {
        const url = link.getAttribute('href');
        if (url && !url.startsWith('http') && !url.startsWith('mailto:') && !link.hasAttribute('target')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                body.classList.remove('fade-in');
                setTimeout(() => {
                    window.location.href = url;
                }, 400);
            });
        }
    });
});
