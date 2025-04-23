// Função para calcular o fatorial de um número
function calcularFatorial() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(numero) || numero < 0) {
        resultado.innerHTML = "Por favor, insira um número válido (não negativo).";
        resultado.style.color = 'red';
        return;
    }

    let fatorial = 1;
    
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    resultado.innerHTML = `O fatorial de ${numero} é ${fatorial}.`;
    resultado.style.color = 'green';
}
