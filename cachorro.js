function Cachorro(raça) {
    this.raça = raça;
    this.latido = function() {
        console.log(this.raça + "au au")
    }
}

function Golden(raça, idade, nome) {
    this.raça = raça;
    this.idade = idade;
    this.nome = nome;

    this.dizRaça = function() {
        console.log(this.raça)
    }

    this.dizIdade = function() {
        console.log(this.idade)
    }

    this.dizNome = function() {
        console.log(this.nome)
    }

    Cachorro.call(this, raça);
}


function Pincher(raça, idade, nome) {
    this.raça = raça;
    this.idade = idade;
    this.nome = nome;

    this.dizRaça = function() {
        console.log(this.raça)
    }

    this.dizIdade = function() {
        console.log(this.idade)
    }

    this.dizNome = function() {
        console.log(this.nome)
    }

    Cachorro.call(this, raça);
}

const cachorro1 = new Golden("Golden", "7 anos", "Max");
const cachorro2 = new Pincher("Pincher", "2 anos", "Jorge");

cachorro1.dizIdade();
console.log(cachorro1);

cachorro2.dizIdade();
console.log(cachorro2);