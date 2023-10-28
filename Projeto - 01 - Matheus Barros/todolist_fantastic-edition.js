// Importando as bibliotecas necessárias
const prompt = require('prompt-sync')(); // Biblioteca para entrada de dados pelo terminal
const chalk = require('chalk'); // Biblioteca para adicionar cores ao texto no terminal

// A classe to_do_list representa a lista de tarefas
class to_do_list {
    constructor() {
        // Aqui ficam armazenadas as tarefas pendentes e concluídas
        this.afazeres_pendentes = [];
        this.afazeres_concluidos = [];
    }

    // Métodos para gerenciar a lista de tarefas

    // Método menu exibe as opções de operações disponíveis na lista
    menu(nome_da_lista) {
        console.log(`Lista: ${nome_da_lista}`);
        console.log("Menu de tarefas");
        console.log("1. Criar uma nova tarefa");
        console.log("2. Retirar uma tarefa já criada");
        console.log("3. Marcar tarefa como concluída");
        console.log("4. Ver tarefas criadas");
        console.log("5. Ver tarefas concluídas");
        console.log("6. Fechar programa");
    }

    // Método criar_tarefa permite ao usuário adicionar uma nova tarefa à lista
    criar_tarefa() {
        console.log("Digite a tarefa");
        let tarefa = prompt("");
        this.afazeres_pendentes.push(tarefa);
        console.log("Tarefa Adicionada");
        gen_tarefa.selecionar_metodo();
    }

    // Método retirar_tarefa permite ao usuário remover uma tarefa da lista
    retirar_tarefa() {
        console.log("Digite o código da tarefa a ser retirada. (Para saber o código confira a lista de tarefas criadas)");
        let tarefa_para_retirar = Number(prompt(""));

        if (typeof tarefa_para_retirar === 'number' && (tarefa_para_retirar >= 1 && tarefa_para_retirar <= this.afazeres_pendentes.length)) {
            this.afazeres_pendentes.splice(tarefa_para_retirar - 1, 1);
            console.log("Tarefa retirada");
        } else {
            console.log("Tarefa inexistente ou entrada inválida");
        }

        gen_tarefa.selecionar_metodo();
    }

    // Método marcar_concluida permite ao usuário marcar uma tarefa como concluída
    marcar_concluida() {
        console.log("Digite o índice da tarefa para concluí-la. (Para saber o índice, confira a lista de tarefas criadas)");
        let indice_tarefa_concluida = Number(prompt(""));

        if (indice_tarefa_concluida >= 1 && indice_tarefa_concluida <= this.afazeres_pendentes.length) {
            let tarefa_concluida = this.afazeres_pendentes[indice_tarefa_concluida - 1];
            this.afazeres_concluidos.push(tarefa_concluida);
            this.afazeres_pendentes.splice(indice_tarefa_concluida - 1, 1);
            console.log("Tarefa concluída com sucesso!");
        } else {
            console.log("Índice de tarefa inválido. Por favor, insira um índice válido.");
        }

        gen_tarefa.selecionar_metodo();
    }

    // Método ver_tarefa exibe as tarefas pendentes
    ver_tarefa() {
        console.log("Tarefas criadas:");
        for (let i = 0; i < this.afazeres_pendentes.length; i++) {
            console.log(this.afazeres_pendentes[i]);
        }
        gen_tarefa.selecionar_metodo();
    }

    // Método ver_tarefa_concluida exibe as tarefas concluídas
    ver_tarefa_concluida() {
        console.log("Tarefas concluídas:");
        for (let a = 0; a < this.afazeres_concluidos.length; a++) {
            console.log(this.afazeres_concluidos[a]);
        }
        gen_tarefa.selecionar_metodo();
    }

    // Método sair encerra o programa
    sair() {
        console.log("Fechando To Do List: Fantastic Edition!");
        console.log("Até mais!");
        return;
    }
}

let tarefa = new to_do_list; // Cria uma instância da classe to_do_list

let gen_tarefa = {
    // Método apresentacao exibe uma mensagem de boas-vindas e inicia o programa
    apresentacao() {
        console.log(chalk.bold.yellow("Bem-vindo(a) ao To Do List: Fantastic Edition!"));
        console.log(chalk.bold.yellow("Pronto para facilitar seu dia-a-dia dividindo-a em tarefas?"));
        console.log("===========================================================");
        console.log("Qual será o nome da sua lista?");
        let nome_lista = prompt("");
        console.log("===========================================================");
        tarefa.menu(nome_lista); // Chama o método menu da instância da classe to_do_list
        console.log("===========================================================");
        let by = chalk.italic.red("Developed by Matheus");
        console.log(by);
    },

    // Método selecionar_metodo permite ao usuário escolher uma opção do menu
    selecionar_metodo() {
        console.log("===========================================================");
        let gen = Number(prompt(""));

        switch (gen) {
            case 1:
                tarefa.criar_tarefa(); // Chama o método criar_tarefa da instância da classe to_do_list
                break;

            case 2:
                tarefa.retirar_tarefa(); // Chama o método retirar_tarefa da instância da classe to_do_list
                break;

            case 3:
                tarefa.marcar_concluida(); // Chama o método marcar_concluida da instância da classe to_do_list
                break;

            case 4:
                tarefa.ver_tarefa(); // Chama o método ver_tarefa da instância da classe to_do_list
                break;

            case 5:
                tarefa.ver_tarefa_concluida(); // Chama o método ver_tarefa_concluida da instância da classe to_do_list
                break;

            case 6:
                tarefa.sair(); // Chama o método sair da instância da classe to_do_list
                break;

            default:
                console.log("Não foi possível executar tarefa");
        }
    }
}

// Inicialização do programa

gen_tarefa.apresentacao(); // Chama o método apresentacao para iniciar o programa
gen_tarefa.selecionar_metodo(); // Chama o método selecionar_metodo para permitir ao usuário escolher uma opção do menu
