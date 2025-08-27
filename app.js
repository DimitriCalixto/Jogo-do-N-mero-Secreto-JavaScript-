alert('Bem Vindo! Você acabou de iniciar O JOGO DO NÚMERO SECRETO!');
alert('Caso esteja se questionando, NÃO você não tem escolha a opção de sair! MAS...');
alert('Você pode escolher ou PEREÇER COMPLETAMENTE SEM NEM MESMO TENTAR... Sim, tentar, porque conseguir SERIA LUXO DEMAIS PARA ALGUÉM QUE MAL[...]');
alert('[....]');
alert('(limpa a voz) Acho que deu para entender certo?');

let kick = prompt('Então vamos lá, faça seu primeiro chute de 0 até 100 criança: ');
let numeroSecreto = Math.floor(Math.random() * 101);
console.log(numeroSecreto);
let tentativas = 1;

while(kick != numeroSecreto){
    kick = prompt('Hahaha (ri de maneira sarcastica) você é péssimo! Tente de novo, de 0 até 100: ');
    tentativas ++;
    if (kick == numeroSecreto){
        alert(`É... Parece que você ACERTOU o NÚMERO SECRETO >:/ Tentativa(s): ${tentativas}`);
    } else {
        if (kick > numeroSecreto){
            alert(`Parece que seu chute foi ALTO demais!`);
        } else {
            alert(`Parece que seu chute foi BAIXO demais!`);
        }
    }
}
