var nota1 = 0;
var nota2 = 0;
var nota3 = 0;
var media = 0;

var nome ="A";

nome = prompt("Insira o nome do aluno");

nota1 = prompt("Insira a nota 1 do aluno");
nota2 = prompt("Insira a nota 2 do aluno");
nota3 = prompt("Insira a nota 3 do aluno");
media = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;

alert(nome+" média: "+media);
