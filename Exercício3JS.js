let tabela = [10,25,14,20,13,32,45,36,52,30]
let soma_idade = 0

for(let i=0;i < tabela.length;i++){
    soma_idade += tabela[i]
}
let media_alunos = soma_idade/tabela.length
let alunos_acima_media = 0
for(let i=0;i < tabela.length;i++){
    if(tabela[i] > media_alunos){
        alunos_acima_media++;
    }
}
console.log("a quantidade acima da média é de "+ alunos_acima_media)


