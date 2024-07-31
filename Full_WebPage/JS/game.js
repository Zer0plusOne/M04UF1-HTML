document.addEventListener('DOMContentLoaded', function() { // Cuando se cargue el documento, se ejecuta la función
    const randomNumber = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
    let failCount = 0;  // Iniciamos la variable de los intentos (si refrescas, se reinicia)

    /* Se declaran como constantes para que no se puedan cambiar sus valores durante la ejecucion */

    const form = document.getElementById('game-form'); // Obtenemos el formulario
    const userInput = document.getElementById('user-input'); // Obtenemos el input 
    const message = document.getElementById('message'); // Obtenemos el mensaje
    const failCountDisplay = document.getElementById('fail-count'); // Obtenemos el contador
 
    // Event listener para el formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // No dejamos que el formulario se envie por defecto

        const userValue = userInput.value; // Obtenemos el valor del input y lo guardamos en una variable constante no modificable mientras se hacen las comparaciones

        // Si el ususario lo deja vacio...
        if (userValue === "") {
            console.error("Error: Tienes que poner algo.");
            return; // Salimos de la función
        }

        const userNumber = Number(userValue); // Convertimos el valor del input a un valor numerico

        if (isNaN(userNumber)) { // Si el valor no es numerico
            console.error("Error: No has puesto un numero.");
            return;
        }

        if (userNumber < 1 || userNumber > 10) {
            console.error("Error: El numero es entre 1 y 10");
            return;
        }

        // Comprobamos si el usuario ha adivinado el número
        if (userNumber === randomNumber) {
            message.textContent = "FELICIDADES HAS PERDIDO TU TIEMPO PERO HAS ACERTADO.";
        } else {
            failCount++; // Incrementamos el contador
            failCountDisplay.textContent = failCount; // Actualizamos el contador
            message.textContent = "Incorrecto. Intenta de nuevo."; // Mensaje de error
        }
    });
});
