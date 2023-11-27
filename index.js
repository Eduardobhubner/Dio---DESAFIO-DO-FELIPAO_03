class Heroi {

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = '';
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque especial da classe';
        }

        const mensagem = `O ${this.tipo} ${this.nome} ${ataque}`;
        console.log(mensagem);
    }
}

const heroi_exemplo_mago = new Heroi('ronaldo bruno', 696, 'mago');
const heroi_exemplo_guerreiro = new Heroi('Katherine', 7, 'guerreiro');
const heroi_exemplo_monge = new Heroi('Rubão da massa', 1001, 'monge');
const heroi_exemplo_ninja = new Heroi('chave do carro', 30, 'ninja');

heroi_exemplo_mago.atacar()
heroi_exemplo_guerreiro.atacar()
heroi_exemplo_monge.atacar()
heroi_exemplo_ninja.atacar()