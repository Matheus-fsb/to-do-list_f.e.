const prompt = require('prompt-sync')()
const chalk = require('chalk');
const GenTarefa = require("./gen_tarefas")

class to_do_list{
    constructor(){
        this._lista = "";
    }

    criarListaTarefas(){
        let lista = new GenTarefa
        this._lista = lista
    }

    menu(nome_da_lista) {
        console.log(`Lista: ${nome_da_lista}`);
        console.log("Menu de tarefas");
        console.log("1. Criar uma nova tarefa");
        console.log("2. Retirar uma tarefa já criada");
        console.log("3. Marcar tarefa como concluída");
        console.log("4. Ver tarefas criadas");
        console.log("5. Ver tarefas concluídas");
        console.log("6. Apresentar novamente o menu")
    }

    menuTipoTarefa(){
        console.log("S - Criar uma nova tarefa simples")
        console.log("R - Criar uma nova tarefa repetitiva");
        console.log("P - Criar uma nova tarefa com prioridade");
        console.log("E - Criar uma nova tarefa com etiqueta");
    }

    apresentacao(){
        console.log(chalk.bold.yellow("Bem-vindo(a) ao To Do List: Fantastic Edition!"));
        console.log(chalk.bold.yellow("Pronto para facilitar seu dia-a-dia dividindo-a em tarefas?"));
        console.log("===========================================================");
        console.log("Qual será o nome da sua lista?");
        let nome_lista = prompt("");
        console.log("===========================================================");
        this.menu(nome_lista)
        console.log("===========================================================");
        let by = chalk.italic.red("Developed by Matheus");
        console.log(by);

        this.criarListaTarefas()
    }

    criarTarefaInterface(){
        console.log("Qual será o tipo de tarefa?")
        this.menuTipoTarefa()
        let tipoTarefa = prompt("")
        tipoTarefa = tipoTarefa.toUpperCase()
        switch(tipoTarefa){
            case "S":
                this._lista.criarTarefa()
                this.selecionarMetodo()
            case "R":
                this._lista.criarTarefaRepetitiva()
                this.selecionarMetodo()
                break;
            case "P":
                this._lista.criarTarefaPrioritaria()
                this.selecionarMetodo()
                break;
            case "E":
                this._lista.criarTarefaComEtiqueta()
                this.selecionarMetodo()
            default:
                console.log("Valor inválido")
                this.criarTarefaInterface()

        }
    }

    removerTarefaInterface(){
        console.log("Qual o número da tarefa que deseja retirar?")
        this._lista.removerTarefa()
        this.selecionarMetodo()
    }

    concluirTarefaInterface(){
        console.log("Qual o número da tarefa que deseja concluir?")
        this._lista.concluirTarefa()
        this.selecionarMetodo()
    }

    verTarefaFalseInterface(){
        console.log("Lista de tarefas pendentes:")
        this._lista.verTarefaFalse()
        this.selecionarMetodo()
    }

    verTarefaTrueInterface(){
        console.log("Lista de tarefas concluídas:")
        this._lista.verTarefaTrue()
        this.selecionarMetodo()
    }

    sair(){
        console.log("Fechando To Do List: Fantastic Edition!");
        console.log("Até mais!");
        process.exit(0);
    }

    selecionarMetodo(){
        console.log("===========================================================");
        let gen = Number(prompt(""));

        switch (gen) {
            case 1:
                this.criarTarefaInterface(); 
                break;

            case 2:
                this.removerTarefaInterface(); 
                break;

            case 3:
                this.concluirTarefaInterface(); 
                break;

            case 4:
                this.verTarefaFalseInterface(); 
                break;

            case 5:
                this.verTarefaTrueInterface(); 
                break;

            case 6:
                this.sair();
                break;

            default:
                console.log("não existe esta função");
                this.selecionarMetodo()
        }
    }
}

module.exports = to_do_list;