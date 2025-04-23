function calcularMedia(){
    const n1 = parseFloat(document.getElementById('nota01').value);
    const n2 = parseFloat(document.getElementById('nota02').value);
    const n3 = parseFloat(document.getElementById('nota03').value);

    var media = (n1  + n2 + n3) / 3;

    let status = ''
    if (media >= 7){
        status = 'aprovado';
    } else {
        status = 'reprovado';
    }

    document.getElementById('resultado').innerHTML = `Média: ${media.toFixed(2)} - ${status}`;

}