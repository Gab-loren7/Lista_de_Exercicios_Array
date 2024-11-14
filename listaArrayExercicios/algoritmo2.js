/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/

let listaCompras = []

alert("Adicione três itens a lista do aplicativos!")

listaCompras[0] = prompt("Adicione o primeiro item!")
listaCompras[1] = prompt("Adicione o segundo item!")
listaCompras[2] = prompt("E o terceiro item!")

if (listaCompras[2] == "leite") {
    alert("lista de compras: " + listaCompras)

}

else {
    listaCompras.push("leite")
    alert("lista de compras: " + listaCompras)
}

