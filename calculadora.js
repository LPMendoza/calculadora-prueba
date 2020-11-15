var num1;
var operador="";
var memoria = 0;
var texto = document.getElementById('texto');

function agregar9(){
    var numero = document.getElementById('num9').value;
    texto.innerHTML = texto.textContent + numero; 
}
function agregar8(){
    var numero = document.getElementById('num8').value;
    texto.innerHTML = texto.textContent + numero; 
}function agregar7(){
    var numero = document.getElementById('num7').value;
    texto.innerHTML = texto.textContent + numero; 
}
function agregar6(){
    var numero = document.getElementById('num6').value;
    texto.innerHTML = texto.textContent + numero; 
}
function agregar5(){
    var numero = document.getElementById('num5').value;
    texto.innerHTML = texto.textContent + numero; 
}
function agregar4(){
    var numero = document.getElementById('num4').value;
    texto.innerHTML = texto.textContent + numero; 
}
function agregar3(){
    var numero = document.getElementById('num3').value;
    texto.innerHTML = texto.textContent + numero; 
}
function agregar2(){
    var numero = document.getElementById('num2').value;
    texto.innerHTML = texto.textContent + numero; 
}
function agregar1(){
    var numero = document.getElementById('num1').value;
    texto.innerHTML = texto.textContent + numero; 
}
function agregar0(){
    var numero = document.getElementById('num0').value;
    texto.innerHTML = texto.textContent + numero; 
}
function decimal(){
    var numero = document.getElementById('decimal').value;
    texto.innerHTML = texto.textContent + numero; 
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