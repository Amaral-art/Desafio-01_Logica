let resultado = soma(151, 1)
console.log('Seu saldo rankeado é: ' + resultado)

function soma(vitorias, derrotas) {
  let saldoDeRankeadas = vitorias - derrotas
  return saldoDeRankeadas;
}

for (i = 250; i<= 1000; i +=250){
    console.log("Bonus " + i)
}

let nivel

if (resultado <= 10){ 
nivel = "Ferro"
	
}else if (resultado <= 20){
	nivel = "Bronze"

}else if (resultado <= 50){
	nivel = "Prata"
    
}else if (resultado <= 80){
	nivel = "Ouro"
    
  }else if (resultado <= 90){
	nivel = "Diamante"  
    
}else if (resultado <= 100){
	nivel = "Lendário"    
    
    
}else{
  nivel = "Imortal" 
}

switch (true){
  case resultado <= 10:
    console.log("O herói tem o saldo de " + resultado + " e está no nível " + nivel)
    break;

  case resultado <= 20:
    console.log("O herói tem o saldo de " + resultado + " e está no nível " + nivel)
    break;

     case resultado <= 50:
        console.log("O herói tem o saldo de " + resultado + " e está no nível " + nivel)
  break

   case resultado <= 80:
    console.log("O herói tem o saldo de " + resultado + " e está no nível " + nivel)
  break

   case resultado <= 90:
    console.log("O herói tem o saldo de " + resultado + " e está no nível " + nivel)

   case resultado <= 100:
    console.log("O herói tem o saldo de " + resultado + " e está no nível " + nivel)
  break

  case resultado > 100:
    console.log("O herói tem o saldo de " + resultado + " e está no nível " + nivel)
  break

  default:
    console.log("Desafie um amigo a fazer mais pontos que você")
}