let total = document.getElementById("total")
let opcionEuro = null
function convertir(){

    let valor = parseFloat(document.getElementById('imputId').value);
    if (opcionEuro === "valorEuros"){
        total.innerHTML = valor*0.24;
        return
    }
    total.innerHTML = valor*0.26
 
}
    let valor = parseFloat(document.getElementById('imputId').value);
    total.innerHTML = valor*0.26
    function getValue (){
        opcionEuro = document.getElementById("originCurrency").value
    }