
function isValidPassword(password) {
    const specialCharacters = /[.\-!?@]/; // constante que almacena los caracteres especiales como regex
    return password.length > 16 && specialCharacters.test(password); // Validamos que la longitud sea mayor a 16 y que contenga caracteres especiales
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signup-form').addEventListener('submit', function(event) { // Escuchamos el evento submit
        event.preventDefault(); // No enviar el formulario

        const password = document.getElementById('signup_password').value; // Obtener la contraseña y la almacenamos como constante para que no se modifique durante el proceso bajo ninguna circunstancia
        const confirmPassword = document.getElementById('confirm_password').value; // Obtener la confirmacion

        if (!isValidPassword(password)) { // pasamos la contraseña por la funcion
            console.error('Error: La contraseña debe tener más de 16 caracteres y contener al menos un carácter especial ( . - ! ? @ ).');
            return; // Salimos de la ejecución
        }

        if (password !== confirmPassword) { // Comparamos las contraseñas
            console.error('Error: Las contraseñas no coinciden.');
            return; // Salimos de la ejecución
        }
        // mensaje de confirmacion
        console.log('Formulario enviado correctamente.');
        // hacemos el submit
        this.submit();
    });
});