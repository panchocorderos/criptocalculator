const consumirApi = (criptoMoneda, moneda) => {
    fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}` )
      
        .then((response) => 
            response.json()
        )
        .then((data) => {
            document.getElementById("res").style.opacity = "1";
            document.getElementById("res").innerHTML = 
            "Valor actual = " +data.RAW[criptoMoneda][moneda].PRICE+" " +moneda+"</br>"+
            "Valor max en las ultimas 24H = " +data.RAW[criptoMoneda][moneda].HIGH24HOUR+" " +moneda+"</br>"+
            "Valor min en las ultimas 24H = " + data.RAW[criptoMoneda][moneda].LOW24HOUR+" " +moneda+"</br>" ;
        
        })
        .catch((err) => {
            console.log(err);
        })
}


document.querySelector("#btnCalcular").addEventListener('click',function(){
    let criptoMoneda=document.getElementById("criptomoneda").value;
    let moneda=document.getElementById("moneda").value;
   consumirApi(criptoMoneda, moneda);
 })
   
