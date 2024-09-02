# Promesa de Cuenta Regresiva

Este proyecto contiene un script en JavaScript que ilustra el uso de promesas para manejar una cuenta regresiva en segundos. Una vez que la cuenta regresiva finaliza, se muestra un mensaje de saludo.

## Descripción

El script define dos funciones principales:

1. **cuentaRegresiva(tiempo)**: Esta función toma un parámetro `tiempo` en milisegundos y devuelve una promesa que resuelve cuando el tiempo ha transcurrido. Mientras la promesa está pendiente, la función imprime en consola la cantidad de segundos restantes cada segundo.

2. **saludo()**: Esta función simplemente imprime un saludo en la consola cuando es llamada.

La cuenta regresiva se inicia con una llamada a `cuentaRegresiva(5000)`, que espera 5 segundos (5000 milisegundos). Una vez que el tiempo ha transcurrido, la promesa resuelve, y se llama a la función `saludo()`. Si ocurre algún error, se maneja en el bloque `catch`. Al finalizar, se imprime un mensaje indicando que el proceso ha terminado, sin importar si la promesa fue resuelta o rechazada.

# Acerca de: 
(osmanortizrolon@gmail.com)
