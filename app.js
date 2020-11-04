const consumirApi = (criptoMoneda, moneda) => {
  fetch(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("res").style.opacity = "1";
      document.getElementById("res").innerHTML = `<h2>El precio es:</h2> 
      <p>${data.DISPLAY[criptoMoneda][moneda].PRICE}</p>
      <p>Máximo del día: <span>${data.DISPLAY[criptoMoneda][moneda].HIGH24HOUR}</span></p> 
      <p>Mínimo del día: <span>${data.DISPLAY[criptoMoneda][moneda].LOW24HOUR}</span></p> 
      <p>Variación diaria: <span>% ${data.DISPLAY[criptoMoneda][moneda].CHANGEPCTDAY}</span></p>
      <p>Última actualización: <span>${data.DISPLAY[criptoMoneda][moneda].LASTUPDATE}</span></p>
      `;
    })
    .catch((err) => {
      console.log(err);
    });
};

document.querySelector("#btnCalcular").addEventListener("click", function () {
  let criptoMoneda = document.getElementById("criptomoneda").value;
  let moneda = document.getElementById("moneda").value;
  consumirApi(criptoMoneda, moneda);
});
