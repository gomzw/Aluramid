function tocaSomPom () {
   document.querySelector('#som_tecla_pom').play();

}
  cy

 const listaDeTeclas = document.querySelectorAll('.tecla');


 let contador = 0;


 while (contador <9) {

  listaDeTeclas[contador].onclick = tocaSomPom;
  contador = contador +1;
  console.long(contador);


 }