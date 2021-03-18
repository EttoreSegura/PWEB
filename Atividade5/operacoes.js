var num1 = 0;
var num2 = 0;
var soma= 0;
var sub = 0;
var div = 0;
var produto = 0;
var resto = 0;

num1 = prompt("Insira o primeiro numero");
num2 = prompt("Insira o segundo numero");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

soma = num1 + num2;
sub = num1 - num2;
produto= num1*num2;
div = num1/num2;
resto= num1%num2;

alert("Soma: "+soma);
alert("Subtração: "+sub);
alert("Produto: "+produto);
alert("Divisão: "+div);
alert("Resto: "+resto);
