function adicionar() {
    // Obter a referência do contêiner onde as tarefas estão (section)
    const sectionTarefas = document.getElementById("tarefas");
    
    // Clonar o último elemento .tarefa
    const novaTarefa = sectionTarefas.lastElementChild.cloneNode(true);
    
    // Limpar os campos do formulário da nova tarefa
    const inputs = novaTarefa.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""; // Limpar os valores
    }

    // Adicionar a nova tarefa à seção
    sectionTarefas.appendChild(novaTarefa);
}
