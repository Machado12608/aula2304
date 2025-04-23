function converterHoras() {
    const input = document.getElementById('horas').value;
    const resultado = document.getElementById('resultado');

    const horas = parseFloat(input);

    if (isNaN(horas) || horas < 0) {
        resultado.innerHTML = "Por favor, insira um valor válido (maior ou igual a 0).";
        resultado.style.color = 'red';
        return;
    }

    const minutos = horas * 60;
    const segundos = horas * 3600;

    resultado.innerHTML = `${horas} hora(s) equivale a:<br>
                          <strong>${minutos.toFixed(2)} minutos</strong> ou 
                          <strong>${segundos.toFixed(2)} segundos</strong>.`;
    resultado.style.color = 'green';
}
