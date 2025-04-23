function validarCPF() {
    const input = document.getElementById('cpf').value;
    const resultado = document.getElementById('resultado');


    const cpf = input.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        resultado.innerHTML = "CPF inválido.";
        resultado.style.color = 'red';
        return;
    }


    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let primeiroDigito = (soma * 10) % 11;
    if (primeiroDigito === 10 || primeiroDigito === 11) {
        primeiroDigito = 0;
    }

    if (primeiroDigito !== parseInt(cpf.charAt(9))) {
        resultado.innerHTML = "CPF inválido.";
        resultado.style.color = 'red';
        return;
    }


    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    let segundoDigito = (soma * 10) % 11;
    if (segundoDigito === 10 || segundoDigito === 11) {
        segundoDigito = 0;
    }

    if (segundoDigito !== parseInt(cpf.charAt(10))) {
        resultado.innerHTML = "CPF inválido.";
        resultado.style.color = 'red';
        return;
    }


    resultado.innerHTML = "CPF válido!";
    resultado.style.color = 'green';
}
