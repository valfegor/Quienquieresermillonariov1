let preguntas = [
  {
    pregunta: "Quien es nemesis?",
    opcion: ["Una Bow", "Un zombie", "Un mutante", "un chester"],
    respuesta: 1,
  },
];

let index = 0;
let puntaje = 0;
let intento = 0;
let mal = 0;
let repetir = true;
let puntos = document.getElementById("cajapuntos");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");
let titulopreg = document.getElementById("titulo");
let opcion = document.querySelectorAll(".opcion");

function imprimirpreguntas(i) {
  span1.innerHTML = preguntas[i].opcion[0];
  span2.innerHTML = preguntas[i].opcion[1];
  span3.innerHTML = preguntas[i].opcion[2];
  span4.innerHTML = preguntas[i].opcion[3];
  titulopreg.innerHTML = preguntas[i].pregunta;
}

imprimirpreguntas(index);

opcion.forEach(function (opcion) {
  opcion.addEventListener("click", () => {
    validar(opcion);
  });
});

function validar(opcion) {
    intento ++;

  op1 = opcion.dataset.opt;

 

 while (repetir) {
    if (op1 == preguntas[0].respuesta) {
        alert("esa es la respuesta correcta");
        puntaje++;
        opcion.classList.add('correcto')
        puntos.innerHTML = puntaje;
        repetir = false;
        break;
      }
      else{
          mal ++;
          opcion.classList.add('incorrecto');
          repetir = false;
        break;        
      }
    
      
 }

}
