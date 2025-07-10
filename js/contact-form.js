// contact-form.js - Feedback visual y envío real con Formspree
window.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form.contact-form');
    if (!form) return;

    // Fondo difuminado
    var blurBg = document.createElement('div');
    Object.assign(blurBg.style, {
        display: 'none',
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(30,30,40,0.25)',
        backdropFilter: 'blur(6px)',
        zIndex: 9998,
        opacity: 0,
        transition: 'opacity 0.4s'
    });
    document.body.appendChild(blurBg);

    // Mensaje de éxito
    var successMsg = document.createElement('div');
    successMsg.textContent = '¡Mensaje enviado!';
    Object.assign(successMsg.style, {
        display: 'none',
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#35363a',
        color: '#ffd86b',
        fontWeight: '700',
        textAlign: 'center',
        borderRadius: '16px',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
        padding: '2.2rem 2.5rem',
        zIndex: 9999,
        fontSize: '1.4rem',
        opacity: 0,
        transition: 'opacity 0.4s'
    });
    document.body.appendChild(successMsg);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var data = new FormData(form);
        fetch('https://formspree.io/f/xqabrppp', {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        })
        .then(function(response) {
            if (response.ok) {
        form.reset();
        blurBg.style.display = 'block';
        successMsg.style.display = 'block';
        setTimeout(function() {
            blurBg.style.opacity = '1';
            successMsg.style.opacity = '1';
        }, 10);
        setTimeout(function() {
            blurBg.style.opacity = '0';
            successMsg.style.opacity = '0';
            setTimeout(function() {
                blurBg.style.display = 'none';
                successMsg.style.display = 'none';
            }, 500);
        }, 2500);
            } else {
                response.json().then(function(data) {
                    alert(data.error || 'Error al enviar el mensaje.');
                });
            }
        })
        .catch(function() {
            alert('Error de red. Inténtalo más tarde.');
        });
    });
});
