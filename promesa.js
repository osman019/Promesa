// Función que devuelve una promesa que resuelve después de un tiempo especificado
function cuentaRegresiva(tiempo) {
    return new Promise((resolve,) => {
        let segundosRestantes = tiempo / 1000; 

        const intervalo = setInterval(() => {
            console.log(segundosRestantes + ' segundos restantes');
            segundosRestantes--;

            if (segundosRestantes < 1) {
                clearInterval(intervalo); // Detener el intervalo
                resolve();
            }
        }, 1000); 
    });
}


function saludo() {
    console.log('Hola osman! Han pasado 5 segundos.');
}


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
