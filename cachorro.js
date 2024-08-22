function Cachorro(raça) {
    this.raça = raça;
    this.latido = function() {
        console.log(this.raça + "au au")
    }
}

function Golden(raça, idade) {
    this.raça = raça;
    this.idade = idade;

    this.dizRaça = function() {
        console.log(this.raça)
    }

    this.dizIdade = function() {
        console.log(this.idade)
    }

    Cachorro.call(this, raça);
}


function Pincher(raça, idade) {
    this.raça = raça;
    this.idade = idade;

    this.dizRaça = function() {
        console.log(this.raça)
    }

    this.dizIdade = function() {
        console.log(this.idade)
    }

    Cachorro.call(this, raça);
}

const cachorro1 = new Golden("Golden", "7 anos");
const cachorro2 = new Pincher("Pincher", "2 anos");

cachorro1.dizIdade();
console.log(cachorro1);

cachorro2.dizIdade();
console.log(cachorro2);