var num1;
var operador="";
var memoria = 0;
var texto = document.getElementById('texto');

function agregar(){
    var numero = document.getElementsByName('num').value;
    if(operador == ""){
        texto.innerHTML = numero;
    }else{
        texto.innerHTML = texto.textContent + numero; 
    }
}
function suma(){
    num1 = texto.textContent;
    operador = "+";
}
function resta(){
    num1 = texto.textContent;
    operador = "-";
    texto.innerHTML = "";
}
function multiplicacion(){
    num1 = texto.textContent;
    operador = "*";
    texto.innerHTML = "";
}
function division(){
    num1 = texto.textContent;
    operador = "/";
    texto.innerHTML = "";
}
function reset(){
    num1 = 0;
    num2 = 0;
    operador = "";
    texto.innerHTML = "";
}
function resolver(){
    var resultado = 0;

    switch(operador){

        case "+":
            num2 = texto.textContent;
            resultado = parseFloat(num1)+parseFloat(num2);
            texto.innerHTML = resultado;
            break;

        case "-":
            num2 = texto.textContent;
            resultado = parseFloat(num1)-parseFloat(num2);
            texto.innerHTML = resultado;
            break;

        case "*":
            num2 = texto.textContent;
            resultado = parseFloat(num1)*parseFloat(num2);
            texto.innerHTML = resultado;
            break;

        case "/":
            num2 = texto.textContent;
            resultado = parseFloat(num1)/parseFloat(num2);
            texto.innerHTML = resultado;
            break;
    } 
}
function agregarMemoria(){
    memoria = texto.textContent;
    texto.innerHTML = "";
}
function eliminarMemoria(){
    memoria = 0;
}
function obtenerMemoria(){
    texto.innerHTML = memoria;
}