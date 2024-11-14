/* Você tem uma lista de tarefas [ "Lavar a louça", "Estudar", "Fazer compras"].
Adicione uma nova tarefa ao final da lista e depois remova a primeira tarefa,
já que foi completada. Por fim, verifique se "Estudar" ainda está na lista. */

let listaDeTarefas = ["Lavar a louça", "Estudar", "Fazer compras"]

listaDeTarefas.push("Tomar banho")

listaDeTarefas.shift()

console.log(listaDeTarefas)

console.log('\nA tarefa "Estudar" ainda está na lista? ' + listaDeTarefas.includes("Estudar"))
