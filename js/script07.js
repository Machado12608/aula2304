
function ehPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


function encontrarPrimos() {
    const inicio = parseInt(document.getElementById('inicio').value);
    const final = parseInt(document.getElementById('final').value);
    const resultadoElement = document.getElementById('resultado');


    if (isNaN(inicio) || isNaN(final) || inicio > final) {
        resultadoElement.innerHTML = "Por favor, insira valores válidos e o valor inicial não pode ser maior que o final.";
        resultadoElement.style.color = 'red';
        return;
    }

    let primos = [];
    

    for (let i = inicio; i <= final; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }

    if (primos.length > 0) {
        resultadoElement.innerHTML = `Números primos entre ${inicio} e ${final}: ${primos.join(', ')}`;
        resultadoElement.style.color = 'green';
    } else {
        resultadoElement.innerHTML = `Não há números primos entre ${inicio} e ${final}.`;
        resultadoElement.style.color = 'orange';
    }
}
