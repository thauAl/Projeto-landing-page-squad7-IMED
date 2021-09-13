

const titulosquad7 = document.querySelector("#animaçao")
function digitar (titulo){

var digitandoArray = titulo.innerHTML.split("")
titulo.innerHTML = '';
digitandoArray.forEach(function(letra, i){
setTimeout( function  (){

 titulo.innerHTML += letra
      }
      ,75 * i)
   
       })
   
   }
         
   digitar(titulosquad7)