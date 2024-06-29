document.addEventListener("DOMContentLoaded", function() {
    var mensajeBienvenida = "¡Bienvenido a Jardin Verde!";
    document.getElementById("mensaje-bienvenida").innerText = mensajeBienvenida;
});

function validarNombre(nombre) {
    if(nombre.trim() === '') {
        $('#nombre-error').text('Por favor ingresa tu nombre.');
        return false;
    } else {
        $('#nombre-error').text('');
        return true;
    }
}

function validarEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.trim() === '') {
        $('#email-error').text('Por favor ingresa tu correo electrónico.');
        return false;
    } else if (!emailRegex.test(email.trim())) {
        $('#email-error').text('Por favor ingresa un correo electrónico válido.');
        return false;
    } else {
        $('#email-error').text('');
        return true;
    }
}

function validarContraseña(contraseña) {
    if(contraseña.trim() === '') {
        $('#password-error').text('Por favor ingresa tu contraseña.');
        return false;
    } else {
        $('#password-error').text('');
        return true;
    }
}

function validarConfirmaciónContraseña(contraseña, confirmaciónContraseña) {
    if(confirmaciónContraseña.trim() === '') {
        $('#confirm-password-error').text('Por favor confirma tu contraseña.');
        return false;
    } else if(contraseña !== confirmaciónContraseña) {
        $('#confirm-password-error').text('Las contraseñas no coinciden.');
        return false;
    } else {
        $('#confirm-password-error').text('');
        return true;
    }
}

function habilitarBotónRegistro() {
    var nombre = $('#nombre').val();
    var email = $('#email').val();
    var contraseña = $('#password').val();
    var confirmaciónContraseña = $('#confirm-password').val();

    var nombreValido = validarNombre(nombre);
    var emailValido = validarEmail(email);
    var contraseñaValida = validarContraseña(contraseña);
    var confirmaciónContraseñaValida = validarConfirmaciónContraseña(contraseña, confirmaciónContraseña);

    if(nombreValido && emailValido && contraseñaValida && confirmaciónContraseñaValida) {
        $('#submit-btn').prop('disabled', false);
    } else {
        $('#submit-btn').prop('disabled', true);
    }
}

$(document).ready(function(){
    $('#nombre').keyup(function() {
        validarNombre($(this).val());
        habilitarBotónRegistro();
    });

    $('#email').keyup(function() {
        validarEmail($(this).val());
        habilitarBotónRegistro();
    });

    $('#password').keyup(function() {
        validarContraseña($(this).val());
        habilitarBotónRegistro();
    });

    $('#confirm-password').keyup(function() {
        var contraseña = $('#password').val();
        var confirmaciónContraseña = $(this).val();
        validarConfirmaciónContraseña(contraseña, confirmaciónContraseña);
        habilitarBotónRegistro();
    });

    
    $('#registro-form').submit(function(event){
        event.preventDefault();
        alert('¡Registro exitoso!');
       
    });
});
