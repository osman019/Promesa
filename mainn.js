let promesa1 = Promise.resolve(3);
let promesa2 = new Promise  ((resolve) => setTimeout (() => resolve("foo"),100));
let promesa3 = fetch("http://api.example.com/data");


Promise.all([promesa1, promesa2, promesa3])
.then((resultados) => console.log(resultados))
.catch((error) => console.error(error));