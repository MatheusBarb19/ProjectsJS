const calcular = document.getElementById("calcular");




function IMC(){
    const nome = document.getElementById("nome").value;// .value acessa o valor dentro do elemento
    const altura = document.getElementById("altura").value; //acessa o valor dentro do elemento
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    //validar se os campos estão preenchidos
    if(nome == '' && altura == '' && peso == ''){
        resultado.textContent = "Preencha todos os campos"
    }else{
        const valorImc = (peso/(altura*altura)).toFixed(2);
        resultado.textContent = valorImc;
    }
}

calcular.addEventListener('click',IMC)

