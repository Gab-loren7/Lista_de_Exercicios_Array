/*
 Uma lista com números de 1 a 15 foi criada por engano, quando na verdade deveria ser apenas de 1 a 5. 
 Desenvolver um programa que remova os números a mais para corrigi-la. Mostrar a lista corrigida na tela apenas utilizando o comando "pop".
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (let contador = 0;/*cria uma variável chamado contador */ contador < 10;/*fala que vai funcionar enquanto for menor que 10 */ contador++/*fala que ele vai adicionar 1 */) {
    numeros.pop()
}

console.log(numeros)
