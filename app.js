'use strict'
window.onload = function() {
    document.querySelector('#btnCalcular').addEventListener('click', async function() {
        const criptoMoneda = document.getElementById('criptomoneda').value
        const moneda = document.getElementById('moneda').value

        const data = await consumirApi(criptoMoneda, moneda)
        document.getElementById('res').style.opacity = '1'
        document.getElementById('res').innerHTML = 
        `Valor actual = ${data.RAW[criptoMoneda][moneda].PRICE} ${moneda}</br>
        Valor max en las ultimas 24H = ${data.RAW[criptoMoneda][moneda].HIGH24HOUR} ${moneda}</br>
        Valor min en las ultimas 24H = ${data.RAW[criptoMoneda][moneda].LOW24HOUR} ${moneda}</br>`
    })
}

const consumirApi = (criptoMoneda, moneda) => 
    fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`)
        .then(res => res.json())
        .catch(err => console.log(err))
