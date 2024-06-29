document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.getElementById('contact-form');
    var mensajeEnviado = document.getElementById('mensaje-enviado');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe normalmente

        // Validación de correo electrónico
        var emailInput = document.getElementById('email');
        var email = emailInput.value;
        if (!isValidEmail(email)) {
            alert('Por favor, introduzca una dirección de correo electrónico válida.');
            return;
        }

        // Aquí podrías realizar alguna validación adicional del formulario si es necesario

        // Muestra el mensaje de confirmación
        mensajeEnviado.classList.remove('d-none');

        // Limpia el formulario (opcional)
        formulario.reset();
    });

    // Función para validar el correo electrónico
    function isValidEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
});