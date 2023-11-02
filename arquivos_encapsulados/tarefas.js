const prompt = require('prompt-sync')();

class Tarefa {
    constructor() {
        this._status = false;
        this._descricao = "";
    }

    concluirTarefa() {
        this._status = true;
    }

    mostrarStatus() {
        return this._status;
    }

    adicionarDescricao() {
        this._descricao = prompt("Digite a descrição: ");
    }

    mostrarDescricao() {
        return this._descricao;
    }
}

class TarefaRepetitiva extends Tarefa {
    constructor() {
        super();
        this._frequencia = "";
        this._dataInicio = "";
    }

    definirFrequencia() {
        let frequencia = 0;
        while (frequencia !== 1 && frequencia !== 2 && frequencia !== 3) {
            frequencia = parseInt(prompt("Escolha a frequência (1 - Diária, 2 - Semanal, 3 - Mensal): "));
            if (frequencia !== 1 && frequencia !== 2 && frequencia !== 3) {
                console.log("Digite um valor válido");
            }
        }
        switch (frequencia) {
            case 1:
                this._frequencia = "Diária";
                break;
            case 2:
                this._frequencia = "Semanal";
                break;
            case 3:
                this._frequencia = "Mensal";
                break;
        }
    }

    definirDataInicio() {
        let dia = prompt("Dia de início: ");
        let mes = prompt("Mês de início: ");
        let ano = prompt("Ano de início: ");
        this._dataInicio = `${dia}/${mes}/${ano}`;
    }

    mostrarDescricao() {
        return `${super.mostrarDescricao()} - Frequência: ${this._frequencia} - Data de início: ${this._dataInicio}`;
    }
}

class TarefaPrioritaria extends Tarefa {
    constructor() {
        super();
        this._prioridade = 0;
        this._dataFinal = "";
    }

    definirPrioridade() {
        let prioridade = 0;
        while (isNaN(prioridade) || prioridade < 1 || prioridade > 10) {
            prioridade = parseInt(prompt("Digite a prioridade (de 1 a 10): "));
            if (isNaN(prioridade) || prioridade < 1 || prioridade > 10) {
                console.log("Digite um valor válido (de 1 a 10).");
            }
        }
        this._prioridade = prioridade;
    }
    

    definirDataFinal() {
        let dia = prompt("Dia final: ");
        let mes = prompt("Mês final: ");
        let ano = prompt("Ano final: ");
        this._dataFinal = `${dia}/${mes}/${ano}`;
    }

    mostrarDescricao() {
        return `${super.mostrarDescricao()} - Nível de prioridade: ${this._prioridade} - Data Final: ${this._dataFinal}`;
    }
}

class TarefaComEtiqueta extends Tarefa {
    constructor() {
        super();
        this._etiquetas = [];
    }

    adicionarEtiqueta() {
        let etiqueta;
        let i = 0;
        while (etiqueta !== "#sair" && i < 2) {
            etiqueta = String(prompt("Adicione uma etiqueta (ou digite 'sair' para finalizar): "));
            etiqueta = "#" + etiqueta;
            if (etiqueta !== "#sair") {
                this._etiquetas.push(etiqueta);
                i++;
            }
        }
    }

    mostrarDescricao() {
        return `${super.mostrarDescricao()} - Etiquetas: ${this._etiquetas.join(", ")}`;
    }
}

module.exports = { Tarefa, TarefaRepetitiva, TarefaPrioritaria, TarefaComEtiqueta };
