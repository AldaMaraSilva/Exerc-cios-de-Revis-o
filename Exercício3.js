let inicio = 20
let fim  = 40
let pares = 0
//for (inicialização,condição;implementação){comandos}
for(i=inicio;i <= fim; i++){
    if(i%2 ==0){
        pares +=i
    }
   }
console.log("a soma dos numeros pares entre "+inicio + "e " +fim + "= "+pares)

