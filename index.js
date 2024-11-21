let nome = "Nubzão"

    for (i = 0; i<= 1000; i +=250){
        console.log("Bonus " + i)
    }

    let pontosIniciais = 1000
    let passouDeFase = 9001

let quantidadeDeExperiencia = pontosIniciais + passouDeFase

switch (true) {
    case (quantidadeDeExperiencia <= 1000):
        console.log("O herói de nome " + nome + " está no Nível Ferro")
        break

    case (quantidadeDeExperiencia <= 2000):
        console.log("O herói de nome " + nome + " está no Nível Bronze")
        break

    case (quantidadeDeExperiencia <= 5000):
        console.log("O herói de nome " + nome + " está no Nível Prata")
        break

    case (quantidadeDeExperiencia <= 7000):
        console.log("O herói de nome " + nome + " está no Nível Ouro")
        break

    case (quantidadeDeExperiencia <= 8000):
        console.log("O herói de nome " + nome + " está no Nível Platina")
        break

    case (quantidadeDeExperiencia <= 9000):
        console.log("O herói de nome " + nome + " está no Nível Ascendente")
        break

    case (quantidadeDeExperiencia <= 10000):
        console.log("O herói de nome " + nome + " está no Nível Imortal")
        break

    case (quantidadeDeExperiencia > 10000):
        console.log("O herói de nome " + nome + " está no Nível Mito Radiante")
        break

    default:
        console.log("Inicie Noava Partida")
}

    