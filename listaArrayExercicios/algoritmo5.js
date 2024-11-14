/*
Pedro está organizando seus filmes favoritos. Crie um array chamado filmesFavoritos com três filmes de sua escolha. 
Modifique o primeiro filme para um novo título. Verifique se o último filme da lista é "Harry Potter". 
Se não for, adicione "Harry Potter" ao final da lista. Imprima a lista de filmes favoritos no final.
*/

let filmesFavoritos = ["Taxi Driver", "The Batman", "Whiplash"]

filmesFavoritos.splice(0, 1, "Clube da Luta")

if (filmesFavoritos[2] == "Harry Potter") {
    alert("filmes favoritos: " + filmesFavoritos)
}

else {
    filmesFavoritos.push("Harry Potter")
    alert("filmes favoritos: " + filmesFavoritos)
}