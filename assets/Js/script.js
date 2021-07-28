let preguntas = [
    {
        pregunta:"Quien es nemesis?",
        opcion:[
            "Una Bow",
            "Un zombie",
            "Un mutante",
            "un chester",
        ],
        
    }

];

let index = 0;


imprimirpreguntas(index);




function imprimirpreguntas(i) {
    let span1 = document.getElementById("span1");
    let span2 = document.getElementById("span2");
    let span3 = document.getElementById("span3");
    let span4 = document.getElementById("span4");

    span1.innerHTML = preguntas[i].opcion[0];
    span2.innerHTML = preguntas[i].opcion[1];
    span3.innerHTML = preguntas[i].opcion[2];
    span4.innerHTML = preguntas[i].opcion[3];

}



