// Gera um número aleatório entre 1 e 10
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

function verificarTentativa() {
    const tentativa = parseInt(document.getElementById('tentativa').value);
    const mensagem= document.getElementById('mensagem');

    tentativas++;

    if (tentativa === numeroAleatorio) {
        mensagem.innerHTML = `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas!`;
        mensagem.style.color = 'green';
    } else if (tentativa < numeroAleatorio) {
        mensagem.innerHTML = "O número é maior. Tente novamente.";
        mensagem.style.color = 'blue';
    } else {
        mensagem.innerHTML = "O número é menor. Tente novamente.";
        mensagem.style.color = 'blue';
    }
}
