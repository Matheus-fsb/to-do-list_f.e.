const { Tarefa, TarefaRepetitiva, TarefaPrioritaria, TarefaComEtiqueta } = require("../arquivos_encapsulados/tarefas");
const prompt = require('prompt-sync')();

class GenTarefa {
    constructor() {
        this._tarefasNaoConcluidas = [];
        this._tarefasConcluidas = [];
    }

    criarTarefa() {
        let novaTarefa = new Tarefa();
        novaTarefa.adicionarDescricao();
        this._tarefasNaoConcluidas.push(novaTarefa);
        console.log("Tarefa simples criada com sucesso!");
    }

    criarTarefaRepetitiva() {
        let novaTarefa = new TarefaRepetitiva();
        novaTarefa.adicionarDescricao();
        novaTarefa.definirFrequencia();
        novaTarefa.definirDataInicio();
        this._tarefasNaoConcluidas.push(novaTarefa);
        console.log("Tarefa repetitiva criada com sucesso!");
    }

    criarTarefaPrioritaria() {
        let novaTarefa = new TarefaPrioritaria();
        novaTarefa.adicionarDescricao();
        novaTarefa.definirPrioridade();
        novaTarefa.definirDataFinal();
        this._tarefasNaoConcluidas.push(novaTarefa);
        console.log("Tarefa prioritária criada com sucesso!");
    }

    criarTarefaComEtiqueta() {
        let novaTarefa = new TarefaComEtiqueta();
        novaTarefa.adicionarDescricao();
        novaTarefa.adicionarEtiqueta();
        this._tarefasNaoConcluidas.push(novaTarefa);
        console.log("Tarefa com etiqueta criada com sucesso!");
    }

    removerTarefa() {
        let numTarefa = Number(prompt("Insira o número da tarefa a ser removida: "));
        if (!isNaN(numTarefa) && numTarefa >= 1 && numTarefa <= this._tarefasNaoConcluidas.length) {
            this._tarefasNaoConcluidas.splice(numTarefa - 1, 1);
            console.log("Tarefa removida com sucesso.");
        } else {
            console.log("Por favor, insira um número de tarefa válida para remover.");
        }
    }

    concluirTarefa() {
        let numTarefa = Number(prompt("Insira o número da tarefa a ser concluída: "));
        if (!isNaN(numTarefa) && numTarefa >= 1 && numTarefa <= this._tarefasNaoConcluidas.length) {
            this._tarefasNaoConcluidas[numTarefa - 1].concluirTarefa();
            this._tarefasConcluidas.push(this._tarefasNaoConcluidas[numTarefa - 1]);
            this._tarefasNaoConcluidas.splice(numTarefa - 1, 1);
            console.log("Tarefa concluída com sucesso.");
        } else {
            console.log("Por favor, insira um número de tarefa válido para concluir.");
        }
    }

    verTarefaFalse() {
        console.log("Tarefas não concluídas:");
        for (let tarefa of this._tarefasNaoConcluidas) {
            console.log(tarefa.mostrarDescricao());
        }
    }

    verTarefaTrue() {
        console.log("Tarefas concluídas:");
        for (let tarefa of this._tarefasConcluidas) {
            console.log(tarefa.mostrarDescricao());
        }
    }
}

module.exports = GenTarefa;
