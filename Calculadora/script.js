const calcular = document.getElementById("calcular");




function IMC(){
    const nome = document.getElementById("nome").value;// .value acessa o valor dentro do elemento
    const altura = document.getElementById("altura").value; //acessa o valor dentro do elemento
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    //validar se os campos estão preenchidos
    if(nome !== '' && altura !== '' && peso !== ''){
        const valorImc = (peso/(altura*altura)).toFixed(2);

    let classificacao = "";

    if (valorImc < 18.5){
         classificacao = "Abaixo do peso!";
    } else if (valorImc < 25){
        classificacao = "Peso ideal";
    }   else if (valorImc < 30){
        classificacao = "Levemente acima do peso";
    } else if (valorImc < 35){
        classificacao = "Obesidade Grau 1º";
    }else if (valorImc < 40){
        classificacao = "Obesidade Morbida";
    }

    resultado.textContent = `${nome} seu IMC é ${valorImc} e você está com ${classificacao}`;

}else{
    resultado.textContent = 'Preencha todos os campos!!!';
}
} 

calcular.addEventListener('click',IMC)

