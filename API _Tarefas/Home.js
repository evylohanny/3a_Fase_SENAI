//requerer/chamar o express e a body-parser
const bodyParser = require("body-parser");
const express = require("express");

//Inicializar o app
const app = express();
const PORT = 3000;

app.use(bodyParser.json())

let tarefas = [
    {id:1, descricao:"Estudar Node.js"},
    {id:2, descricao:"Criar API com Express"},
];

app.get('/tarefas', (req, res) => {
    res.json(tarefas)
})

//Rota para criar uma nova tarefa
app.post('/tarefas', (req, res) => {
    const { descricao } = req.body;

    if(!descricao) { // ponto de exclamação: negação, diferente de
        return res.status(400).json({ error: "Descrição é obrigatória"})
    }

    const novaTarefa = {
        id: tarefas.length = 1,//Número de elementos do array
        descricao: descricao
    };

    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

app.put('/tarefas/:id', (req, res) => {
    const { id } = req.params
    const { descricao } = req.body
    
    let tarefa = tarefas.find(t => t.id == id)
    if (tarefa) {
    tarefa.descricao = descricao;
    res.json({ message: "Tarefa atualizada com sucesso", tarefa })
    } else {
    res.status(404).json({ message: "Tarefa não encontrada" })
    }
})
    
app.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    tarefas = tarefas.filter(t => t.id != id);
    res.json({ message: "Tarefa removida com sucesso" })
})
