const pessoas = [
    { name: "Fabiana Araújo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
];

function retornaPessoa(name) {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].name === name) {
            return pessoas[i];
        }
    }
}

function retornaNomes() {
    const vetor = [];
    for (let i = 0; i < pessoas.length; i++) {
        vetor[i] = pessoas[i].name.split(' ')[0];
    }
    return vetor;
}

console.log(retornaNomes());

function insereID() {
    for (let i = 0; i < pessoas.length; i++) {
        pessoas[i].id = i + 1;
    }
    return pessoas;
}

function idadeSuficiente() {
    const vetorSuficiente = [];
    var c = 0;
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].age > 17) {
            vetorSuficiente[c] = pessoas[i];
            c++;
        }
    }
    return vetorSuficiente;
}

function mediaIdades() {
    var somaIdade = 0;
    var media = 0;
    for (let i = 0; i < pessoas.length; i++) {
        somaIdade = somaIdade + pessoas[i].age;
    }
    media = somaIdade / pessoas.length;
    return media;
}