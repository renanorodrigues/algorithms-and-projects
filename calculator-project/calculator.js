function insert(number){
  let num = document.getElementById("output").innerHTML;
  document.getElementById("output").innerHTML = num + number;
}

function clean(){
  document.getElementById("output").innerHTML = '';
}

function remove(){
  let resultado = document.getElementById("output").innerHTML;
  document.getElementById("output").innerHTML = resultado.substring(0, resultado.length -1);
}

function calculator(){
  let resultado = document.getElementById("output").innerHTML;
  if (resultado){
    document.getElementById("output").innerHTML = eval(resultado);
  }
}