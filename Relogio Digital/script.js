const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time(){
    let dateToday = new Date(); //Atribui a data de Hj a varivel 

    let hr = dateToday.getHour(); //Pegar a Hora da variavel
    let min = dateToday.getMinutes(); //Pegar os minutos da variavel
    let s = dateToday.getSeconds(); //Pegar os segundos da variavel

    horas.textContent = hr; // muta o texto no html
    minutos.textContent = minutos;
    segundos.textCont = segundos;
})

