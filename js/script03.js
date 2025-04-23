function verificaIdade(){
    const idade = parseInt(document.getElementById('idade').value);

    if (idade < 12){
        document.getElementById('resultado').innerHTML = 'Criança';
    } else if (idade <= 17){
        document.getElementById('resultado').innerHTML = 'Adolecente';
    } else if (idade  >= 18 && idade < 50){
        document.getElementById('resultado').innerHTML = 'Adulto';
    } else if (idade >= 50){
        document.getElementById('resultado').innerHTML = 'Idoso';
    }

}