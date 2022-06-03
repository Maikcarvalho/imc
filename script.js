let calcular = document.getElementById('calcular')

function imc(){
    //Nome, altura, peso e resultado
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){
        
    let valorIMC = (peso / (altura * altura))

        if(valorIMC <18.5){
            tipoIMC = 'abaixo do peso'

        }else if(valorIMC >=18.6 && valorIMC <=25.0){
            tipoIMC = 'peso normal'

        }else if(valorIMC >=25.1 && valorIMC <=29.9){
        tipoIMC = 'excesso de peso'

        }else if(valorIMC <=30.0 && valorIMC <=34.9){
        tipoIMC = 'obesidade grau I'

        }else if(valorIMC <=35.0 && valorIMC <=39.9){
        tipoIMC = 'obesidade grau II'

        }else {
        tipoIMC = 'obesidade grau III'
        }

        resultado.textContent = `${nome} o seu IMC é ${valorIMC.toFixed(2)} e você está ${tipoIMC}`
    }
}

calcular.addEventListener('click,imc')