
let campos = document.querySelectorAll('#pregunta');
let index = 0;



let preguntas = [
    {
        pregunta:"Quien es nemesis?",
        opcion:[
            "Hyper Tag Markup Language",
            "Hyper Text Markup Language",
            "Hyperlinks Text Mark Language",
            "Hyperlinking Text Marking Language",
        ],
        
    }

]


imprimirPreguntas();


function imprimirPreguntas(){
    for(let i = 0;i<campos.length; i++){


        for(let j = 0 ; j<preguntas.length ; j++){
            campos[i].innerHTML = preguntas[j].opcion[0]; 
            campos[i].innerHTML = preguntas[j].opcion[1];
            campos[i].innerHTML = preguntas[j].opcion[2];
            campos[i].innerHTML = preguntas[j].opcion[3];
        }

        

    }
}



function mirarRespuestas(){

    campos.getAttribute("opt");
    console.log(campos)

}

pregunta.onclick = function () {
    campos.getAttribute("opt");
    console.log(campos)
}