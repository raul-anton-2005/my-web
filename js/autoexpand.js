// autoexpand.js - Autoajusta la altura del textarea de mensaje en el formulario de contacto
window.addEventListener('DOMContentLoaded', function() {
    var textarea = document.querySelector('form.contact-form textarea[name="mensaje"]');
    if (textarea) {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });
        // Inicializar altura si hay texto precargado
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight) + 'px';
    }
});
