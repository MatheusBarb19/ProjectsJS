const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {

    let dateToday = new Date(); //Atribui a data de Hj a varivel 
    let hr = dateToday.getHours(); //Pegar a Hora da variavel
    let min = dateToday.getMinutes(); //Pegar os minutos da variavel
    let s = dateToday.getSeconds(); //Pegar os segundos da variavel


    if (hr <10){
        hr = "0" + hr;} //adciona o numero 0 se for menor que 10

    if (min <10){
        min = "0" + min;} //adciona o numero 0 se for menor que 10

    if (s <10){
        s = "0" + s;} //adciona o numero 0 se for menor que 10 

    horas.textContent = hr; // muda o texto no html
    minutos.textContent = min;
    segundos.textContent = s;
})




