/* Uma loja precisa atualizar seu sistema de controle de estoque. Crie um vetor chamado 'estoqueProdutos' com os produtos "camiseta", "calça" e "sapato".  Adicione o produto "meia" ao final da lista. Remova o primeiro produto da lista e mude o segundo produto para "bermuda". Imprima o estoque atualizado no final. */

//Criando Array
let estoqueProdutos = ["camisa", "calca", "sapato"]

//Add meia no final
estoqueProdutos.push("meia")

//removendo o primeiro produto
estoqueProdutos.shift()

//mudando o segundo para bermuda
estoqueProdutos.splice(1, 1, "bermuda")

//mostrar inventario
console.log(estoqueProdutos)