// Función que devuelve una promesa que resuelve después de un tiempo especificado
function cuentaRegresiva(tiempo) {
    return new Promise((resolve, reject) => {
        let segundosRestantes = tiempo / 1000; // Convertir milisegundos a segundos

        const intervalo = setInterval(() => {
            console.log(segundosRestantes + ' segundos restantes');
            segundosRestantes--;

            if (segundosRestantes < 1) {
                clearInterval(intervalo); // Detener el intervalo
                resolve(); // Resuelve  la promesa cuando la cuenta regresiva termine
            }
        }, 1000); // ejecuta cada segundo
    });
}

// Función que muestra el saludo
function saludo() {
    console.log('Hola osman! Han pasado 5 segundos.');
}

// promesa con .then, .catch, y .finally
cuentaRegresiva(5000)
    .then(() => {
        saludo(); // Llamar a la función de saludo cuando la promesa se resuelve
    })
    .catch((error) => {
        console.error('Hubo un error:', error);
    })
    .finally(() => {
        console.log('terminado');
    });
