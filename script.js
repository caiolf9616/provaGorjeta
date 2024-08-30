const calcularGojeta = (valorConta,qualidadeServico) =>{
    let percentualGorjeta; 

    switch (qualidadeServico) {
        case 'bom':
            percentualGorjeta = 0.20
            break;
        case 'regular':
            percentualGorjeta = 0.15
            break;
        case 'ruim':
            percentualGorjeta = 0.10
            break; 
        default:
            percentualGorjeta = 0       
    }

    return valorConta * percentualGorjeta

}

const mostraResultado = (gorjeta) => {
    const resultadoDiv = document.getElementById('resultadoGorjeta')
    resultadoDiv.innerHTML = `Gorjeta: R$ ${gorjeta.toFixed(2)}`
}

const processarFormulario = () => {
    const valorConta = parseFloat(document.getElementById('valorConta').value)
    const qualidadeServico = document.getElementById('servico').value

    if (isNaN(valorConta) || qualidadeServico ==='selecione'){
        alert('Por favor, insira um valor de conta válido e Selecione a qualidade do serviço')
        return
    }

    const gorjeta = calcularGojeta (valorConta, qualidadeServico)
    mostraResultado(gorjeta)
}

document.getElementById('calcularGorjeta').addEventListener('click', processarFormulario)