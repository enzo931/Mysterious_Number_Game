alert('Boas Vindas ao jogo do número secreto');

let numeroMaximo =  5000

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log(numeroSecreto);

let chute;

let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
    chute = prompt(`escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto) {
           alert(`o número secreto é menor que ${chute}`); 
        } else {
            alert(`o número secreto é maior que ${chute}`);
        }

        tentativas++;
    }


}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`voce acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1) {
//    alert(`voce acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//} else {
//    alert(`voce acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//}

