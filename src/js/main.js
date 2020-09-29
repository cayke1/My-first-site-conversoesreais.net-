/*variáveis*/
var moedafirst = '';
var form = document.querySelector("#form");
form.addEventListener ("submit", function(event){
    event.preventDefault();
})
var form = document.querySelector("#form2");
form.addEventListener ("submit", function(event){
    event.preventDefault();
})
var form = document.querySelector("#form3");
form.addEventListener ("submit", function(event){
    event.preventDefault();
})
var form = document.querySelector("#form4");
form.addEventListener ("submit", function(event){
    event.preventDefault();
})
var form = document.querySelector("#form5");
form.addEventListener ("submit", function(event){
    event.preventDefault();
})
var form = document.querySelector("#form6");
form.addEventListener ("submit", function(event){
    event.preventDefault();
})



fetch ('https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL,BTC-BRL,ARS-BRL,ETH-BRL', {
    method: 'GET',
})

.then (function(response){
    return response.json();
})
.then (function fodasi(data){
    /*console.log (data);*/
    doll = data.USD.high    
    euro = data.EUR.high
    peso = data.ARS.high
    real = 1
    bitcoin = data.BTC.high
    etherium = data.ETH.high
})
function conversaodoll () {
    parseFloat(moedafirst);  
    moedafirst = document.getElementById('valor').value;
    (moedafirst *= doll);
    var formatado = moedafirst.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
     document.getElementById('valorDaMoeda').innerHTML = formatado;
}
function conversaobrl () {
    parseFloat(moedafirst);  
    moedafirst = document.getElementById('valor2').value;
    (moedafirst /= doll);
    var formatado = moedafirst.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' });
     document.getElementById('valorDaMoeda2').innerHTML = formatado;
}
function conversaoeur () {
    parseFloat(moedafirst);  
    moedafirst = document.getElementById('valor3').value;
    (moedafirst *= euro);
    var formatado = moedafirst.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
     document.getElementById('valorDaMoeda3').innerHTML = formatado;
}
function conversaobrleur () {
    parseFloat(moedafirst);
    moedafirst = document.getElementById('valor4').value;
    (moedafirst /= euro);
    var formatado = moedafirst.toLocaleString('pt-BR', { style: 'currency', currency: 'EUR' });
     document.getElementById('valorDaMoeda4').innerHTML = formatado;
}
function conversaoars () {
    parseFloat(moedafirst);  
    moedafirst = document.getElementById('valor5').value;
    (moedafirst *= peso);
    var formatado = moedafirst.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
     document.getElementById('valorDaMoeda5').innerHTML = formatado;
}
function conversaobrlars () {
    parseFloat(moedafirst);  
    moedafirst = document.getElementById('valor6').value;
    (moedafirst /= peso);
    var formatado = moedafirst.toLocaleString('pt-BR', { style: 'currency', currency: 'ARS'});
     document.getElementById('valorDaMoeda6').innerHTML = formatado;
}