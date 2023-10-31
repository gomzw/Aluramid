// Pom ----------------------------------------
function tocaSomPom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
//o que é uma constante
const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = querySelectorAll('.tecla')

let contador = 0;

while (contador < listaDeTeclas.length){
 const efeito = listaDeTeclas[contador].classList[1];
 const idAudio = "#som_"+efeito;
 listaDeTeclas[contador].onclick = function()




{
  tocaSom(idAudio);
}
 contador = contador + 1;
 console.long(contador)

}